// ─────────────────────────────────────────────────────────────────────────────
// BUSINESS CONFIG — edit this one file to white-label for any local trade client
// ─────────────────────────────────────────────────────────────────────────────

export const business = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: "Crader Plumbing & Drain",
  shortName: "Crader Plumbing",
  tagline: "Family-owned since 2008",
  description:
    "San Diego County's most trusted family-owned plumbing company. Licensed, bonded, and insured. We answer when you call.",

  // ── Contact ───────────────────────────────────────────────────────────────
  phone: "(619) 555-0182",
  phoneHref: "tel:+16195550182",
  email: "service@craderplumbing.com",
  emailHref: "mailto:service@craderplumbing.com",
  address: "Serving All of San Diego County, CA",
  license: "C-36 #987654",
  founded: 2008,
  yearsInBusiness: 17,

  // ── Hours ─────────────────────────────────────────────────────────────────
  hours: [
    { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
    { day: "Sunday", hours: "Emergency Service Only" },
    { day: "Holidays", hours: "Emergency Service Only" },
  ],
  emergencyNote: "24/7 Emergency Response — We Answer Every Call",

  // ── Social ────────────────────────────────────────────────────────────────
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    yelp: "https://www.yelp.com/",
    google: "https://www.google.com/maps/",
  },

  // ── Hero section ──────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Available 24/7 · Including Weekends",
    headlineLine1: "24/7 Emergency",
    headlineLine2: "Plumbing",
    subheadline: "Fixed Right the First Time",
    description:
      "San Diego County's most trusted family plumbers since 2008. We answer when you call — day or night.",
    cta: "Request Service Now",
    ctaSecondary: "See Our Services",
  },

  // ── Trust badges (hero) ───────────────────────────────────────────────────
  badges: [
    { label: "Licensed & Bonded", sublabel: "C-36 Certified" },
    { label: "17+ Years", sublabel: "Family Owned" },
    { label: "BBB Accredited", sublabel: "A+ Rating" },
    { label: "Fully Insured", sublabel: "All Work Guaranteed" },
  ],

  // ── Services grid ─────────────────────────────────────────────────────────
  services: [
    {
      slug: "drain-cleaning",
      title: "Drain Cleaning",
      description: "Clogged drains cleared fast — hydro-jetting available",
    },
    {
      slug: "water-heater",
      title: "Water Heater Installation",
      description: "Tank & tankless installs, same-day service",
    },
    {
      slug: "pipe-repair",
      title: "Pipe Leak Repair",
      description: "Pinpoint leaks fast with non-invasive detection",
    },
    {
      slug: "sewer-line",
      title: "Sewer Line Service",
      description: "Sewer cleaning, repair, and replacement",
    },
    {
      slug: "toilet-faucet",
      title: "Toilet & Faucet Repair",
      description: "Running toilets, drips, and complete installations",
    },
    {
      slug: "gas-line",
      title: "Gas Line Services",
      description: "Licensed gas line installation, repair, and testing",
    },
    {
      slug: "emergency",
      title: "Emergency Plumbing",
      description: "24/7 rapid response for burst pipes and floods",
    },
    {
      slug: "camera-inspection",
      title: "Camera Inspection",
      description: "Video pipe inspection — see exactly what's wrong",
    },
  ],

  // ── Service area ──────────────────────────────────────────────────────────
  serviceArea: {
    headline: "Serving All of San Diego County",
    subheadline: "We'll be at your door within 60 minutes",
    cities: [
      "San Diego",
      "Chula Vista",
      "El Cajon",
      "Escondido",
      "La Mesa",
      "National City",
      "Santee",
      "Lemon Grove",
      "Spring Valley",
      "Bonita",
      "Lakeside",
      "Alpine",
      "Poway",
      "Ramona",
      "Coronado",
      "Imperial Beach",
      "Encinitas",
      "Oceanside",
      "Carlsbad",
      "San Marcos",
    ],
  },

  // ── Why us pillars ────────────────────────────────────────────────────────
  whyUs: [
    {
      title: "Upfront Pricing",
      subtitle: "No Surprises — Ever",
      description:
        "We give you a firm price before we start. No hidden fees, no surprise charges on the invoice.",
    },
    {
      title: "Licensed Master Plumbers",
      subtitle: "Certified & Background-Checked",
      description:
        "Every technician is a C-36 licensed journeyman or master plumber. No subcontractors.",
    },
    {
      title: "100% Satisfaction Guarantee",
      subtitle: "We Make It Right",
      description:
        "If you're not completely happy, we come back and fix it. No questions asked, no extra charge.",
    },
    {
      title: "Same-Day Service",
      subtitle: "Available 7 Days a Week",
      description:
        "Call before noon and we'll be there today. Emergency slots available around the clock.",
    },
  ],

  // ── Testimonials ──────────────────────────────────────────────────────────
  testimonials: [
    {
      name: "Maria T.",
      neighborhood: "Chula Vista",
      rating: 5,
      text: "Called at 11pm with a burst pipe flooding my kitchen. They were here in 35 minutes and had it fixed before midnight. Absolute lifesavers.",
    },
    {
      name: "James K.",
      neighborhood: "La Mesa",
      rating: 5,
      text: "Got 3 quotes for a water heater replacement. Crader was the only one with a fixed price AND same-day availability. Installed in under 2 hours. Spotless work.",
    },
    {
      name: "Sandra R.",
      neighborhood: "Santee",
      rating: 5,
      text: "The camera inspection found a root intrusion we didn't even know about. They showed me the footage, explained every option, and the repair was done that afternoon.",
    },
    {
      name: "Tom & Beth H.",
      neighborhood: "El Cajon",
      rating: 5,
      text: "Used Crader for our kitchen remodel plumbing. Professional, punctual, and they cleaned up after themselves. Rare to find tradespeople this reliable.",
    },
    {
      name: "Luis M.",
      neighborhood: "Spring Valley",
      rating: 5,
      text: "My garbage disposal and drain were completely seized. They cleared it, replaced the disposal, and installed a new faucet — all in one visit. Super efficient.",
    },
    {
      name: "Diane W.",
      neighborhood: "Bonita",
      rating: 5,
      text: "Fair, honest, and didn't try to upsell me on things I didn't need. That alone makes them my plumber for life. Highly recommend to every homeowner in the county.",
    },
  ],

  // ── Recent projects (before/after) ────────────────────────────────────────
  projects: [
    {
      title: "Water Main Replacement",
      location: "Chula Vista",
      beforeImg: "https://picsum.photos/seed/pipes-worn/800/500",
      afterImg: "https://picsum.photos/seed/pipes-new/800/500",
      description: "Complete water main replacement — restored full pressure in one day.",
    },
    {
      title: "Tankless Water Heater Upgrade",
      location: "La Mesa",
      beforeImg: "https://picsum.photos/seed/heater-old/800/500",
      afterImg: "https://picsum.photos/seed/heater-new/800/500",
      description: "50-gallon tank replaced with tankless system. Immediate hot water, lower bills.",
    },
    {
      title: "Sewer Line Restoration",
      location: "El Cajon",
      beforeImg: "https://picsum.photos/seed/sewer-before/800/500",
      afterImg: "https://picsum.photos/seed/sewer-after/800/500",
      description: "Root intrusion cleared and damaged section relined. No major digging required.",
    },
  ],

  // ── Quote form ────────────────────────────────────────────────────────────
  form: {
    headline: "Get Your Free Estimate",
    subheadline: "We'll call you within 15 minutes",
    note: "No obligation. No sales pressure. Just expert advice and honest pricing.",
    calloutStat: "500+",
    calloutLabel: "San Diego homeowners served this year",
    submitLabel: "We'll Call You in 15 Minutes",
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    description:
      "Family-owned and operated since 2008. Serving San Diego County with honesty, expertise, and pride.",
    copyright: `© ${new Date().getFullYear()} Crader Plumbing & Drain. All rights reserved.`,
    links: [
      { label: "Services", href: "#services" },
      { label: "Service Area", href: "#service-area" },
      { label: "Why Us", href: "#why-us" },
      { label: "Reviews", href: "#reviews" },
      { label: "Get a Quote", href: "#quote" },
    ],
  },
} as const;
