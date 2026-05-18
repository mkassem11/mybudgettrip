export interface CountryBudgetData {
  name: string;
  currency: string;
  exchangeRate: number; // USD per 1 local unit (or local per 1 USD - defined as USD cost per day)
  accommodation: {
    hostel: number;       // USD/night
    guesthouse: number;
    hotel: number;
    airbnb: number;
  };
  food: {
    streetFood: number;   // USD/day (3 meals)
    localRestaurants: number;
    midRange: number;
    mix: number;
  };
  transport: {
    public: number;       // USD/day
    mixed: number;
    taxis: number;
  };
  activities: {
    free: number;         // USD/day (entrance fees, tips)
    budget: number;
    moderate: number;
  };
  nightlife: {
    none: number;         // USD/day
    occasional: number;  // 1-2 drinks
    frequent: number;    // bars/clubs
  };
  simCard: number;        // USD for whole trip (one-time)
  visaFee: number;        // USD one-time (0 if visa-free for most)
  notes: string;
  iataCode: string;
  affiliateSlug: string;
}

export const COUNTRIES: Record<string, CountryBudgetData> = {
  georgia: {
    name: "Georgia",
    currency: "GEL",
    exchangeRate: 2.68,
    accommodation: { hostel: 12, guesthouse: 25, hotel: 55, airbnb: 35 },
    food: { streetFood: 8, localRestaurants: 14, midRange: 22, mix: 12 },
    transport: { public: 2, mixed: 6, taxis: 12 },
    activities: { free: 3, budget: 8, moderate: 18 },
    nightlife: { none: 0, occasional: 8, frequent: 20 },
    simCard: 5,
    visaFee: 0,
    notes: "Georgia is one of Europe's best value destinations. Wine is often free at guesthouses. Shared taxis (marshrutkas) are extremely cheap.",
    iataCode: "TBS",
    affiliateSlug: "tbilisi-georgia",
  },
  turkey: {
    name: "Turkey",
    currency: "TRY",
    exchangeRate: 32.5,
    accommodation: { hostel: 15, guesthouse: 30, hotel: 65, airbnb: 40 },
    food: { streetFood: 9, localRestaurants: 15, midRange: 25, mix: 13 },
    transport: { public: 3, mixed: 8, taxis: 18 },
    activities: { free: 5, budget: 12, moderate: 25 },
    nightlife: { none: 0, occasional: 10, frequent: 28 },
    simCard: 8,
    visaFee: 0,
    notes: "Turkey offers incredible value especially outside tourist areas. Istanbul has free mosques and a vibrant street food scene. Dolmus minibuses are the cheapest transport.",
    iataCode: "IST",
    affiliateSlug: "istanbul-turkey",
  },
  albania: {
    name: "Albania",
    currency: "ALL",
    exchangeRate: 96,
    accommodation: { hostel: 12, guesthouse: 22, hotel: 50, airbnb: 30 },
    food: { streetFood: 7, localRestaurants: 12, midRange: 20, mix: 10 },
    transport: { public: 3, mixed: 7, taxis: 14 },
    activities: { free: 2, budget: 6, moderate: 15 },
    nightlife: { none: 0, occasional: 7, frequent: 18 },
    simCard: 5,
    visaFee: 0,
    notes: "Albania is Europe's hidden gem and cheapest country on the continent. Stunning beaches, mountains, and ancient ruins. Cash is king — bring euros.",
    iataCode: "TIA",
    affiliateSlug: "albania",
  },
  thailand: {
    name: "Thailand",
    currency: "THB",
    exchangeRate: 35.5,
    accommodation: { hostel: 10, guesthouse: 20, hotel: 45, airbnb: 30 },
    food: { streetFood: 8, localRestaurants: 14, midRange: 25, mix: 11 },
    transport: { public: 5, mixed: 10, taxis: 22 },
    activities: { free: 4, budget: 12, moderate: 28 },
    nightlife: { none: 0, occasional: 12, frequent: 35 },
    simCard: 10,
    visaFee: 0,
    notes: "Thailand is Southeast Asia's most popular destination for good reason. Street food is world-class and costs less than $3/meal. Night buses between cities save accommodation costs.",
    iataCode: "BKK",
    affiliateSlug: "thailand",
  },
  vietnam: {
    name: "Vietnam",
    currency: "VND",
    exchangeRate: 24500,
    accommodation: { hostel: 8, guesthouse: 18, hotel: 40, airbnb: 25 },
    food: { streetFood: 6, localRestaurants: 11, midRange: 20, mix: 9 },
    transport: { public: 4, mixed: 9, taxis: 18 },
    activities: { free: 3, budget: 8, moderate: 20 },
    nightlife: { none: 0, occasional: 8, frequent: 22 },
    simCard: 6,
    visaFee: 25,
    notes: "Vietnam is one of SE Asia's best value countries. Pho and banh mi are under $2. Overnight sleeper trains between cities are a budget traveler's best friend.",
    iataCode: "HAN",
    affiliateSlug: "vietnam",
  },
  indonesia_bali: {
    name: "Bali, Indonesia",
    currency: "IDR",
    exchangeRate: 15750,
    accommodation: { hostel: 12, guesthouse: 22, hotel: 55, airbnb: 35 },
    food: { streetFood: 7, localRestaurants: 13, midRange: 22, mix: 10 },
    transport: { public: 3, mixed: 10, taxis: 20 },
    activities: { free: 5, budget: 15, moderate: 35 },
    nightlife: { none: 0, occasional: 12, frequent: 30 },
    simCard: 8,
    visaFee: 35,
    notes: "Bali has something for every budget. Stay in Canggu or Ubud for more local prices — avoid Seminyak for budget travel. Scooter rental at $5/day beats taxis.",
    iataCode: "DPS",
    affiliateSlug: "bali",
  },
  bosnia: {
    name: "Bosnia & Herzegovina",
    currency: "BAM",
    exchangeRate: 1.85,
    accommodation: { hostel: 14, guesthouse: 28, hotel: 55, airbnb: 35 },
    food: { streetFood: 6, localRestaurants: 11, midRange: 20, mix: 9 },
    transport: { public: 3, mixed: 7, taxis: 15 },
    activities: { free: 3, budget: 8, moderate: 18 },
    nightlife: { none: 0, occasional: 6, frequent: 16 },
    simCard: 7,
    visaFee: 0,
    notes: "Sarajevo is one of Europe's most underrated cities. Cevapi (grilled sausages) with fresh bread costs under $3. The war history is profound and mostly free to experience.",
    iataCode: "SJJ",
    affiliateSlug: "sarajevo-bosnia",
  },
  bulgaria: {
    name: "Bulgaria",
    currency: "BGN",
    exchangeRate: 1.85,
    accommodation: { hostel: 13, guesthouse: 25, hotel: 55, airbnb: 35 },
    food: { streetFood: 7, localRestaurants: 12, midRange: 22, mix: 10 },
    transport: { public: 2, mixed: 6, taxis: 13 },
    activities: { free: 4, budget: 9, moderate: 20 },
    nightlife: { none: 0, occasional: 8, frequent: 22 },
    simCard: 6,
    visaFee: 0,
    notes: "Bulgaria is the EU's cheapest country. Sofia has world-class nightlife at Eastern European prices. Plovdiv's old town is free to explore and stunning.",
    iataCode: "SOF",
    affiliateSlug: "sofia-bulgaria",
  },
  armenia: {
    name: "Armenia",
    currency: "AMD",
    exchangeRate: 387,
    accommodation: { hostel: 12, guesthouse: 22, hotel: 48, airbnb: 30 },
    food: { streetFood: 6, localRestaurants: 11, midRange: 20, mix: 9 },
    transport: { public: 2, mixed: 5, taxis: 12 },
    activities: { free: 5, budget: 8, moderate: 18 },
    nightlife: { none: 0, occasional: 7, frequent: 18 },
    simCard: 4,
    visaFee: 0,
    notes: "Armenia is incredibly underrated. Yerevan has a buzzing café culture and brandy costs less than water in many places. Monasteries are free to visit.",
    iataCode: "EVN",
    affiliateSlug: "yerevan-armenia",
  },
  cambodia: {
    name: "Cambodia",
    currency: "USD",
    exchangeRate: 1,
    accommodation: { hostel: 7, guesthouse: 15, hotel: 35, airbnb: 22 },
    food: { streetFood: 5, localRestaurants: 9, midRange: 18, mix: 7 },
    transport: { public: 3, mixed: 8, taxis: 16 },
    activities: { free: 2, budget: 20, moderate: 40 },
    nightlife: { none: 0, occasional: 6, frequent: 18 },
    simCard: 5,
    visaFee: 30,
    notes: "Cambodia uses USD officially. Angkor Wat pass is $37/day but worth every cent. Phnom Penh has excellent budget guesthouses. Tuk-tuks are the main transport.",
    iataCode: "PNH",
    affiliateSlug: "cambodia",
  },
  mexico: {
    name: "Mexico",
    currency: "MXN",
    exchangeRate: 17.2,
    accommodation: { hostel: 14, guesthouse: 28, hotel: 60, airbnb: 40 },
    food: { streetFood: 8, localRestaurants: 14, midRange: 25, mix: 11 },
    transport: { public: 3, mixed: 8, taxis: 18 },
    activities: { free: 4, budget: 12, moderate: 28 },
    nightlife: { none: 0, occasional: 10, frequent: 30 },
    simCard: 8,
    visaFee: 0,
    notes: "Mexico City and Oaxaca offer incredible food culture at budget prices. Tacos from $0.50 each. Avoid tourist beaches for budget travel — stick to cities and inland towns.",
    iataCode: "MEX",
    affiliateSlug: "mexico",
  },
  colombia: {
    name: "Colombia",
    currency: "COP",
    exchangeRate: 3950,
    accommodation: { hostel: 13, guesthouse: 25, hotel: 55, airbnb: 35 },
    food: { streetFood: 6, localRestaurants: 12, midRange: 22, mix: 9 },
    transport: { public: 2, mixed: 7, taxis: 15 },
    activities: { free: 4, budget: 12, moderate: 25 },
    nightlife: { none: 0, occasional: 10, frequent: 28 },
    simCard: 7,
    visaFee: 0,
    notes: "Colombia offers South America's best bang for buck. Medellín's cable cars are included in a metro card. Set lunch menus (menú del día) for $3-5 are outstanding value.",
    iataCode: "BOG",
    affiliateSlug: "colombia",
  },
  portugal: {
    name: "Portugal",
    currency: "EUR",
    exchangeRate: 0.92,
    accommodation: { hostel: 22, guesthouse: 45, hotel: 90, airbnb: 65 },
    food: { streetFood: 12, localRestaurants: 20, midRange: 35, mix: 16 },
    transport: { public: 5, mixed: 12, taxis: 25 },
    activities: { free: 6, budget: 15, moderate: 30 },
    nightlife: { none: 0, occasional: 12, frequent: 30 },
    simCard: 10,
    visaFee: 0,
    notes: "Portugal is Western Europe's best value. The daily set lunch menu (prato do dia) is €8-12 and always excellent. Porto is significantly cheaper than Lisbon.",
    iataCode: "LIS",
    affiliateSlug: "portugal",
  },
  nepal: {
    name: "Nepal",
    currency: "NPR",
    exchangeRate: 133,
    accommodation: { hostel: 8, guesthouse: 15, hotel: 35, airbnb: 22 },
    food: { streetFood: 5, localRestaurants: 8, midRange: 15, mix: 7 },
    transport: { public: 3, mixed: 7, taxis: 15 },
    activities: { free: 5, budget: 25, moderate: 60 },
    nightlife: { none: 0, occasional: 5, frequent: 14 },
    simCard: 5,
    visaFee: 30,
    notes: "Nepal is one of the world's great trekking destinations. Dal bhat (lentil rice) is the trekker's staple at $3-4. Everest Base Camp trekking permits are required.",
    iataCode: "KTM",
    affiliateSlug: "nepal",
  },
  morocco: {
    name: "Morocco",
    currency: "MAD",
    exchangeRate: 10.1,
    accommodation: { hostel: 12, guesthouse: 28, hotel: 65, airbnb: 40 },
    food: { streetFood: 6, localRestaurants: 11, midRange: 22, mix: 9 },
    transport: { public: 3, mixed: 8, taxis: 18 },
    activities: { free: 4, budget: 10, moderate: 22 },
    nightlife: { none: 0, occasional: 5, frequent: 14 },
    simCard: 6,
    visaFee: 0,
    notes: "Morocco's medinas are best explored on foot — getting lost is half the experience. Harira soup with bread is $1-2. Train network between cities is excellent value.",
    iataCode: "CMN",
    affiliateSlug: "morocco",
  },
};

