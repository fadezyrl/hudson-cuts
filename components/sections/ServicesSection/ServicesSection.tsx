"use client";

import type { ReactElement } from "react";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { SERVICES } from "@/data/site";
import "./services-section.desktop.css";
import "./services-section.mobile.css";

export const ServicesSection = (): ReactElement => {
  const { dictionary } = useLocale();
  const items = dictionary.services.items;

  return (
    <section className="svc" id="services" aria-labelledby="services-heading">
      <header>
        <div>
          <div className="eyebrow eyebrow-dark">{dictionary.services.eyebrow}</div>
          <Reveal as="h2" id="services-heading" style={{ marginTop: 22 }}>
            {dictionary.services.titleBefore}{" "}
            <em>{dictionary.services.titleEm}</em>
          </Reveal>
        </div>
        <p>{dictionary.services.intro}</p>
      </header>
      <div className="rows">
        {SERVICES.map((service) => {
          const key = service.id as keyof typeof items;
          return (
            <Reveal key={service.id} className="row">
              <span className="n">{service.id}</span>
              <span className="t">{items[key].name}</span>
              <span className="p">{items[key].price}</span>
            </Reveal>
          );
        })}
      </div>
      <p className="note">{dictionary.services.note}</p>
    </section>
  );
};
