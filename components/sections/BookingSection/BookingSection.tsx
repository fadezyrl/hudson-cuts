"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { IMAGES } from "@/data/images";
import { BOOKING_LINK_PROPS } from "@/lib/booking";

export const BookingSection = (): ReactElement => {
  const { dictionary } = useLocale();

  return (
    <section className="book" id="book" aria-labelledby="booking-heading">
      <div className="book-bg" aria-hidden="true">
        <Image
          src={IMAGES.studio}
          alt=""
          fill
          sizes="100vw"
          className="book-img"
        />
      </div>
      <div className="book-content">
        <div className="eyebrow">{dictionary.booking.eyebrow}</div>
        <Reveal as="h2" id="booking-heading" style={{ marginTop: 22 }}>
          {dictionary.booking.titleLine1}
          <br />
          {dictionary.booking.titleLine2} <em>{dictionary.booking.titleEm}</em>
        </Reveal>
        <div className="r">
          <p>{dictionary.booking.body}</p>
          <a className="cta" {...BOOKING_LINK_PROPS}>
            {dictionary.booking.cta}
          </a>
        </div>
      </div>
    </section>
  );
};
