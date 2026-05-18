export interface Destination {
  slug: string;
  name: string;
  country: string;
  region: string;
  dailyBudget: number;
  currency: string;
  tagline: string;
  description: string;
  heroGradient: string;
  emoji: string;
  coverImage: string;
  tags: string[];
  highlights: string[];
  iataCode: string;       // for flight price API
  hotelLocation: string;  // city name for hotel search API
  budgetBreakdown: {
    accommodation: number;
    food: number;
    transport: number;
    activities: number;
  };
  bestMonths: string;
  itinerary: { day: number; title: string; description: string }[];
  affiliateUrl: string;
}

export const destinations: Destination[] = [
  {
    slug: "tbilisi-georgia",
    name: "Tbilisi",
    country: "Georgia",
    region: "Caucasus",
    dailyBudget: 30,
    currency: "GEL",
    coverImage: "https://images.unsplash.com/photo-1603698873304-b052340d9719?w=1200&auto=format&fit=crop&q=80",
    tagline: "Ancient city, modern soul — one of the cheapest gems in Europe",
    description:
      "Tbilisi blends ancient Silk Road history with a thriving arts scene, incredible wine culture, and jaw-dropping architecture — all at prices that make Western Europe look absurd.",
    heroGradient: "from-amber-900/60 via-orange-800/40 to-transparent",
    emoji: "🍷",
    iataCode: "TBS",
    hotelLocation: "Tbilisi",
    tags: ["wine", "history", "Caucasus", "backpacker-friendly"],
    highlights: [
      "Free walking around the Old Town (Kala)",
      "Narikala Fortress with panoramic city views",
      "Natural sulphur baths from $5",
      "Wine tasting in Kakheti wine region",
      "Georgian food — khinkali & khachapuri under $3",
    ],
    budgetBreakdown: { accommodation: 10, food: 8, transport: 4, activities: 8 },
    bestMonths: "Apr–Jun, Sep–Oct",
    itinerary: [
      { day: 1, title: "Old Town & Sulphur Baths", description: "Explore Kala district on foot, cross the Peace Bridge, then soak in the famous sulphur baths in Abanotubani for around $5–10." },
      { day: 2, title: "Narikala & Wine Tasting", description: "Hike up to Narikala fortress for panoramic views, visit Kartlis Deda statue, then hit a local wine bar in the evening — Georgia has 500+ indigenous grape varieties." },
      { day: 3, title: "Day Trip to Mtskheta", description: "Take a marshrutka (shared minibus, ~$1) to Mtskheta, Georgia's ancient capital and UNESCO site. Two stunning cathedrals, stunning gorge views, done by afternoon." },
    ],
    affiliateUrl: "https://travelpayouts.com/",
  },
  {
    slug: "istanbul-turkey",
    name: "Istanbul",
    country: "Turkey",
    region: "Middle East / Europe",
    dailyBudget: 35,
    currency: "TRY",
    coverImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&auto=format&fit=crop&q=80",
    tagline: "Two continents, one city — and it's astonishingly affordable",
    description:
      "Istanbul sits at the crossroads of Europe and Asia with 3,000 years of history, world-class food, and a street food scene that can fill you up for under $2. The lira makes it a bargain for travellers.",
    heroGradient: "from-red-900/60 via-rose-800/40 to-transparent",
    emoji: "🕌",
    iataCode: "IST",
    hotelLocation: "Istanbul",
    tags: ["history", "food", "culture", "two continents"],
    highlights: [
      "Hagia Sophia & Blue Mosque — free entry",
      "Grand Bazaar & Spice Market",
      "Bosphorus ferry cruise for $1",
      "Simit & kebab street food from $0.50",
      "Kadikoy street food market on the Asian side",
    ],
    budgetBreakdown: { accommodation: 12, food: 10, transport: 5, activities: 8 },
    bestMonths: "Mar–May, Sep–Nov",
    itinerary: [
      { day: 1, title: "Historic Peninsula", description: "Sultanahmet is walkable — Hagia Sophia, Blue Mosque, Topkapi Palace, and the Grand Bazaar all within 1km. Budget $10 for palace entry, rest is free." },
      { day: 2, title: "Bosphorus & Kadikoy", description: "Take the $1 ferry across to the Asian side. Explore Kadikoy's street food market — try kokoreç, fresh fish sandwiches, and midye dolma (stuffed mussels, 5 for $1)." },
      { day: 3, title: "Beyoglu & Istiklal", description: "Walk across Galata Bridge, climb Galata Tower ($3), stroll down Istiklal Avenue. Evening tea in a traditional çay bahçesi (tea garden)." },
    ],
    affiliateUrl: "https://travelpayouts.com/",
  },
  {
    slug: "sarajevo-bosnia",
    name: "Sarajevo",
    country: "Bosnia & Herzegovina",
    region: "Balkans",
    dailyBudget: 28,
    currency: "BAM",
    coverImage: "https://images.unsplash.com/photo-1709636713996-8fdd5884b8b9?w=1200&auto=format&fit=crop&q=80",
    tagline: "The most underrated city in the Balkans, bar none",
    description:
      "Sarajevo is where East meets West — Ottoman bazaars blend into Austro-Hungarian boulevards, and the most moving history sits beside the best ćevapi you'll ever eat. It's dirt cheap and deeply authentic.",
    heroGradient: "from-blue-900/60 via-indigo-800/40 to-transparent",
    emoji: "🏔️",
    iataCode: "SJJ",
    hotelLocation: "Sarajevo",
    tags: ["Balkans", "history", "food", "hidden gem"],
    highlights: [
      "Baščaršija Ottoman bazaar — free to explore",
      "Best ćevapi in the Balkans under $4",
      "War Tunnel Museum ($5)",
      "Old Town coffee culture",
      "Free Yellow Bastion views",
    ],
    budgetBreakdown: { accommodation: 10, food: 8, transport: 3, activities: 7 },
    bestMonths: "May–Sep",
    itinerary: [
      { day: 1, title: "Baščaršija & Old Town", description: "Spend the day in the Ottoman quarter — Gazi Husrev-beg Mosque, the Sebilj fountain, copper workshops, and finish with ćevapi at Ćevabdžinica Zeljo." },
      { day: 2, title: "War History & Tunnel", description: "Visit the Sarajevo War Tunnel Museum and the Srebrenica Gallery for a sobering but essential history lesson. Both under $10 combined." },
      { day: 3, title: "Cable Car & Nature", description: "Take the cable car up Trebević mountain ($8 return), hike the trails, spot the 1984 Olympics bobsled track, and return for sunset over the city." },
    ],
    affiliateUrl: "https://travelpayouts.com/",
  },
  {
    slug: "sofia-bulgaria",
    name: "Sofia",
    country: "Bulgaria",
    region: "Balkans",
    dailyBudget: 25,
    currency: "BGN",
    coverImage: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1200&auto=format&fit=crop&q=80",
    tagline: "EU capital with Eastern European prices",
    description:
      "Sofia is Europe's best-kept secret — a compact, walkable capital with Roman ruins, Ottoman mosques, Soviet-era architecture, and a buzzing craft beer scene, all for under €25/day.",
    heroGradient: "from-emerald-900/60 via-green-800/40 to-transparent",
    emoji: "🏛️",
    iataCode: "SOF",
    hotelLocation: "Sofia",
    tags: ["EU", "Balkans", "cheap", "walkable"],
    highlights: [
      "Alexander Nevsky Cathedral — free",
      "Vitosha Mountain day hike ($0 transport with Sofia card)",
      "Free Sofia Tour (tip-based)",
      "Central Market Hall lunch under $3",
      "National History Museum",
    ],
    budgetBreakdown: { accommodation: 9, food: 7, transport: 3, activities: 6 },
    bestMonths: "May–Jun, Sep–Oct",
    itinerary: [
      { day: 1, title: "City Center Walk", description: "Walk the 'triangle of religious tolerance' — Saint Nedelya Church, Banya Bashi Mosque, and the Synagogue, all within 200m of each other. Free walking tour at 11am daily." },
      { day: 2, title: "Vitosha Mountain", description: "Hop on tram 5 to the foot of Vitosha Mountain and hike up — it's literally inside the city limits. Views of the whole city and Balkans on a clear day." },
      { day: 3, title: "Day Trip to Plovdiv", description: "Train to Plovdiv ($4, 2hrs) — one of Europe's oldest cities with a stunning Ottoman old town, Roman amphitheatre, and a walkable art district." },
    ],
    affiliateUrl: "https://travelpayouts.com/",
  },
  {
    slug: "yerevan-armenia",
    name: "Yerevan",
    country: "Armenia",
    region: "Caucasus",
    dailyBudget: 28,
    currency: "AMD",
    coverImage: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1200&auto=format&fit=crop&q=80",
    tagline: "The pink city of the Caucasus — welcoming, warm, and incredibly cheap",
    description:
      "Built from pink volcanic tuff stone, Yerevan is one of the world's oldest continuously inhabited cities. Its cascade stairs, Ararat views, and obsession with coffee make it instantly lovable.",
    heroGradient: "from-pink-900/60 via-rose-800/40 to-transparent",
    emoji: "🏔️",
    iataCode: "EVN",
    hotelLocation: "Yerevan",
    tags: ["Caucasus", "history", "culture", "off-the-beaten-path"],
    highlights: [
      "Cascade complex with free outdoor art",
      "View of Mount Ararat from the city",
      "Republic Square light shows (free)",
      "Vernissage weekend market",
      "Armenian brandy tasting from $5",
    ],
    budgetBreakdown: { accommodation: 10, food: 8, transport: 3, activities: 7 },
    bestMonths: "Apr–Jun, Sep–Oct",
    itinerary: [
      { day: 1, title: "Cascade & Republic Square", description: "Climb the Cascade (free outdoor sculpture garden), browse the Cafesjian Museum, then head to Republic Square for the musical fountain show at night." },
      { day: 2, title: "Garni & Geghard", description: "Day trip to the Pagan Temple of Garni and the UNESCO-listed Geghard Monastery carved into the cliff. Shared taxi $10–15 for both." },
      { day: 3, title: "Vernissage & Brandy", description: "Browse the Vernissage open-air market for handicrafts and Soviet memorabilia, then do a tasting at the Ararat Brandy Factory ($5 for a 3-brandy flight)." },
    ],
    affiliateUrl: "https://travelpayouts.com/",
  },
  {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    region: "Southeast Asia",
    dailyBudget: 25,
    currency: "THB",
    coverImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&auto=format&fit=crop&q=80",
    tagline: "Temples, beaches, and street food so good it'll ruin you for home cooking",
    description:
      "Thailand is Southeast Asia's ultimate budget destination — a country where $25/day gets you a private guesthouse room, three meals of exceptional food, and entry to ancient temples. From the frenetic streets of Bangkok to the island-hopping south, Thailand rewards the budget traveler at every turn.",
    heroGradient: "from-yellow-900/60 via-amber-800/40 to-transparent",
    emoji: "🇹🇭",
    iataCode: "BKK",
    hotelLocation: "Bangkok",
    tags: ["beaches", "temples", "street food", "islands"],
    highlights: [
      "Pad Thai from a street cart — $1.50",
      "Wat Pho & Wat Arun temples in Bangkok",
      "Chiang Mai night bazaar",
      "Island hopping: Koh Tao, Koh Phangan",
      "Elephant sanctuaries in Chiang Rai",
    ],
    budgetBreakdown: { accommodation: 10, food: 8, transport: 5, activities: 5 },
    bestMonths: "Nov–Feb",
    itinerary: [
      { day: 1, title: "Bangkok: Temples & Street Food", description: "Start at Wat Pho (entry $4) to see the giant reclining Buddha, then walk to Wat Arun across the river ($1 ferry). Evening on Khao San Road or the Chatuchak weekend market." },
      { day: 2, title: "Floating Markets & Canal Boats", description: "Take a long-tail boat through Bangkok's canals to Amphawa Floating Market. Back in the city, eat your way through Or Tor Kor Market — the best fresh food market in Thailand." },
      { day: 3, title: "Fly North to Chiang Mai", description: "Budget flights BKK→CNX from $20. Explore the 300+ temples in Chiang Mai's old city, then hit the Sunday Walking Street for street food at its finest — $5 will fill you twice over." },
    ],
    affiliateUrl: "https://travelpayouts.com/",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    region: "Southeast Asia",
    dailyBudget: 22,
    currency: "VND",
    coverImage: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&auto=format&fit=crop&q=80",
    tagline: "Ha Long Bay to Hoi An — a $20/day country that punches far above its weight",
    description:
      "Vietnam is one of the world's great travel experiences — a narrow country with stunning geographic diversity, 4,000 years of history, and food so good it has a global cult following. Best of all, it remains one of Southeast Asia's cheapest destinations.",
    heroGradient: "from-red-900/60 via-green-800/40 to-transparent",
    emoji: "🇻🇳",
    iataCode: "HAN",
    hotelLocation: "Hanoi",
    tags: ["history", "food", "scenery", "culture"],
    highlights: [
      "Ha Long Bay overnight cruise from $40",
      "Hoi An lantern-lit old town (UNESCO)",
      "Pho bo for $1.50 in Hanoi's Old Quarter",
      "Motorbike the Hai Van Pass",
      "Cu Chi Tunnels outside Ho Chi Minh City",
    ],
    budgetBreakdown: { accommodation: 8, food: 6, transport: 4, activities: 4 },
    bestMonths: "Feb–Apr",
    itinerary: [
      { day: 1, title: "Hanoi Old Quarter", description: "Get lost in the 36 guild streets of the Old Quarter. Eat bún chả (grilled pork vermicelli) for $2, visit Hoan Kiem Lake at dusk, and join the Friday night walking street." },
      { day: 2, title: "Ha Long Bay", description: "Join a 2-day/1-night cruise (from $40 all-in) to Ha Long Bay. Kayak through limestone karsts, swim in emerald water, and eat fresh seafood on the boat deck." },
      { day: 3, title: "Hoi An by Bicycle", description: "Fly south to Da Nang ($20–30), then take a taxi to Hoi An. Rent a bicycle ($2/day) and explore the UNESCO old town, tailors making custom clothes overnight, and My Son Sanctuary ruins." },
    ],
    affiliateUrl: "https://travelpayouts.com/",
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "Southeast Asia",
    dailyBudget: 32,
    currency: "IDR",
    coverImage: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&auto=format&fit=crop&q=80",
    tagline: "Temples, rice terraces, and surf — Bali rewards those who explore beyond the tourist trail",
    description:
      "Bali is Indonesia's jewel — a tiny island with a unique Hindu culture, volcanic landscapes, world-class surf, and a remarkably intact spiritual tradition. Stay in Canggu or Ubud instead of Seminyak and your dollar goes twice as far.",
    heroGradient: "from-green-900/60 via-emerald-800/40 to-transparent",
    emoji: "🇮🇩",
    iataCode: "DPS",
    hotelLocation: "Bali",
    tags: ["temples", "beaches", "surf", "wellness"],
    highlights: [
      "Tegalalang Rice Terraces, Ubud (free to walk)",
      "Tanah Lot temple at sunset",
      "Scooter rental $5/day — best way to explore",
      "Warung nasi campur (rice plate) $2",
      "Canggu surf lessons from $15",
    ],
    budgetBreakdown: { accommodation: 12, food: 7, transport: 5, activities: 8 },
    bestMonths: "May–Sep",
    itinerary: [
      { day: 1, title: "Ubud: Culture & Rice Terraces", description: "Rent a scooter ($5) and ride to Tegalalang Rice Terraces at sunrise before the crowds. Visit the Sacred Monkey Forest, Ubud Palace, and eat at a local warung for $2 a meal." },
      { day: 2, title: "Temple Circuit", description: "Scooter west to Tanah Lot for sunset (entry $3), stopping at Pura Taman Ayun en route. Evening in Seminyak for beach clubs — pre-buy a food package for happy hour." },
      { day: 3, title: "Canggu & Surf", description: "Head to Canggu, Bali's digital nomad hub. Take a surf lesson at Echo Beach ($15 for 2 hours with board), eat at one of the dozens of excellent warungs, and stay for the sunset drum circle." },
    ],
    affiliateUrl: "https://travelpayouts.com/",
  },
  {
    slug: "budget-balkans-route",
    name: "Balkans Route",
    country: "Multi-country",
    region: "Balkans",
    dailyBudget: 32,
    currency: "Mixed",
    coverImage: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=1200&auto=format&fit=crop&q=80",
    tagline: "The ultimate backpacker route through Europe's wildest corner",
    description:
      "Chain together Slovenia, Croatia, Bosnia, Montenegro, Albania, and North Macedonia for an epic loop of mountains, coastlines, ancient cities, and some of the cheapest food on the continent.",
    heroGradient: "from-cyan-900/60 via-teal-800/40 to-transparent",
    emoji: "🗺️",
    iataCode: "LJU",
    hotelLocation: "Ljubljana",
    tags: ["route", "multi-country", "backpacking", "Balkans"],
    highlights: [
      "Lake Bled, Slovenia ($0 entry)",
      "Kotor Bay, Montenegro",
      "Mostar Bridge, Bosnia",
      "Albanian Riviera beaches",
      "Ohrid, North Macedonia",
    ],
    budgetBreakdown: { accommodation: 12, food: 9, transport: 7, activities: 4 },
    bestMonths: "May–Sep",
    itinerary: [
      { day: 1, title: "Ljubljana & Lake Bled", description: "Start in Slovenia's charming capital, then bus to Lake Bled. The lake is free — hire a rowboat ($15/hr) to reach the island church." },
      { day: 2, title: "Kotor, Montenegro", description: "Cross into Montenegro and reach the medieval walled city of Kotor. Climb the fortress walls ($8) for staggering bay views." },
      { day: 3, title: "Mostar, Bosnia", description: "Bus to Mostar and walk across the iconic Stari Most bridge. The city is tiny, walkable, and full of Ottoman charm. Best ćevapi outside Sarajevo here." },
    ],
    affiliateUrl: "https://travelpayouts.com/",
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export const budgetTips = [
  {
    slug: "how-to-fly-cheap",
    title: "How to Find Cheap Flights Every Time",
    category: "Flights",
    emoji: "✈️",
    readTime: 6,
    excerpt:
      "The exact search strategy I use to find sub-$200 round trips — timing, tools, and the alert setup that does the work for you.",
    tips: [
      "Use Google Flights Explore to find the cheapest destinations from your airport",
      "Search Tuesdays and Wednesdays — statistically cheapest booking days",
      "Set price alerts 6–8 weeks before you want to fly",
      "Consider nearby airports — often 30–40% cheaper",
      "Budget airlines: Wizz Air, Ryanair, Pegasus for Europe; flydubai for MENA",
    ],
  },
  {
    slug: "cheap-accommodation-guide",
    title: "Sleep Well for Under $15/Night — The Full Guide",
    category: "Accommodation",
    emoji: "🛏️",
    readTime: 7,
    excerpt:
      "Hostels, guesthouses, couchsurfing, and the booking platforms that actually get you the best prices.",
    tips: [
      "Book directly with hostels after finding them on Hostelworld — they charge less commission",
      "Couchsurfing is still alive and the community is incredible",
      "Airbnb private rooms in Eastern Europe often beat hostel prices",
      "Female-only dorms are often cheaper AND safer",
      "Book late in summer for last-minute hostel deals",
    ],
  },
  {
    slug: "eat-like-a-local",
    title: "Eat Like a Local: Never Overpay for Food Again",
    category: "Food",
    emoji: "🍜",
    readTime: 5,
    excerpt:
      "The markets, street stalls, and local canteens that locals use — and how to find them in any city.",
    tips: [
      "Eat where taxi drivers eat — seriously, ask them",
      "Central markets always have the cheapest fresh food",
      "Lunch sets (set menus) are often 30–50% cheaper than à la carte",
      "Supermarkets for breakfast — save eating out for dinner",
      "Avoid anything on the main tourist square",
    ],
  },
  {
    slug: "budget-transport-guide",
    title: "Get Around for Almost Nothing: Budget Transport Guide",
    category: "Transport",
    emoji: "🚌",
    readTime: 6,
    excerpt:
      "Buses, marshrutkas, trains, and the apps that unlock local transport prices in Eastern Europe and MENA.",
    tips: [
      "Marshrutkas (shared minibuses) are the cheapest way to move in the Caucasus",
      "Night buses save a night's accommodation AND transport",
      "Rome2Rio shows every route option with prices",
      "Bolt and InDriver are cheaper than Uber in most Eastern European cities",
      "Train passes are rarely worth it — buy point-to-point",
    ],
  },
];
