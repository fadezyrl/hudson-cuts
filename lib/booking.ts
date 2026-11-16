import { SITE } from "@/data/site";

export const getBookingHref = (): string => SITE.bookingUrl;

export const BOOKING_LINK_PROPS = {
  href: SITE.bookingUrl,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