export type CountryKey = keyof typeof COUNTRIES;

export const COUNTRY_LIST = Object.entries(COUNTRIES).map(([key, data]) => ({
  key: key as CountryKey,
  name: data.name,
})).sort((a, b) => a.name.localeCompare(b.name));

export interface BudgetInputs {
  country: CountryKey;
  days: number;
  accommodation: "hostel" | "guesthouse" | "hotel" | "airbnb";
  food: "streetFood" | "localRestaurants" | "midRange" | "mix";
  transport: "public" | "mixed" | "taxis";
  activities: "free" | "budget" | "moderate";
  nightlife: "none" | "occasional" | "frequent";
}

export interface BudgetBreakdown {
  accommodation: number;
  food: number;
  transport: number;
  activities: number;
  nightlife: number;
  simCard: number;
  visaFee: number;
  dailyTotal: number;
  tripTotal: number;
  tripTotalHigh: number; // +15% buffer
}

export function calculateBudget(inputs: BudgetInputs): BudgetBreakdown {
  const data = COUNTRIES[inputs.country];
  const accommodation = data.accommodation[inputs.accommodation];
  const food = data.food[inputs.food];
  const transport = data.transport[inputs.transport];
  const activities = data.activities[inputs.activities];
  const nightlife = data.nightlife[inputs.nightlife];

  const dailyTotal = accommodation + food + transport + activities + nightlife;
  const tripTotal = Math.round(dailyTotal * inputs.days + data.simCard + data.visaFee);
  const tripTotalHigh = Math.round(tripTotal * 1.15);

  return {
    accommodation,
    food,
    transport,
    activities,
    nightlife,
    simCard: data.simCard,
    visaFee: data.visaFee,
    dailyTotal: Math.round(dailyTotal),
    tripTotal,
    tripTotalHigh,
  };
}
