"use client";

import type { ReactElement } from "react";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { getBookingHref } from "@/lib/booking";
import "./booking-section.desktop.css";
import "./booking-section.mobile.css";

export const BookingSection = (): ReactElement => {
  const { dictionary } = useLocale();

  return (
    <section className="book" id="book" aria-labelledby="booking-heading">
      <div className="eyebrow eyebrow-dark">{dictionary.booking.eyebrow}</div>
      <Reveal as="h2" id="booking-heading" style={{ marginTop: 22 }}>
        {dictionary.booking.titleLine1}
        <br />
        {dictionary.booking.titleLine2} <em>{dictionary.booking.titleEm}</em>
      </Reveal>
      <div className="r">
        <p>{dictionary.booking.body}</p>
        <a className="cta dk" href={getBookingHref()} data-booking>
          {dictionary.booking.cta}
        </a>
      </div>
    </section>
  );
};
