"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollExperienceProps = {
  frameCount?: number;
  framePath?: string;
};

const BACKGROUND = "#07111f";
const MAX_PIXEL_RATIO = 2;
const FETCH_CONCURRENCY = 3;

const DECODED_BUDGET_BYTES = 200 * 1024 * 1024;
const START_DELAY_MS = 400;
const SCROLL_IDLE_MS = 150;
const SCROLLING_REACH = 4;

export default function ScrollExperience({
  frameCount = 86,
  framePath = "/frames",
}: ScrollExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });

    if (!section || !canvas || !context || frameCount < 1) return;

    const lastFrame = frameCount - 1;
    const abortController = new AbortController();
    const maxPixels = DECODED_BUDGET_BYTES / 4 / frameCount;

    const blobs = new Array<Blob | undefined>(frameCount);
    const bitmaps = new Array<ImageBitmap | undefined>(frameCount);

    let disposed = false;
    let started = false;
    let scheduled = false;
    let busy = false;
    let target = 0;
    let shown = -1;
    let lastScroll = 0;
    let naturalWidth = 0;
    let naturalHeight = 0;
    let decodeWidth = 0;
    let decodeHeight = 0;
    let idleId = 0;
    let timerId = 0;
    let startId = 0;

    const frameUrl = (index: number) =>
      `${framePath}/${String(index + 1).padStart(2, "0")}.webp`;

    const nearestDecoded = (index: number) => {
      if (bitmaps[index]) return index;

      for (let distance = 1; distance < frameCount; distance++) {
        if (bitmaps[index - distance]) return index - distance;
        if (bitmaps[index + distance]) return index + distance;
      }

      return -1;
    };

    const layoutCanvas = () => {
      const cssWidth = canvas.clientWidth;
      const cssHeight = canvas.clientHeight;

      if (!cssWidth || !cssHeight) return false;

      let ratio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);

      if (naturalWidth) {
        const cover = Math.max(
          cssWidth / naturalWidth,
          cssHeight / naturalHeight,
        );
        ratio = Math.min(ratio, 1 / cover);
      }

      const area = cssWidth * ratio * (cssHeight * ratio);
      if (area > maxPixels) ratio *= Math.sqrt(maxPixels / area);

      const width = Math.max(1, Math.round(cssWidth * ratio));
      const height = Math.max(1, Math.round(cssHeight * ratio));

      if (canvas.width === width && canvas.height === height) return false;

      canvas.width = width;
      canvas.height = height;
      context.fillStyle = BACKGROUND;
      context.fillRect(0, 0, width, height);
      shown = -1;

      return true;
    };

    const render = () => {
      const index = nearestDecoded(target);
      const bitmap = index >= 0 ? bitmaps[index] : undefined;

      if (!bitmap || index === shown || !canvas.width || !canvas.height) return;

      const { width, height } = canvas;
      const scale = Math.max(width / bitmap.width, height / bitmap.height);
      const sourceWidth = width / scale;
      const sourceHeight = height / scale;

      context.drawImage(
        bitmap,
        (bitmap.width - sourceWidth) / 2,
        (bitmap.height - sourceHeight) / 2,
        sourceWidth,
        sourceHeight,
        0,
        0,
        width,
        height,
      );

      shown = index;
    };

    const schedule = (delay = 0) => {
      if (disposed || !started || scheduled) return;

      scheduled = true;

      const run = () => {
        scheduled = false;
        pump();
      };

      if (delay > 0) {
        timerId = window.setTimeout(run, delay);
        return;
      }

      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(run, { timeout: 300 });
        return;
      }

      timerId = window.setTimeout(run, 40);
    };

    const probeSize = (index: number) => {
      const blob = blobs[index];
      if (!blob) return;

      busy = true;

      createImageBitmap(blob).then(
        (bitmap) => {
          busy = false;
          naturalWidth = bitmap.width;
          naturalHeight = bitmap.height;
          bitmap.close();

          if (disposed) return;

          const scale = Math.min(
            1,
            Math.sqrt(maxPixels / (naturalWidth * naturalHeight)),
          );

          decodeWidth = Math.max(1, Math.round(naturalWidth * scale));
          decodeHeight = Math.max(1, Math.round(naturalHeight * scale));

          layoutCanvas();
          schedule();
        },
        () => {
          busy = false;
          blobs[index] = undefined;
          schedule();
        },
      );
    };

    const decodeFrame = (index: number) => {
      const blob = blobs[index];
      if (!blob) return;

      busy = true;

      createImageBitmap(blob, {
        resizeWidth: decodeWidth,
        resizeHeight: decodeHeight,
        resizeQuality: "medium",
      }).then(
        (bitmap) => {
          busy = false;

          if (disposed) {
            bitmap.close();
            return;
          }

          bitmaps[index] = bitmap;
          blobs[index] = undefined;

          render();
          schedule();
        },
        () => {
          busy = false;
          blobs[index] = undefined;
          schedule();
        },
      );
    };

    const pump = () => {
      if (disposed || busy) return;

      const scrolling = performance.now() - lastScroll < SCROLL_IDLE_MS;

      if (!decodeWidth) {
        const first = blobs.findIndex(Boolean);
        if (first >= 0) probeSize(first);
        return;
      }

      const reach = scrolling ? SCROLLING_REACH : frameCount;
      let pending = false;

      for (let offset = 0; offset < frameCount; offset++) {
        for (const index of [target + offset, target - offset]) {
          if (index < 0 || index >= frameCount) continue;
          if (bitmaps[index] || !blobs[index]) continue;

          pending = true;

          if (offset <= reach) {
            decodeFrame(index);
            return;
          }
        }
      }

      if (pending) schedule(SCROLL_IDLE_MS);
    };

    const setTarget = (progress: number) => {
      const next = Math.min(
        lastFrame,
        Math.max(0, Math.round(progress * lastFrame)),
      );

      if (next === target) return;

      target = next;
      lastScroll = performance.now();
      render();
      schedule();
    };

    const loadBlobs = async () => {
      const queue = Array.from(
        { length: frameCount },
        (_, index) => index,
      ).sort((a, b) => Math.abs(a - target) - Math.abs(b - target));

      const worker = async () => {
        for (
          let index = queue.shift();
          index !== undefined;
          index = queue.shift()
        ) {
          if (disposed) return;

          try {
            const response = await fetch(frameUrl(index), {
              signal: abortController.signal,
            });

            if (!response.ok) continue;

            blobs[index] = await response.blob();
            schedule();
          } catch {
            if (disposed) return;
          }
        }
      };

      await Promise.all(Array.from({ length: FETCH_CONCURRENCY }, worker));
    };

    const start = () => {
      if (disposed || started) return;

      startId = window.setTimeout(() => {
        if (disposed) return;
        started = true;
        void loadBlobs();
      }, START_DELAY_MS);
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
    }

    const resizeObserver = new ResizeObserver(() => {
      if (layoutCanvas()) render();
    });
    resizeObserver.observe(canvas);

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setTarget(self.progress),
      onRefresh: (self) => setTarget(self.progress),
    });

    setTarget(trigger.progress);

    return () => {
      disposed = true;
      abortController.abort();
      window.removeEventListener("load", start);
      window.clearTimeout(startId);
      window.clearTimeout(timerId);
      if ("cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
      resizeObserver.disconnect();
      trigger.kill();

      bitmaps.forEach((bitmap) => bitmap?.close());
      bitmaps.fill(undefined);
      blobs.fill(undefined);
    };
  }, [frameCount, framePath]);

  return (
    <section
      ref={sectionRef}
      aria-label="Scroll-controlled visual experience"
      className="relative h-[700vh] bg-[#07111f]"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-[#07111f]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-label="Animação visual controlada pela rolagem"
          role="img"
        />
      </div>
    </section>
  );
}
