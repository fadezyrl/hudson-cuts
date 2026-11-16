export type ServiceItem = {
  id: string;
};

export const SITE = {
  brand: "Hudson.Cuts",
  brandParts: { name: "Hudson", dot: ".", cuts: "Cuts" } as const,
  location: "Christchurch, New Zealand",
  locationShort: "Christchurch · NZ",
  year: 2026,
  instagramUrl: "https://www.instagram.com/hudson.cuts/",
  bookingUrl: "#book",
  contactPlaceholder: "[email / phone]",
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
  { id: "04" },
];

export const WORK_SLOTS = [
  { className: "a", slotKey: "1" },
  { className: "b", slotKey: "2" },
  { className: "c", slotKey: "3" },
  { className: "d", slotKey: "4" },
  { className: "e", slotKey: "5" },
] as const;

export const INSIDE_SLOTS = [
  { className: "p1", slotKey: "1" },
  { className: "p2", slotKey: "2" },
  { className: "p3", slotKey: "3" },
  { className: "p4", slotKey: "4" },
] as const;
