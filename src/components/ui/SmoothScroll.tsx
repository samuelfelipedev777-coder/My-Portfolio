"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export let lenisInstance: Lenis | null = null;

let wheelVelocity = 0;

export function resetWheelVelocity() {
  wheelVelocity = 0;
}

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.085,
      wheelMultiplier: 2.0,
    });

    lenisInstance = lenis;

    window.dispatchEvent(new Event("lenis-ready"));

    let lastWheelTime = performance.now();

    const handleWheel = (event: WheelEvent) => {
      const now = performance.now();
      const deltaTime = Math.min(now - lastWheelTime, 50);
      lastWheelTime = now;

      if (Math.abs(event.deltaY) < 0.1) return;

      const delta = event.deltaY;

      wheelVelocity += delta * 0.045;
      wheelVelocity = Math.max(-35, Math.min(35, wheelVelocity));

      const intensity = Math.min(Math.abs(delta) / 100, 1);

      wheelVelocity += delta * 0.015 * intensity * (deltaTime / 16.67);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    const update = (time: number) => {
      const deltaTime = time * 1000;

      if (Math.abs(wheelVelocity) > 0.01) {
        const currentScroll = lenis.scroll;

        lenis.scrollTo(currentScroll + wheelVelocity, {
          immediate: false,
          force: true,
        });

        wheelVelocity *= 0.91;
      }

      lenis.raf(deltaTime);
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisInstance = null;
      wheelVelocity = 0;
    };
  }, []);

  return null;
}