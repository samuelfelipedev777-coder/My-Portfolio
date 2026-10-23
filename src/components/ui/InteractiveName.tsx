"use client";
import { images } from "@/config/images";
import { styles } from "@/config/styles";

const projects = [
  { src: images.falling, name: "Falling" },
  { src: images.reavsec, name: "Reavsec" },
  { src: images.roomate, name: "Roomate" },
  { src: images.wrenchOS, name: "WrenchOS" },
];

interface InteractiveNameProps {
  pointerX: number | null;
}

export function InteractiveName({ pointerX }: InteractiveNameProps) {
  const position =
    pointerX === null ? 0 : Math.max(0, Math.min(0.9999, (pointerX + 1) / 2));

  const activeIndex =
    pointerX === null
      ? 0
      : Math.min(projects.length - 1, Math.floor(position * projects.length));

  const intensity = pointerX === null ? 0 : Math.abs(pointerX);
  const compression = intensity * 0.22;

  const leftScale = pointerX !== null && pointerX < 0 ? 1 - compression : 1;

  const rightScale = pointerX !== null && pointerX > 0 ? 1 - compression : 1;

  const imageShift = pointerX === null ? 0 : pointerX * 34;

  const transition = "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div className={styles.hero.interactiveNameInner}>
      <div className="mx-auto w-full max-w-[1600px]">
        <div className={styles.hero.interactiveNameRow}>
          <span
            className={styles.hero.interactiveNameText}
            style={{
              transform: `translate3d(${imageShift * 0.35}px, 0, 0) scaleX(${leftScale})`,
              transformOrigin: "left center",
              transition,
              willChange: "transform",
            }}
          >
            Samuel
          </span>

          <div
            className={styles.hero.interactiveNameImage}
            style={{
              transform: `translate3d(${imageShift}px, 0, 0)`,
              transition,
              willChange: "transform",
            }}
          >
            {projects.map((project, index) => (
              <img
                key={project.name}
                src={project.src}
                alt={project.name}
                draggable={false}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  transform: "scale(1.16)",
                  transition: "opacity 500ms ease",
                }}
              />
            ))}
          </div>

          <span
            className={styles.hero.interactiveNameText}
            style={{
              transform: `translate3d(${imageShift * 0.35}px, 0, 0) scaleX(${rightScale})`,
              transformOrigin: "right center",
              transition,
              willChange: "transform",
            }}
          >
            Felipe
          </span>
        </div>
      </div>
    </div>
  );
}