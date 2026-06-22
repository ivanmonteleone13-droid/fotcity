export const business = {
  name: "Fotcity",
  tagline: "Medical foot care in Uppsala",
  description: "Diploma-certified medical foot care clinic accepting Epassi wellness benefits.",
  category: "Beauty",
  address: {
    street: "Geijersgatan 15",
    postalCode: "752 26",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-13 39 00",
  phoneLink: "tel:+4618133900",
  email: "info@fotcity.se",
  emailLink: "mailto:info@fotcity.se",
  bookingUrl: "https://www.bokadirekt.se/places/fotcity-49551",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Fotcity",
  rating: 4.9,
  reviewCount: 677,
  foundedYear: null as number | null,
  coordinates: { lat: 59.862, lng: 17.625 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  usps: [
    {
      title: "Certifierad behandling",
      description: "Skönhetsbehandlingar med omsorg hos Fotcity.",
    },
    {
      title: "Personlig service",
      description: "Varje besök anpassas efter dina önskemål.",
    },
    {
      title: "Populärt val",
      description: "Starkt betyg med 677 recensioner.",
    },
    {
      title: "Bekvämt läge",
      description: "Finns på Geijersgatan 15 i Uppsala.",
    },
  ],
  services: [
    {
      id: "medicinsk-fotv-rd",
      name: "Medicinsk fotvård",
      description: "Professionell medicinsk fotvård med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "fotv-rtbehandling",
      name: "Fotvårtbehandling",
      description: "Professionell fotvårtbehandling med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "nagelsvamptest",
      name: "Nagelsvamptest",
      description: "Professionell nagelsvamptest med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "fotmassage",
      name: "Fotmassage",
      description: "Professionell fotmassage med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "pedikyr-med-gellack",
      name: "Pedikyr med gellack",
      description: "Professionell pedikyr med gellack med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Fotcity. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Fotcity varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "medicinsk fotvård Uppsala",
    "fotvård Geijersgatan",
    "fotvårtor Uppsala",
    "pedikyr Uppsala",
  ],
  brandColors: {
    primary: "#8b4a6b",
    secondary: "#e8b4bc",
    accent: "#fdf6f8",
    dark: "#5c2d42",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
