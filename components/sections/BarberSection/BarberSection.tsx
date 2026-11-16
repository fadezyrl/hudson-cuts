"use client";

import type { ReactElement } from "react";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { useLocale } from "@/context/LocaleContext";
import "./barber-section.desktop.css";
import "./barber-section.mobile.css";

export const BarberSection = (): ReactElement => {
  const { dictionary } = useLocale();

  return (
    <section className="barber" id="hudson" aria-labelledby="barber-heading">
      <div className="big" aria-hidden="true">
        H
      </div>
      <div className="bw">
        <PhotoSlot slot={dictionary.barber.portraitSlot} />
        <div>
          <div className="eyebrow">{dictionary.barber.eyebrow}</div>
          <Reveal as="h2" id="barber-heading">
            {dictionary.barber.title}
          </Reveal>
          <Reveal as="p">{dictionary.barber.body}</Reveal>
          <Reveal className="sig">{dictionary.barber.signature}</Reveal>
        </div>
      </div>
    </section>
  );
};
