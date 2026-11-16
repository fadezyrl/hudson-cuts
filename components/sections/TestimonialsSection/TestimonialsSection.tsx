"use client";

import {
  useCallback,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type ReactElement,
  type TouchEvent,
} from "react";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { useLocale } from "@/context/LocaleContext";

const AUTO_MS = 6500;
const SWIPE_THRESHOLD = 48;

type ReviewKey = "fynn" | "levi" | "campbell";

const REVIEW_KEYS: ReviewKey[] = ["fynn", "levi", "campbell"];

export const TestimonialsSection = (): ReactElement => {
  const { dictionary } = useLocale();
  const copy = dictionary.testimonials;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = REVIEW_KEYS.length;

  const goTo = useCallback((next: number): void => {
    setIndex(((next % total) + total) % total);
  }, [total]);

  const onAutoAdvance = useEffectEvent((): void => {
    if (paused) {
      return;
    }
    goTo(index + 1);
  });

  useEffect(() => {
    if (paused) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const id = window.setInterval(() => onAutoAdvance(), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, index]);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    setPaused(true);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>): void => {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    setPaused(false);

    if (start == null || end == null) {
      return;
    }

    const delta = end - start;
    if (Math.abs(delta) < SWIPE_THRESHOLD) {
      return;
    }

    goTo(delta < 0 ? index + 1 : index - 1);
  };

  return (
    <section
      className="testimonials"
      id="reviews"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="testimonials-top">
        <header className="testimonials-head">
          <div className="eyebrow">{copy.eyebrow}</div>
          <Reveal as="h2" id="testimonials-heading">
            {copy.titleLine1} <em>{copy.titleEm}</em>
          </Reveal>
        </header>

        <div className="testimonials-controls">
          <button
            type="button"
            className="testimonials-nav"
            aria-label={copy.prevAria}
            onClick={() => goTo(index - 1)}
          >
            <span aria-hidden="true">←</span>
          </button>
          <div
            className="testimonials-dots"
            role="tablist"
            aria-label={copy.dotsAria}
          >
            {REVIEW_KEYS.map((key, i) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${copy.goToAria} ${i + 1}`}
                className={`testimonials-dot${i === index ? " is-active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="testimonials-nav"
            aria-label={copy.nextAria}
            onClick={() => goTo(index + 1)}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        className="testimonials-carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {REVIEW_KEYS.map((key, i) => {
          const item = copy.items[key];
          const isActive = i === index;
          return (
            <article
              className={`testimonials-slide${isActive ? " is-active" : ""}`}
              key={key}
              aria-hidden={!isActive}
            >
              <blockquote className="testimonials-quote">
                <span className="testimonials-mark" aria-hidden="true">
                  “
                </span>
                <p>{item.quote}</p>
              </blockquote>
              <div className="testimonials-meta">
                <span className="testimonials-stars" aria-hidden="true">
                  ★★★★★
                </span>
                <cite className="testimonials-name">{item.name}</cite>
                <span className="testimonials-sep" aria-hidden="true">
                  ·
                </span>
                <span className="testimonials-when">{item.when}</span>
                {item.source === "google" ? (
                  <>
                    <span className="testimonials-sep" aria-hidden="true">
                      ·
                    </span>
                    <span className="testimonials-source">
                      {copy.fromGoogle}
                    </span>
                  </>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
