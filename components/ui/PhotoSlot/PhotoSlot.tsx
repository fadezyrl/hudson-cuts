"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";

type PhotoSlotProps = {
  slot: string;
  src: string;
  className?: string;
  reveal?: boolean;
  priority?: boolean;
};

export const PhotoSlot = ({
  slot,
  src,
  className = "",
  reveal = true,
  priority = false,
}: PhotoSlotProps): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIn, setIsIn] = useState(!reveal);

  useEffect(() => {
    if (!reveal || isIn) {
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
      { threshold: 0.08, rootMargin: "10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reveal, isIn]);

  return (
    <div ref={ref} className={`ph ${className}`.trim()}>
      <div className={`ph-media${isIn ? " in" : ""}`}>
        <Image
          src={src}
          alt={slot}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="ph-img"
          priority={priority}
        />
        <span className="ph-label">{slot}</span>
      </div>
    </div>
  );
};
