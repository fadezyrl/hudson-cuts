"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
  type HTMLAttributes,
} from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "div" | "h1" | "h2" | "p" | "span";
  variant?: "rv" | "mask";
  eager?: boolean;
};

export const Reveal = ({
  children,
  as: Tag = "div",
  variant = "rv",
  eager = false,
  className = "",
  ...rest
}: RevealProps): ReactElement => {
  const ref = useRef<HTMLElement | null>(null);
  const [isIn, setIsIn] = useState(eager);

  useEffect(() => {
    if (isIn) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsIn(true);
      return;
    }

    const show = (): void => setIsIn(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "25% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isIn]);

  return (
    <Tag
      ref={ref as never}
      className={`${variant}${isIn ? " in" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
};
