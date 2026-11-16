"use client";

import type { ReactElement } from "react";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { LuxuryMap } from "@/components/ui/LuxuryMap/LuxuryMap";
import { useLocale } from "@/context/LocaleContext";
import { SITE } from "@/data/site";

export const LocationSection = (): ReactElement => {
  const { dictionary } = useLocale();

  return (
    <section className="locate" id="find-us" aria-labelledby="location-heading">
      <div className="locate-copy">
        <div className="eyebrow">{dictionary.location.eyebrow}</div>
        <Reveal as="h2" id="location-heading" style={{ marginTop: 22 }}>
          {dictionary.location.titleLine1}{" "}
          <em>{dictionary.location.titleEm}</em>
        </Reveal>
        <Reveal as="p" className="locate-body">
          {dictionary.location.body}
        </Reveal>
        <Reveal className="locate-card">
          <span className="locate-address">{SITE.addressLine}</span>
          <span className="locate-locality">{SITE.addressLocality}</span>
          <a
            className="cta locate-cta"
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary.location.directions}
          </a>
        </Reveal>
      </div>
      <div className="locate-map">
        <LuxuryMap
          mapAria={dictionary.location.mapAria}
          markerAria={dictionary.location.markerAria}
        />
      </div>
    </section>
  );
};
