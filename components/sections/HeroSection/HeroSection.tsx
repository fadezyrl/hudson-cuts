"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactElement } from "react";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { IMAGES } from "@/data/images";
import { BOOKING_LINK_PROPS } from "@/lib/booking";

export const HeroSection = (): ReactElement => {
  const { dictionary } = useLocale();
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = (): void => {
      if (ticking) {
        return;
      }
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (bgRef.current && y < window.innerHeight) {
          bgRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="hero" id="top">
      <div className="bg" id="herobg" ref={bgRef} aria-hidden="true">
        <Image
          src={IMAGES.studio}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-img"
        />
      </div>
      <div className="hero-copy">
        <Reveal as="h1" eager>
          {dictionary.hero.titleLine1}
          <br />
          <em>{dictionary.hero.titleEm}</em>
        </Reveal>
        <Reveal eager>
          <p>{dictionary.hero.body}</p>
          <a className="cta" {...BOOKING_LINK_PROPS}>
            {dictionary.hero.cta}
          </a>
        </Reveal>
      </div>
    </header>
  );
};
