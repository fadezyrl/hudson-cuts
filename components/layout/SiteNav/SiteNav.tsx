"use client";

import { useEffect, useState, type ReactElement } from "react";
import { BrandMark } from "@/components/ui/BrandMark/BrandMark";
import { useLocale } from "@/context/LocaleContext";
import { NAV_LINKS } from "@/data/site";
import { BOOKING_LINK_PROPS } from "@/lib/booking";

export const SiteNav = (): ReactElement => {
  const { dictionary } = useLocale();
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
        <a className="nbook" {...BOOKING_LINK_PROPS}>
          {dictionary.nav.book}
        </a>
      </div>
    </nav>
  );
};
