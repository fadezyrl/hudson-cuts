export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    hudson: string;
    services: string;
    inside: string;
    book: string;
    brandAria: string;
  };
  hero: {
    titleLine1: string;
    titleEm: string;
    body: string;
    cta: string;
    bgLabel: string;
  };
  work: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleEm: string;
    caption: string;
    slots: {
      "1": string;
      "2": string;
      "3": string;
      "4": string;
      "5": string;
    };
  };
  barber: {
    eyebrow: string;
    title: string;
    body: string;
    signature: string;
    portraitSlot: string;
  };
  services: {
    eyebrow: string;
    titleBefore: string;
    titleEm: string;
    intro: string;
    note: string;
    items: {
      "01": { name: string; price: string; duration: string };
      "02": { name: string; price: string; duration: string };
      "03": { name: string; price: string; duration: string };
    };
  };
  inside: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleEm: string;
    slots: {
      "1": string;
      "2": string;
      "3": string;
      "4": string;
    };
  };
  testimonials: {
    eyebrow: string;
    titleLine1: string;
    titleEm: string;
    fromGoogle: string;
    prevAria: string;
    nextAria: string;
    dotsAria: string;
    goToAria: string;
    items: {
      fynn: {
        name: string;
        when: string;
        quote: string;
        source: "google" | "direct";
      };
      levi: {
        name: string;
        when: string;
        quote: string;
        source: "google" | "direct";
      };
      campbell: {
        name: string;
        when: string;
        quote: string;
        source: "google" | "direct";
      };
    };
  };
  location: {
    eyebrow: string;
    titleLine1: string;
    titleEm: string;
    body: string;
    directions: string;
    mapAria: string;
    markerAria: string;
  };
  booking: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleEm: string;
    body: string;
    cta: string;
  };
  footer: {
    follow: string;
    contact: string;
    explore: string;
    instagram: string;
    work: string;
    services: string;
    book: string;
    copyright: string;
  };
  locale: {
    en: string;
    ur: string;
    switchAria: string;
  };
};

export const en: Dictionary = {
  meta: {
    title: "Hudson Cuts — Barber, Christchurch",
    description:
      "Precision fades, textured mullets and considered finishes from one chair in Christchurch.",
  },
  nav: {
    work: "Work",
    hudson: "Hudson",
    services: "Services",
    inside: "Inside",
    book: "Book",
    brandAria: "Hudson Cuts home",
  },
  hero: {
    titleLine1: "Cut with",
    titleEm: "intent.",
    body: "Precision fades, textured mullets and considered finishes, from one chair in Christchurch.",
    cta: "Book Appointment",
    bgLabel: "HERO PHOTO / VIDEO — @hudson.cuts",
  },
  work: {
    eyebrow: "01 — The Work",
    titleLine1: "Fades.",
    titleLine2: "Mullets.",
    titleEm: "Finish.",
    caption: "Every head is a different brief.",
    slots: {
      "1": "Transformation",
      "2": "Fade detail",
      "3": "Textured mullet",
      "4": "Back profile",
      "5": "Finish",
    },
  },
  barber: {
    eyebrow: "02 — The Barber",
    title: "Hudson.",
    body: "[Short personal introduction from Hudson: how he started, years behind the chair, competition moments, what he loves about the craft. Keep it to three or four sentences.]",
    signature: "— Hudson",
    portraitSlot: "Portrait of Hudson",
  },
  services: {
    eyebrow: "03 — Services & Pricing",
    titleBefore: "The",
    titleEm: "menu.",
    intro: "One chair, one barber. Prices in NZD.",
    note: "All cuts include a consultation and finish.",
    items: {
      "01": { name: "Standard Haircut", price: "$40", duration: "45 mins" },
      "02": { name: "High schoolers cut", price: "$35", duration: "45 mins" },
      "03": { name: "Short back and sides", price: "$30", duration: "45 mins" },
    },
  },
  inside: {
    eyebrow: "04 — Inside Hudson Cuts",
    titleLine1: "The room.",
    titleLine2: "The",
    titleEm: "ritual.",
    slots: {
      "1": "Interior wide",
      "2": "Tools",
      "3": "Mid-cut moment",
      "4": "Detail",
    },
  },
  testimonials: {
    eyebrow: "05 — Reviews",
    titleLine1: "Client",
    titleEm: "words.",
    fromGoogle: "from Google",
    prevAria: "Previous review",
    nextAria: "Next review",
    dotsAria: "Review slides",
    goToAria: "Go to review",
    items: {
      fynn: {
        name: "Fynn Clarke",
        when: "2 weeks ago",
        quote: "Fantastic men to get a trim from very respectful",
        source: "google",
      },
      levi: {
        name: "levi w",
        when: "3 weeks ago",
        quote:
          "good vibes and always comes through with a fresh fade. Definitely recommend giving him a go",
        source: "direct",
      },
      campbell: {
        name: "Campbell Stewart",
        when: "3 weeks ago",
        quote:
          "Greatest Haircut I’ve ever had, exceptional customer service. If you want a good haircut. Come here",
        source: "google",
      },
    },
  },
  location: {
    eyebrow: "06 — Find us",
    titleLine1: "The",
    titleEm: "chair.",
    body: "One chair in Spreydon. Come through when you’re ready.",
    directions: "Get directions",
    mapAria: "Map showing Hudson Cuts location",
    markerAria: "Hudson Cuts at 10 Domain Terrace",
  },
  booking: {
    eyebrow: "07 — Booking",
    titleLine1: "Your chair",
    titleLine2: "is",
    titleEm: "waiting.",
    body: "Pick a time that suits you. Booking takes under a minute.",
    cta: "Book Appointment",
  },
  footer: {
    follow: "Follow",
    contact: "Contact",
    explore: "Explore",
    instagram: "Instagram",
    work: "Work",
    services: "Services",
    book: "Book",
    copyright: "© 2026 Hudson Cuts",
  },
  locale: {
    en: "EN",
    ur: "UR",
    switchAria: "Switch language",
  },
};
