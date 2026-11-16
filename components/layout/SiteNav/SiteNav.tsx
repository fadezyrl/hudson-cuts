"use client";

import { useEffect, useState, type ReactElement } from "react";
import { BrandMark } from "@/components/ui/BrandMark/BrandMark";
import { useLocale } from "@/context/LocaleContext";
import { NAV_LINKS } from "@/data/site";
import { getBookingHref } from "@/lib/booking";
import "./site-nav.desktop.css";
import "./site-nav.mobile.css";

export const SiteNav = (): ReactElement => {
  const { dictionary, locale, setLocale } = useLocale();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = (): void => {
      if (ticking) {
        return;
      }
      ticking = true;
      requestAnimationFrame(() => {
        setSolid(window.scrollY > 60);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="nav" className={solid ? "solid" : undefined} aria-label="Primary">
      <BrandMark ariaLabel={dictionary.nav.brandAria} />
      <ul>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{dictionary.nav[link.labelKey]}</a>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button
          type="button"
          className="locale-toggle"
          aria-label={dictionary.locale.switchAria}
          onClick={() => setLocale(locale === "EN" ? "UR" : "EN")}
        >
          {locale === "EN" ? dictionary.locale.ur : dictionary.locale.en}
        </button>
        <a className="nbook" href={getBookingHref()}>
          {dictionary.nav.book}
        </a>
      </div>
    </nav>
  );
};
