"use client";

import type { ReactElement } from "react";
import { BrandMark } from "@/components/ui/BrandMark/BrandMark";
import { useLocale } from "@/context/LocaleContext";
import { SITE } from "@/data/site";
import { BOOKING_LINK_PROPS } from "@/lib/booking";

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
          <a
            className="footer-location"
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE.addressLine}
            <br />
            {SITE.addressLocality}
          </a>
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
          <a
            className="footer-handle"
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE.instagramHandle}
          </a>
        </div>
        <div>
          <h4>{dictionary.footer.contact}</h4>
          <a href={SITE.emailHref}>{SITE.email}</a>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
        </div>
        <div>
          <h4>{dictionary.footer.explore}</h4>
          <a href="#work">{dictionary.footer.work}</a>
          <a href="#services">{dictionary.footer.services}</a>
          <a {...BOOKING_LINK_PROPS}>{dictionary.footer.book}</a>
        </div>
      </div>
      <div className="fine">
        <span>{dictionary.footer.copyright}</span>
        <span className="fine-credit">
          {dictionary.footer.developedBy}{" "}
          <a
            href={SITE.fadezyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary.footer.developedByName}
          </a>
        </span>
        <span>{SITE.locationShort}</span>
      </div>
    </footer>
  );
};
