import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight, GPU-friendly scroll reveal (opacity + translate + slight scale).
 * Uses IntersectionObserver and CSS transitions only — no animation library.
 * Honours prefers-reduced-motion via the .reveal styles in styles.css.
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  ...rest
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    // Already in (or above) the viewport on mount — show without animating in.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={cn("reveal", shown && "reveal-in", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
