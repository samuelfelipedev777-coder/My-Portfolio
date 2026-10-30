import type { AnchorHTMLAttributes, ReactNode } from "react";
type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "light" | "dark";
};

const variants = {
  light:
    "bg-[#f3f0e8] text-[#07111f] hover:bg-white",
  dark:
    "bg-[#07111f] text-[#f3f0e8] hover:bg-[#14243a]",
};

export default function Button({
  children,
  href,
  variant = "light",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex min-h-14 items-center justify-center gap-8",
        "rounded-full px-6 py-4 text-sm font-medium",
        "transition-colors duration-300",
        "focus-visible:outline-2 focus-visible:outline-offset-4",
        "focus-visible:outline-current",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    >
      <span>{children}</span>

      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
      >
        →
      </span>
    </a>
  );
}