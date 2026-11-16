"use client";

import {
  useEffect,
  useRef,
  type ReactElement,
  type ReactNode,
  type HTMLAttributes,
} from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "div" | "h1" | "h2" | "p" | "span";
  variant?: "rv" | "mask";
};

export const Reveal = ({
  children,
  as: Tag = "div",
  variant = "rv",
  className = "",
  ...rest
}: RevealProps): ReactElement => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`${variant} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
};
