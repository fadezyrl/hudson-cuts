"use client";

import type { ReactElement } from "react";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { useLocale } from "@/context/LocaleContext";

export const ServicesSection = (): ReactElement => {
  const { dictionary } = useLocale();
  const items = dictionary.services.items;
  const rows = Object.entries(items);

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
        {rows.map(([id, item]) => (
          <Reveal key={id} className="row">
            <span className="n">{id}</span>
            <span className="t">
              {item.name}
              <span className="meta">{item.duration}</span>
            </span>
            <span className="p">{item.price}</span>
          </Reveal>
        ))}
      </div>
      <p className="note">{dictionary.services.note}</p>
    </section>
  );
};
