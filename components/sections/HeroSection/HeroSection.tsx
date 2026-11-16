"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { getBookingHref } from "@/lib/booking";
import "./hero-section.desktop.css";
import "./hero-section.mobile.css";

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
      <div
        className="bg"
        id="herobg"
        ref={bgRef}
        data-label={dictionary.hero.bgLabel}
        aria-hidden="true"
      />
      <div className="in">
        <Reveal as="h1">
          {dictionary.hero.titleLine1}
          <br />
          <em>{dictionary.hero.titleEm}</em>
        </Reveal>
        <Reveal>
          <p>{dictionary.hero.body}</p>
          <a className="cta" href={getBookingHref()} data-booking>
            {dictionary.hero.cta}
          </a>
        </Reveal>
      </div>
    </header>
  );
};
