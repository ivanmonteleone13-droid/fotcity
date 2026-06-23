export const business = {
  name: "Fotcity",
  tagline: "Diplomerad medicinsk fotvård på Geijersgatan",
  description:
    "Välkommen till Fotcity! Jag är diplomerad medicinsk fotvårdare från Axelsons. Hos mig får du en stunds avkoppling och vård av fötterna efter dina behov. Ansluten till Epassi — Geijersgatan 15, Uppsala.",
  category: "Medicinsk fotvård",
  address: {
    street: "Geijersgatan 15",
    postalCode: "752 26",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-13 39 11",
  phoneLink: "tel:+4618133911",
  email: "info@fotcity.se" as string | null,
  emailLink: "mailto:info@fotcity.se" as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/fotcity-49551",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: "https://www.fotcity.se" as string | null,
  logoImage: null as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-2.jpg",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Fotcity",
  rating: 4.9,
  reviewCount: 677,
  foundedYear: 2010,
  coordinates: { lat: 59.8632, lng: 17.625 },
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
  trustBadges: [
    { label: "4,9 på Bokadirekt", icon: "star" },
    { label: "677+ verifierade omdömen", icon: "reviews" },
    { label: "Diplomerad fotvård", icon: "location" },
    { label: "Epassi accepteras", icon: "student" },
  ],
  usps: [
    {
      title: "Diplomerade fotterapeuter",
      description: "Medicinsk fotvård utförd av certifierad personal med lång erfarenhet.",
    },
    {
      title: "677+ nöjda kunder",
      description: "Ett av Uppsalas högst rankade fotvårdsställen på Bokadirekt.",
    },
    {
      title: "Epassi-friskvård",
      description: "Använd ditt friskvårdsbidrag — vi accepterar Epassi.",
    },
    {
      title: "Komplett fotvård",
      description: "Från fotvårtor och nagelsvamp till pedikyr och fotmassage.",
    },
    {
      title: "Centralt på Geijersgatan",
      description: "Lätt att nå från hela Uppsala med kollektivtrafik eller bil.",
    },
    {
      title: "Snabb tidsbokning",
      description: "Boka online, ring eller maila info@fotcity.se.",
    },
  ],
  services: [
    {
      id: "medicinsk-fotv-rd",
      name: "Medicinsk fotvård",
      icon: "🦶",
      description: "Medicinsk fotvård hos Fotcity — noggrant utfört med premiumprodukter och personlig service.",
      duration: "30–90 min",
      priceFrom: 750,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "fotv-rtbehandling",
      name: "Fotvårtbehandling",
      icon: "🔬",
      description: "Fotvårtbehandling hos Fotcity — noggrant utfört med premiumprodukter och personlig service.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "nagelsvamptest",
      name: "Nagelsvamptest",
      icon: "💆",
      description: "Nagelsvamptest hos Fotcity — noggrant utfört med premiumprodukter och personlig service.",
      duration: "30–90 min",
      priceFrom: 500,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "fotmassage",
      name: "Fotmassage",
      icon: "💅",
      description: "Fotmassage hos Fotcity — noggrant utfört med premiumprodukter och personlig service.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "pedikyr-med-gellack",
      name: "Pedikyr med gellack",
      icon: "✨",
      description: "Pedikyr med gellack hos Fotcity — noggrant utfört med premiumprodukter och personlig service.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Fotrummet", image: "/images/gallery-1.jpg" },
    { id: 2, label: "Medicinsk fotvård", image: "/images/gallery-2.jpg" },
    { id: 3, label: "Behandling", image: "/images/gallery-3.jpg" },
  ],
  testimonials: [
    {
      text: "Hon är jätteduktig 👍",
      author: "kent J.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/fotcity-49551",
      rating: 5,
      date: "2026-06-05",
    },
    {
      text: "Positivt och proffesionelt bemötande i en vacker lokal",
      author: "Ingrid F.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/fotcity-49551",
      rating: 5,
      date: "2026-06-02",
    },
    {
      text: "Oerhört behaglig erfarenhet. \nProfessionell hjälp, Lee är förtrollande med sina mjuka händer och sitt behagliga sätt.",
      author: "Margareta W.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/fotcity-49551",
      rating: 4,
      date: "2026-05-25",
    },
    {
      text: "Ser kunden och är kompetent inom sitt område! Kan varmt rekommendera...",
      author: "Håkan W.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/fotcity-49551",
      rating: 5,
      date: "2026-05-22",
    },
  ],
  about: {
    headline: "Diplomerad medicinsk fotvård i Fotrummet",
    paragraphs: [
      "Välkommen till Fotcity! Jag är diplomerad medicinsk fotvårdare från Axelsons. Hos mig får du en stunds avkoppling och vård av fötterna efter dina behov.",
      "På Geijersgatan 15 i Uppsala erbjuder vi medicinsk fotvård, fotvårtbehandling, nagelsvamptest, fotmassage och pedikyr. Ansluten till Epassi — med 677 recensioner och 4,9 i snittbetyg på Bokadirekt.",
      "Boka via Bokadirekt, ring 018-13 39 11 eller maila info@fotcity.se.",
    ],
  },
  faq: [
    {
      question: "Var ligger Fotcity?",
      answer: "Vi finns på Geijersgatan 15, 752 26 Uppsala. Enkelt att hitta — se karta på vår kontaktsida.",
    },
    {
      question: "Hur bokar jag tid hos Fotcity?",
      answer: "Enklast bokar du via Bokadirekt på vår profilsida. Du kan också ringa 018-13 39 11 för personlig hjälp.",
    },
    {
      question: "Vad säger andra kunder om Fotcity?",
      answer: "Vi har 4.9 i snittbetyg baserat på 677+ recensioner på Bokadirekt — ett förtroende vi värnar om.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Se aktuella öppettider på Bokadirekt eller kontaktsidan. Vi rekommenderar att boka tid i förväg.",
    },
    {
      question: "Kan jag avboka eller omboka min tid?",
      answer: "Ja, via Bokadirekt kan du hantera din bokning. Kontakta oss vid frågor så hjälper vi dig.",
    },
    {
      question: "Vad är medicinsk fotvård?",
      answer: "Medicinsk fotvård utförs av diplomerade fotterapeuter och omfattar behandling av förhårdnader, nagelproblem och fotvårtor.",
    },
    {
      question: "Accepterar ni Epassi/friskvårdsbidrag?",
      answer: "Ja, vi accepterar Epassi. Ange ditt friskvårdsbidrag vid bokning eller i kassan.",
    },
    {
      question: "Hur behandlas fotvårtor?",
      answer: "Fotvårtor behandlas med professionella metoder av våra diplomerade fotterapeuter. Antal behandlingar varierar.",
    },
    {
      question: "Behöver jag remiss för medicinsk fotvård?",
      answer: "Nej, du behöver ingen remiss. Boka direkt via Bokadirekt eller ring oss.",
    },
  ],
  seoKeywords: [
    "medicinsk fotvård Uppsala",
    "fotvård Geijersgatan",
    "fotvårtor Uppsala",
    "pedikyr Uppsala",
    "Fotcity Geijersgatan",
    "Epassi fotvård",
  ],
  brandColors: {
    primary: "#2D6A4F",
    secondary: "#95D5B2",
    accent: "#F0FFF4",
    dark: "#1B4332",
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

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
