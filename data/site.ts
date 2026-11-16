import { IMAGES } from "@/data/images";

export type ServiceItem = {
  id: string;
};

export const SITE = {
  brand: "Hudson.Cuts",
  brandParts: { name: "Hudson", dot: ".", cuts: "Cuts" } as const,
  location: "Christchurch, New Zealand",
  locationShort: "Christchurch · NZ",
  addressLine: "10 Domain Terrace",
  addressLocality: "Spreydon, Christchurch 8024",
  addressFull: "10 Domain Terrace, Spreydon, Christchurch 8024, New Zealand",
  map: {
    lat: -43.5569916,
    lng: 172.6054056,
    zoom: 15,
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=10+Domain+Terrace,+Spreydon,+Christchurch+8024",
  year: 2026,
  instagramUrl: "https://www.instagram.com/hudson.cuts/",
  instagramHandle: "@hudson.cuts",
  fadezyUrl: "https://fadezyrl.com",
  bookingUrl: "https://hudsoncuts.setmore.com",
  email: "hudsoncuts07@gmail.com",
  phone: "+64 22 453 2504",
  phoneHref: "tel:+64224532504",
  emailHref: "mailto:hudsoncuts07@gmail.com",
} as const;

export const NAV_LINKS = [
  { href: "#work", labelKey: "work" },
  { href: "#hudson", labelKey: "hudson" },
  { href: "#services", labelKey: "services" },
  { href: "#inside", labelKey: "inside" },
] as const;

export const SERVICES: ServiceItem[] = [
  { id: "01" },
  { id: "02" },
  { id: "03" },
];

export const WORK_SLOTS = [
  { className: "a", slotKey: "1", src: IMAGES.work[0] },
  { className: "b", slotKey: "2", src: IMAGES.work[1] },
  { className: "c", slotKey: "3", src: IMAGES.work[2] },
  { className: "d", slotKey: "4", src: IMAGES.work[3] },
  { className: "e", slotKey: "5", src: IMAGES.work[4] },
  { className: "f", slotKey: "1", src: IMAGES.work[5] },
  { className: "g", slotKey: "2", src: IMAGES.work[6] },
  { className: "h", slotKey: "3", src: IMAGES.work[7] },
  { className: "i", slotKey: "4", src: IMAGES.work[8] },
  { className: "j", slotKey: "5", src: IMAGES.work[9] },
] as const;

export const INSIDE_SLOTS = [
  { className: "p1", slotKey: "1", src: IMAGES.inside[0] },
  { className: "p2", slotKey: "2", src: IMAGES.inside[1] },
  { className: "p3", slotKey: "3", src: IMAGES.inside[2] },
  { className: "p4", slotKey: "4", src: IMAGES.inside[3] },
] as const;
