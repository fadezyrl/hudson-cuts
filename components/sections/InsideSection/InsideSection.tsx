"use client";

import type { ReactElement } from "react";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { INSIDE_SLOTS } from "@/data/site";
import "./inside-section.desktop.css";
import "./inside-section.mobile.css";

export const InsideSection = (): ReactElement => {
  const { dictionary } = useLocale();
  const slots = dictionary.inside.slots;

  return (
    <section className="inside" id="inside" aria-labelledby="inside-heading">
      <div className="eyebrow">{dictionary.inside.eyebrow}</div>
      <Reveal as="h2" id="inside-heading" style={{ marginTop: 22 }}>
        {dictionary.inside.titleLine1}
        <br />
        {dictionary.inside.titleLine2}{" "}
        <span className="serif inside-em">{dictionary.inside.titleEm}</span>
      </Reveal>
      <div className="ig">
        {INSIDE_SLOTS.map((item) => (
          <PhotoSlot
            key={item.className}
            className={item.className}
            slot={slots[item.slotKey]}
          />
        ))}
      </div>
    </section>
  );
};
