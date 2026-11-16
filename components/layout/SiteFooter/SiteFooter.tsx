"use client";

import type { ReactElement } from "react";
import { BrandMark } from "@/components/ui/BrandMark/BrandMark";
import { useLocale } from "@/context/LocaleContext";
import { SITE } from "@/data/site";
import "./site-footer.desktop.css";
import "./site-footer.mobile.css";

export const SiteFooter = (): ReactElement => {
  const { dictionary } = useLocale();

  return (
    <footer>
      <div className="fg">
        <div>
          <BrandMark
            ariaLabel={dictionary.nav.brandAria}
            className="footer-mark"
          />
          <span className="footer-location">{SITE.location}</span>
        </div>
        <div>
          <h4>{dictionary.footer.follow}</h4>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary.footer.instagram}
          </a>
        </div>
        <div>
          <h4>{dictionary.footer.contact}</h4>
          <span>{SITE.contactPlaceholder}</span>
        </div>
        <div>
          <h4>{dictionary.footer.explore}</h4>
          <a href="#work">{dictionary.footer.work}</a>
          <a href="#services">{dictionary.footer.services}</a>
          <a href="#book">{dictionary.footer.book}</a>
        </div>
      </div>
      <div className="fine">
        <span>{dictionary.footer.copyright}</span>
        <span>{SITE.locationShort}</span>
      </div>
    </footer>
  );
};
