"use client";

import type { ReactElement } from "react";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { WORK_SLOTS } from "@/data/site";
import "./work-section.desktop.css";
import "./work-section.mobile.css";

export const WorkSection = (): ReactElement => {
  const { dictionary } = useLocale();
  const slots = dictionary.work.slots;

  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <div className="eyebrow">{dictionary.work.eyebrow}</div>
      <Reveal as="h2" id="work-heading" style={{ marginTop: 22 }}>
        {dictionary.work.titleLine1}
        <br />
        {dictionary.work.titleLine2} <em>{dictionary.work.titleEm}</em>
      </Reveal>
      <div className="wg">
        {WORK_SLOTS.map((item) => (
          <PhotoSlot
            key={item.className}
            className={item.className}
            slot={slots[item.slotKey]}
          />
        ))}
        <Reveal as="p" className="cap">
          {dictionary.work.caption}
        </Reveal>
      </div>
    </section>
  );
};
