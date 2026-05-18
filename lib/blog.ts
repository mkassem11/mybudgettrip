export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: number;
  excerpt: string;
  keywords: string[];
  content: string; // HTML string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "7-days-georgia-200-dollars",
    title: "7 Days in Georgia on $200 — A Complete Backpacker Itinerary",
    category: "Itineraries",
    date: "2025-04-10",
    readTime: 9,
    keywords: ["georgia budget travel", "tbilisi backpacker", "georgia 200 dollars"],
    excerpt: "Yes, $200 for a week in Georgia is doable — and it includes wine tasting, monasteries, and the Caucasus mountains. Here's exactly how to do it.",
    content: `
<p>Georgia is one of the last genuinely cheap countries in Europe's extended neighbourhood. A week-long trip including flights from Istanbul, a private room in a guesthouse, three meals a day, and multiple day trips will set you back around $200-220 total. Here's how.</p>

<h2>Day 1–2: Tbilisi</h2>
<p>Arrive in Tbilisi and spend two full days in the capital. The city is walkable — Old Town (Kala), the Peace Bridge, Narikala Fortress, and the sulphur baths in Abanotubani are all within 2km of each other. Budget $10–15/day here including a hostel dorm (~$10), street food meals, and the baths ($5–8).</p>
<p>Don't miss the Natural History Museum of Georgia (free on Sundays) and the Dry Bridge flea market on weekends for Soviet-era memorabilia.</p>

<h2>Day 3: Mtskheta Day Trip</h2>
<p>Take a marshrutka (shared minibus) from Didube bus station to Mtskheta — Georgia's ancient capital and UNESCO World Heritage Site. The fare is under $1 each way. The Jvari Monastery sits on a hill overlooking the confluence of two rivers. Spend 3–4 hours here and return for dinner.</p>

<h2>Day 4: Gori & Stalin Museum</h2>
<p>Another marshrutka day — Gori is 1.5 hours from Tbilisi (under $2 each way). The Stalin Museum is genuinely fascinating and costs about $5. The town is functional and there's no reason to stay overnight. Return in time for khinkali (Georgian dumplings) in Tbilisi — around $3–5 for a full meal.</p>

<h2>Day 5–6: Kakheti Wine Region</h2>
<p>Kakheti is Georgia's wine heartland and one of the world's oldest winemaking regions. Marshrutkas run from Tbilisi's Samgori station to Telavi ($3, 2hrs). Stay at a family guesthouse ($15–20, usually includes dinner and wine). Visit Alaverdi Monastery, Tsinandali estate, and taste amber wine directly from the qvevri (clay vessels). Two days here is ideal.</p>

<h2>Day 7: Free Day in Tbilisi</h2>
<p>Return to Tbilisi, hit the Fabrika creative hub for coffee ($1.50), browse the Dezerter Bazaar, and catch your flight or bus onward.</p>

<h2>Budget Breakdown for 7 Days</h2>
<ul>
<li>Accommodation: 4 nights hostel ($10) + 2 nights guesthouse ($15) = $70</li>
<li>Food: $8/day average = $56</li>
<li>Transport (internal): $20</li>
<li>Activities: $25</li>
<li>Miscellaneous: $15</li>
<li><strong>Total: ~$186</strong></li>
</ul>
<p>Flights are extra — from Istanbul or Dubai you can often find connections for $50–100 return.</p>
    `.trim(),
  },
  {
    slug: "istanbul-budget-guide-35-day",
    title: "Istanbul on $35/Day — The Honest Budget Guide for 2025",
    category: "Destination Guides",
    date: "2025-03-22",
    readTime: 8,
    keywords: ["istanbul budget travel", "istanbul cheap", "istanbul backpacker 2025"],
    excerpt: "Istanbul is astonishingly affordable if you know where to eat, where to stay, and how to get around. $35/day covers everything including transport.",
    content: `
<p>Istanbul is one of the world's great cities — 3,000 years of history, two continents, world-class food, and a street scene that operates around the clock. It's also far cheaper than most Western European capitals, especially since 2021 when the Turkish lira lost significant value against the dollar.</p>

<h2>Getting Around</h2>
<p>Get an Istanbulkart (transit card, costs about $1 to buy) and load it with credit. A single metro, tram, or bus journey costs around $0.40. The iconic Bosphorus ferry costs the same. You can get from Sultanahmet to Kadikoy (the Asian side) for under $1 — arguably the best-value city ferry ride in the world.</p>
<p>Avoid taxis unless you use BiTaksi or UBER — metered taxis are honest but Uber is sometimes cheaper. Never take an unmarked cab.</p>

<h2>Where to Stay</h2>
<p>Budget range in Istanbul is excellent. Dorm beds in Sultanahmet or Beyoglu start at $8–12/night. Private rooms in guesthouses in Fatih or Balat go for $20–30 and are often excellent quality.</p>
<p>Avoid the tourist trap hotels right on the main square — there's a huge quality-to-price premium for that location that's rarely worth it.</p>

<h2>Eating on a Budget</h2>
<p>Istanbul's street food scene is extraordinary. Your morning starting point:</p>
<ul>
<li>Simit (sesame bread ring): $0.20</li>
<li>Midye dolma (stuffed mussels, sold by street vendors): $0.25 each, eat 10 for $2.50</li>
<li>Kebab dürüm from a local snack spot: $1.50–2.00</li>
<li>Balık ekmek (fish sandwich) at Eminönü bridge: $2.00</li>
<li>Set lunch menu at a local lokanta (restaurant): $3–5</li>
</ul>
<p>The tourist restaurants in Sultanahmet charge 4–6x what locals pay two streets away. Walk into any side street, find a place with a handwritten menu on the wall and Turks eating inside.</p>

<h2>Free & Cheap Things to Do</h2>
<ul>
<li>Hagia Sophia: Free (mosque, remove shoes)</li>
<li>Blue Mosque: Free (mosque)</li>
<li>Grand Bazaar: Free to browse</li>
<li>Spice Bazaar: Free to browse</li>
<li>Galata Bridge walk: Free</li>
<li>Bosphorus ferry: $0.40</li>
<li>Topkapi Palace: $15 (worth it)</li>
<li>Galata Tower: $5</li>
</ul>

<h2>Sample Daily Budget</h2>
<ul>
<li>Accommodation: $12 (hostel dorm)</li>
<li>Food: $10 (street food + one sit-down meal)</li>
<li>Transport: $3 (Istanbulkart)</li>
<li>Activities: $5–10 average</li>
<li><strong>Total: ~$30–35/day</strong></li>
</ul>
    `.trim(),
  },
  {
    slug: "balkans-backpacking-route-3-weeks",
    title: "The Perfect Balkans Backpacking Route: 3 Weeks, $700",
    category: "Routes",
    date: "2025-03-05",
    readTime: 11,
    keywords: ["balkans backpacking route", "balkans on a budget", "3 weeks balkans"],
    excerpt: "The Balkans is Europe's best-value backpacking circuit. Here's a tested 3-week loop from Ljubljana to Athens that works out at under $700 all-in.",
    content: `
<p>The Balkans is arguably the best value backpacking destination in Europe — a region of staggering natural beauty, complex history, extraordinary food, and prices that make Western Europe look absurd. This 3-week loop connects the highlights without repetition.</p>

<h2>The Route</h2>
<p><strong>Ljubljana → Lake Bled → Zagreb → Plitvice → Split → Dubrovnik → Kotor → Budva → Sarajevo → Mostar → Tirana → Ohrid → Skopje → Belgrade → Exit</strong></p>

<h2>Week 1: Slovenia & Croatia</h2>
<p>Start in Ljubljana (fly into here or Vienna). The city is compact and charming — one full day is enough. Then head to Lake Bled (bus, 1hr, $4) — the lake itself is free, the island church costs $15 by rowboat. Don't miss Vintgar Gorge walk (free).</p>
<p>Zagreb next (bus, 2.5hrs, $10). The Upper Town is free to wander, the Museum of Broken Relationships is oddly brilliant ($5). Head south to Plitvice Lakes ($15 entry, non-negotiable but spectacular) then bus to Split ($12).</p>
<p>Split has Diocletian's Palace — a Roman imperial palace turned neighbourhood where people actually live. Budget 2 nights. Then bus to Dubrovnik ($12, 4hrs).</p>

<h2>Week 2: Montenegro & Bosnia</h2>
<p>Cross from Dubrovnik into Montenegro (bus, $15, 2hrs). Kotor Bay is one of Europe's most dramatic settings — medieval walled city surrounded by mountains plunging into the sea. Walk the walls ($8), stay 2 nights.</p>
<p>Then up to Sarajevo via Mostar. Mostar's Stari Most bridge is one of the most photographed spots in the Balkans. The city is tiny — half a day is enough before continuing to Sarajevo (bus, 2hrs, $8).</p>
<p>Sarajevo deserves 2 full days. The history here — Austro-Hungarian architecture crammed next to Ottoman bazaars, the scars of the 1990s siege, the extraordinary food — makes it one of Europe's most compelling cities. Budget $28/day.</p>

<h2>Week 3: Albania, North Macedonia & Serbia</h2>
<p>Albania is the wild card of the Balkans — barely touched by mass tourism, extraordinary scenery, and comically cheap. Tirana's Blloku district has a buzzing cafe and bar scene. Spend a night, then head to the Albanian Riviera if you want beaches ($5–8/night camping in shoulder season).</p>
<p>Ohrid in North Macedonia is unmissable — a UNESCO town on a lake, with a castle, ancient churches, and some of the cheapest food in Europe. End in Belgrade, Serbia's chaotic, underrated capital with legendary nightlife and excellent food.</p>

<h2>Budget for 21 Days</h2>
<ul>
<li>Accommodation: avg $12/night × 21 = $252</li>
<li>Food: avg $12/day × 21 = $252</li>
<li>Transport between cities: ~$120</li>
<li>Activities: ~$80</li>
<li><strong>Total without flights: ~$704</strong></li>
</ul>
    `.trim(),
  },
  {
    slug: "cheapest-countries-europe-30-day",
    title: "10 Cheapest Countries in Europe for $30/Day or Less",
    category: "Budget Tips",
    date: "2025-02-18",
    readTime: 7,
    keywords: ["cheapest countries europe", "europe on 30 dollars a day", "cheap european travel"],
    excerpt: "You can still travel Europe on $25–30/day if you choose the right countries. This is the definitive ranked list for 2025.",
    content: `
<p>Europe's cheapest destinations have shifted considerably over the past decade, but the Eastern and South-Eastern edge still offers extraordinary value. Here are the ten countries where $30/day is a comfortable daily budget.</p>

<h2>1. Georgia — $25–30/day</h2>
<p>Georgia's combination of cheap accommodation, sub-$3 meals, and free natural attractions makes it Europe's most underrated bargain. The country uses the Georgian Lari and prices haven't tracked inflation the way other destinations have.</p>

<h2>2. Albania — $25–35/day</h2>
<p>Albania has exploded in popularity since 2020 but prices remain extremely low by European standards. The Albanian Riviera offers some of the cheapest beach accommodation anywhere on the Mediterranean.</p>

<h2>3. North Macedonia — $25–30/day</h2>
<p>Ohrid might be the most overlooked gem in the Balkans. Daily budgets of $25 are comfortable here including a private room, three meals, and admissions.</p>

<h2>4. Kosovo — $25–30/day</h2>
<p>The euro-using newcomer to Balkan tourism. Pristina is rough around the edges but deeply authentic, and day trips to Rugova Canyon are spectacular and essentially free.</p>

<h2>5. Bosnia & Herzegovina — $28–35/day</h2>
<p>Sarajevo and Mostar are serious contenders for the most atmospheric cities in the Balkans, and daily budgets are low even by regional standards.</p>

<h2>6. Bulgaria — $25–35/day</h2>
<p>Sofia is one of the most underrated European capitals. Bulgaria has EU infrastructure at a fraction of EU prices — restaurant meals for $4–6, hostel dorms for $8–12.</p>

<h2>7. Serbia — $30–40/day</h2>
<p>Belgrade's nightlife is legendary but the city also has excellent food, strong coffee culture, and reasonable accommodation. Novi Sad and the Danube countryside are almost free to explore.</p>

<h2>8. Moldova — $20–25/day</h2>
<p>The Cinderella of European travel — Moldova is tiny, almost nobody goes, wine is extraordinarily cheap, and the cave monasteries of Orheiul Vechi are otherworldly.</p>

<h2>9. Armenia — $28–35/day</h2>
<p>Yerevan's cafe culture rivals Vienna at a fraction of the cost. Day trips to Garni and Geghard make for one of the best ancient history days in the Caucasus.</p>

<h2>10. Ukraine (Western) — PRE-WAR REFERENCE</h2>
<p>Lviv was Europe's cheapest city before February 2022. We list it here for when conditions allow travel to return — the city deserves it.</p>
    `.trim(),
  },
  {
    slug: "how-to-find-cheap-flights-europe",
    title: "How to Find Cheap Flights to Europe: The Complete 2025 Guide",
    category: "Budget Tips",
    date: "2025-02-01",
    readTime: 8,
    keywords: ["cheap flights europe", "how to find cheap flights", "flight deals europe 2025"],
    excerpt: "The search strategy, timing tricks, and tools that consistently find sub-$300 return flights to Europe. Works for travellers everywhere.",
    content: `
<p>Finding cheap flights to Europe is a skill, not luck. The same route can cost $180 or $800 depending on when and how you search. Here is the method that consistently finds the lowest prices.</p>

<h2>The Google Flights Explore Method</h2>
<p>Start at Google Flights, set your origin airport, and leave the destination blank. Use the "Explore" map view to see which destinations are cheapest from your city in a given month. This is the single most powerful step — it tells you <em>where</em> to go based on price rather than forcing you to choose a destination first.</p>

<h2>Timing: When to Book</h2>
<p>The sweet spot for European routes from North America is 6–8 weeks in advance. For flights from within Europe, 3–5 weeks. Booking too early (6+ months) rarely gives the lowest prices. Booking too late (under 2 weeks) is expensive except for extreme last-minute deals.</p>
<p>Day of week matters less than people think, but there is a mild statistical advantage to searching on Tuesday/Wednesday and flying Tuesday/Wednesday/Thursday (vs weekends).</p>

<h2>The Shoulder Season Advantage</h2>
<p>Flying in April–May or September–October instead of June–August cuts flight prices by 30–50% to most European destinations, and accommodation is cheaper and less crowded. This is the single biggest budget hack for European travel.</p>

<h2>Budget Airlines in Europe</h2>
<p>Once in Europe, budget airlines are essential tools:</p>
<ul>
<li><strong>Ryanair</strong>: Extensive network, strict baggage rules, always book direct</li>
<li><strong>Wizz Air</strong>: Best for Eastern Europe routes</li>
<li><strong>easyJet</strong>: More comfortable but pricier than Ryanair</li>
<li><strong>Pegasus</strong>: Turkish budget carrier, excellent for Istanbul connections</li>
<li><strong>flydubai / Air Arabia</strong>: Best for MENA connections</li>
</ul>
<p>Always book direct (not via aggregators) for budget airlines — you'll pay less and have better recourse if something goes wrong.</p>

<h2>Price Alert Tools</h2>
<ul>
<li>Google Flights price tracking (set alerts for specific routes)</li>
<li>Hopper (predictive pricing, mobile app)</li>
<li>Skyscanner price alerts</li>
<li>Scott's Cheap Flights / Going.com (email newsletter, finds genuine deals)</li>
</ul>

<h2>Hub Hopping Strategy</h2>
<p>If your home airport has limited routes to your destination, fly first to a major hub (London, Amsterdam, Frankfurt, Istanbul, Dubai) where competition keeps prices low, then take a short cheap onward flight. This two-leg approach frequently beats direct flights by $150–300.</p>
    `.trim(),
  },
  {
    slug: "georgia-vs-armenia-budget-comparison",
    title: "Georgia vs Armenia: Which is Cheaper for Budget Travellers?",
    category: "Comparisons",
    date: "2025-01-20",
    readTime: 7,
    keywords: ["georgia vs armenia travel", "georgia armenia budget", "caucasus budget travel"],
    excerpt: "Both countries are extraordinary value, but they're different in character and cost. Here's the honest comparison across every budget category.",
    content: `
<p>Georgia and Armenia are the two most popular budget travel destinations in the Caucasus, and if you're visiting the region it's worth understanding how they differ before you plan your route. Both offer remarkable value and fascinating culture — but there are meaningful differences.</p>

<h2>Accommodation</h2>
<p><strong>Georgia</strong>: Hostel dorms in Tbilisi start at $8–10/night. Guesthouses outside the capital average $12–18 including breakfast. Family homestays in wine country often include dinner and unlimited wine for $20–25.</p>
<p><strong>Armenia</strong>: Yerevan has similar dorm pricing ($8–12) but slightly fewer budget options. Outside the capital, guesthouses are excellent value at $15–20 including meals.</p>
<p><strong>Winner: Roughly equal, Georgia edges it outside major cities</strong></p>

<h2>Food</h2>
<p><strong>Georgia</strong>: Georgian cuisine is one of the world's great culinary traditions and it's extraordinarily cheap. Khinkali (dumplings) cost $0.30–0.50 each, khachapuri (cheese bread) $1.50–3.00, a full restaurant meal $4–8. Street food is pervasive and excellent.</p>
<p><strong>Armenia</strong>: Armenian food is excellent but slightly more expensive in Yerevan, particularly at the better restaurants. Budget $8–12/day for food vs Georgia's $6–9.</p>
<p><strong>Winner: Georgia by a meaningful margin</strong></p>

<h2>Transport</h2>
<p><strong>Georgia</strong>: Marshrutkas (shared minibuses) connect everything cheaply. Tbilisi metro is $0.20 per ride. Taxis via Bolt/Yandex are $1–3 for most city trips.</p>
<p><strong>Armenia</strong>: Yerevan has good marshrutka coverage. Day trips are slightly more expensive because distances are shorter and taxis fill the gap marshrutkas don't cover.</p>
<p><strong>Winner: Georgia for internal transport costs</strong></p>

<h2>Free Activities</h2>
<p><strong>Georgia</strong>: Mtskheta, many monasteries, the Svaneti mountains, Kazbegi — most of the iconic sites are free or very cheap to access.</p>
<p><strong>Armenia</strong>: Garni/Geghard day trip costs $10–15 for transport. Republic Square fountains, the Cascade complex (free), and Vernissage market are all free.</p>
<p><strong>Winner: Roughly equal</strong></p>

<h2>Overall Daily Budget</h2>
<ul>
<li>Georgia: $25–30/day comfortable</li>
<li>Armenia: $28–35/day comfortable</li>
</ul>
<p>Both countries are extraordinary value. If budget is your only criterion, Georgia edges it. If you want a slightly more sophisticated city experience with excellent coffee culture, Yerevan is superb. Do both if you can — the two countries complement each other perfectly.</p>
    `.trim(),
  },
  {
    slug: "sofia-bulgaria-budget-guide",
    title: "Sofia, Bulgaria Budget Guide — Europe's Most Underrated Capital",
    category: "Destination Guides",
    date: "2025-01-08",
    readTime: 7,
    keywords: ["sofia budget travel", "sofia bulgaria cheap", "bulgaria backpacker guide"],
    excerpt: "Sofia is an EU capital with Eastern European prices — a rare combination. Here's how to do it for €25/day including a day trip to Plovdiv.",
    content: `
<p>Sofia rarely appears on European travel bucket lists, which is exactly why it's worth going. The Bulgarian capital has excellent food, a walkable centre packed with 2,000 years of history, a mountain you can hike up within city limits, and prices that would make any Western European traveller weep with relief.</p>

<h2>Getting Around Sofia</h2>
<p>Sofia has an excellent tram network and two metro lines. A single ride costs $0.80 (BGN 1.60). Day passes are available for $2.50. The Sofia Card (24/48/72hr) covers all public transport including the route up to Vitosha Mountain and gives free or discounted museum entry.</p>
<p>The city centre is very walkable — most sights in the central area are within 15 minutes on foot.</p>

<h2>The Must-See Triangle</h2>
<p>Within a 200-metre radius of the TZUM shopping centre, you'll find the Saint Nedelya Orthodox Cathedral, the Banya Bashi Ottoman Mosque (one of the oldest functioning mosques in Europe), and the magnificent Sofia Synagogue. Three major religious buildings of different faiths, essentially side by side — and all free to visit.</p>

<h2>Vitosha Mountain</h2>
<p>Vitosha National Park starts at the edge of the city. Tram 5 from the centre takes you to the base in 30 minutes. From there you can hike to Cherni Vrah (Black Peak, 2,290m) and be back in the city for dinner. The entire trip — including tram fare — costs under $4. This is genuinely world-class hiking accessible from a European capital.</p>

<h2>Day Trip: Plovdiv</h2>
<p>Plovdiv is a strong contender for Bulgaria's most beautiful city. The Old Town (Stariyat Grad) sits on three hills above the modern city, with Roman ruins, Ottoman houses, art galleries, and the best restaurant scene outside Sofia. Trains run hourly from Sofia ($4, 2hrs). One full day is ideal.</p>

<h2>Where to Eat</h2>
<p>Central Market Hall (Zhenski Pazar) is where locals buy fresh produce and prepared food. The women's market is a sensory overload in the best way and you can eat extremely well for $2–3. Restaurant set lunches (business lunch menus) go for $4–6 and are invariably excellent.</p>
<p>Try <em>banitsa</em> (filo pastry with cheese or spinach, $0.60–1.00), <em>kebapche</em> (grilled minced meat, $2), and <em>shopska salad</em> (tomato/cucumber/white cheese, $2–3).</p>

<h2>Daily Budget</h2>
<ul>
<li>Accommodation: $9–12 (hostel dorm)</li>
<li>Food: $8–10</li>
<li>Transport: $2–3</li>
<li>Activities: $3–5</li>
<li><strong>Total: $22–30/day</strong></li>
</ul>
    `.trim(),
  },
  {
    slug: "cheapest-time-visit-istanbul",
    title: "Cheapest Time to Visit Istanbul — Month by Month Price Guide",
    category: "Flight & Price Tips",
    date: "2024-12-15",
    readTime: 6,
    keywords: ["cheapest time istanbul", "istanbul when to go", "istanbul travel prices by month"],
    excerpt: "Istanbul's costs vary significantly by season. Here's every month broken down by hotel prices, flight costs, and what the weather is actually like.",
    content: `
<p>Istanbul is a year-round destination thanks to its mild climate, but prices — for flights, hotels, and even some attractions — vary considerably by month. Here's exactly what to expect.</p>

<h2>January–February: Coldest and Cheapest</h2>
<p>Istanbul in winter is grey and occasionally cold (5–10°C), but crowds are minimal and prices hit their annual low. Hostel dorms: $8–10. Hotel rooms: $25–35. Flights from London: $50–100 return. The sights are less crowded, the city is authentically local, and the food scene is unaffected by season. If you don't mind a coat, this is excellent value.</p>

<h2>March–April: Best Sweet Spot</h2>
<p>Spring arrives in March with warming temperatures (12–16°C). By April the city is gorgeous — blossoming trees, warm evenings, and prices still well below peak. This is arguably the best month to visit: accommodation 20% cheaper than June, weather ideal, fewer tourists. Book a month ahead.</p>

<h2>May: Rising Prices, Still Good</h2>
<p>May is when prices start climbing. Still excellent weather (20–22°C) and busy but not oppressively crowded. Book accommodation 4–6 weeks ahead. Last month before summer pricing kicks in fully.</p>

<h2>June–August: Peak Season</h2>
<p>Summer is hot (28–32°C) and the city fills with tourists. Hotel prices jump 40–60% vs. winter. The sites are busy, queues are longer, and the heat can be oppressive by afternoon. Avoid if budget is your priority.</p>

<h2>September–October: Second Sweet Spot</h2>
<p>September and October are arguably the best months to visit: summer heat fades (22–26°C in September, 16–20°C in October), crowds thin, and prices drop 20–30% from peak. The light is golden in October. This is when experienced travellers go.</p>

<h2>November–December: Quiet and Underrated</h2>
<p>November is underrated — cool and sometimes rainy but not cold, much cheaper than summer, and quiet enough to actually enjoy the Hagia Sophia without crowds. December is festive with Christmas markets appearing in some areas, and prices remain low until New Year's.</p>

<h2>Summary: When to Go for Budget Travel</h2>
<ul>
<li><strong>Best value:</strong> January, February, November</li>
<li><strong>Best balance:</strong> March, April, October</li>
<li><strong>Most expensive:</strong> June, July, August</li>
</ul>
    `.trim(),
  },
  {
    slug: "yerevan-armenia-budget-guide",
    title: "Yerevan Budget Guide: Armenia's Pink City for $28/Day",
    category: "Destination Guides",
    date: "2024-12-01",
    readTime: 7,
    keywords: ["yerevan budget travel", "armenia cheap travel", "yerevan backpacker guide"],
    excerpt: "Yerevan is one of the world's oldest cities, built from pink volcanic stone with Mount Ararat as its backdrop. Here's how to see it properly without overspending.",
    content: `
<p>Yerevan rarely makes Western travel itineraries, which is a gift to those who do go. The Armenian capital is ancient (founded in 782 BC), architecturally striking, and oriented around a coffee-and-conversation culture that makes it immediately likeable. Prices are low, people are welcoming, and the history is extraordinary.</p>

<h2>Getting Around</h2>
<p>Yerevan has a small but useful metro (one line, 10 stations, $0.30/ride) and an extensive marshrutka network. Most of the city centre is walkable in 30–40 minutes. Bolt and Yandex taxis are cheap — cross-city rides rarely exceed $3.</p>

<h2>The Cascade</h2>
<p>The Cascade is Yerevan's defining landmark — a massive Soviet-era staircase complex connecting the city centre to a hilltop park, lined with contemporary sculpture and flanked by the Cafesjian Museum (partially free). Climb it for views of the city and, on clear days, the snow-capped cone of Mount Ararat rising dramatically across the Turkish border. Free, and unmissable.</p>

<h2>Republic Square</h2>
<p>The central square is one of the finest examples of Soviet-era architecture — grand pink tuff stone buildings in a neo-classical style surrounding a fountained plaza. The musical fountain show (evenings in summer) is free and a genuine local institution.</p>

<h2>Garni & Geghard Day Trip</h2>
<p>The single best day trip from Yerevan visits two sites: the Pagan Temple of Garni (Armenia's only preserved Greco-Roman structure, dating to the 1st century AD) and the UNESCO-listed Geghard Monastery, partly carved into a cliff face in the 4th century. A shared taxi from Yerevan to both sites and back costs $12–15 split between passengers — join the marshrutka queue outside Yerevan's Zoravor Church on Sunday mornings.</p>

<h2>Brandy & Food</h2>
<p>The Ararat Brandy Factory offers tours and tastings from $5 — you taste three brandies aged 3, 5, and 10 years, and the history of Armenian cognac (it predates French cognac by decades) is fascinating. For food, try <em>khorovats</em> (Armenian barbecue), <em>dolma</em> (stuffed grape leaves), and the extraordinary fresh herb and cheese plates that accompany almost every meal.</p>

<h2>Daily Budget</h2>
<ul>
<li>Accommodation: $10–15 (hostel dorm or budget guesthouse)</li>
<li>Food: $8–10</li>
<li>Transport: $3</li>
<li>Activities: $5</li>
<li><strong>Total: $26–33/day</strong></li>
</ul>
    `.trim(),
  },
  {
    slug: "how-to-sleep-cheap-hostels-guide",
    title: "How to Sleep Well for Under $15/Night — The Complete Hostel Guide",
    category: "Budget Tips",
    date: "2024-11-20",
    readTime: 8,
    keywords: ["cheap hostels guide", "how to find cheap accommodation", "hostel tips backpacking"],
    excerpt: "Hostels have changed dramatically in the past decade. The best ones are genuine design hotels with dorms. Here's how to find them and pay less.",
    content: `
<p>The hostel scene in 2025 is unrecognisable from ten years ago. The best hostels are genuinely cool places to stay — design-forward, socially rich, and operated with as much care as a boutique hotel. The worst are unchanged. Here's how to tell the difference and always find the good ones.</p>

<h2>The Rating Minimum</h2>
<p>Never book a hostel below 8.0 on Hostelworld. Below that threshold, complaints about cleanliness, noise, and staff become common. Above 9.0 on Hostelworld is the gold standard — these hostels typically have strong community events, excellent facilities, and staff who actively enhance the experience. The extra $2–3/night for a 9.0 vs an 8.0 hostel is always worth it.</p>

<h2>Book Direct When You Can</h2>
<p>Hostelworld and Booking.com charge hostels 10–15% commission, which the hostel has to recover somehow. If you find a hostel you like on these platforms, go to their direct website and book there. Often the price is the same or slightly lower, and you're giving more money directly to the hostel. Some hostels offer a small discount for direct bookings — email them and ask.</p>

<h2>Female-Only Dorms</h2>
<p>If you're a solo female traveller, female-only dorms are almost always better value than mixed dorms at the same hostel. They're quieter, cleaner, and the social dynamic is different. They also frequently cost less than mixed dorms at the same hostel, which seems counterintuitive but is common.</p>

<h2>Couchsurfing in 2025</h2>
<p>Couchsurfing went paid-for ($3/month) in 2020, which decimated the platform somewhat. But the community that remains is more committed. The Couchsurfing Hangouts feature connects you with locals who aren't hosting but will meet for coffee or show you the city — genuinely valuable in less-touristed destinations.</p>
<p>Workaway, Worldpackers, and Helpx are alternatives that exchange accommodation for a few hours of work per day — excellent for longer stays.</p>

<h2>Timing Your Booking</h2>
<p>In summer (June–August) in popular destinations, book at least 2 weeks ahead. In shoulder season (April–May, September–October), 3–5 days ahead is usually fine. In winter, you can often walk in and negotiate. The exception: anywhere near a festival or major event — book months ahead.</p>

<h2>The Breakfast Trap</h2>
<p>Hostel breakfast is almost never worth the addon price. $5 for toast and instant coffee when the café next door charges $2 for the same thing plus a view. Skip it, explore, and eat like a local.</p>
    `.trim(),
  },
  {
    slug: "budget-packing-list-backpacking",
    title: "Budget Travel Packing List: What You Actually Need (And What to Leave)",
    category: "Budget Tips",
    date: "2024-11-05",
    readTime: 6,
    keywords: ["backpacking packing list", "budget travel essentials", "what to pack backpacking"],
    excerpt: "Over-packing is the most common rookie mistake. Here's the definitive minimalist list tested across 30+ countries.",
    content: `
<p>Packing light saves money (no checked bag fees on budget airlines), saves time (no waiting at baggage claim), and makes travel less stressful. Here is everything you need for a 2-week to 2-month trip in a 40L daypack.</p>

<h2>The Bag</h2>
<p>A 36–44L backpack that fits in aircraft overhead bins (most budget airline carry-on limits). Osprey, Nomatic, and Tortuga make excellent options. The bag itself is not where to cheap out — buy once, use for a decade.</p>

<h2>Clothing: The Actual Minimum</h2>
<ul>
<li>4–5 t-shirts / tops (merino wool dries fast and doesn't smell)</li>
<li>2 pairs of trousers/shorts (one smart, one casual)</li>
<li>1 lightweight jacket or fleece</li>
<li>1 rain jacket (packable)</li>
<li>4–5 pairs underwear (merino again)</li>
<li>3–4 pairs socks</li>
<li>1 pair walking shoes (comfortable enough for 15km days)</li>
<li>1 pair sandals / flip-flops</li>
</ul>
<p>If you're going to a conservative country or religious sites, add one smarter item (collared shirt, long skirt). That's it. The laundry problem solves itself — every hostel has a washing machine or a sink.</p>

<h2>Electronics</h2>
<ul>
<li>Phone + charger + power bank</li>
<li>Universal travel adapter</li>
<li>Earbuds (for flights and hostel dorms)</li>
<li>Laptop or tablet if you're working remotely</li>
</ul>
<p>You don't need a camera — modern smartphone cameras are extraordinary. You don't need a tablet AND a laptop. Pick one.</p>

<h2>Toiletries</h2>
<p>Buy almost all toiletries at your destination — shampoo, toothpaste, sunscreen weigh a lot and are available everywhere. Bring: small deodorant, any prescription medication (with the script), and a microfibre towel (most hostels provide towels but not all).</p>

<h2>What to Leave Behind</h2>
<ul>
<li>A hairdryer (provided in every hotel, available in pharmacies for $5)</li>
<li>More than 2 books (e-readers exist)</li>
<li>A full-size first aid kit (pharmacy basics suffice)</li>
<li>"Just in case" clothing you've never worn at home</li>
<li>Your comfort object that weighs 800g</li>
</ul>
    `.trim(),
  },
  {
    slug: "eat-well-5-dollars-day-travel",
    title: "How to Eat Brilliantly for $5–8/Day While Travelling",
    category: "Budget Tips",
    date: "2024-10-22",
    readTime: 6,
    keywords: ["eat cheap while travelling", "budget food travel", "5 dollars food backpacking"],
    excerpt: "Eating cheaply while travelling is not about eating badly. The best food in most countries costs $1–3. Here's how to find it everywhere.",
    content: `
<p>The best meals I've had while travelling cost under $3. A perfect khinkali dumpling in Tbilisi for $0.50. A fish sandwich on Istanbul's Eminönü Bridge for $2. Ćevapi with bread and ajvar in Sarajevo for $3.50. Budget food and great food are not opposites — in most of the world, they're the same thing.</p>

<h2>The Taxi Driver Rule</h2>
<p>Ask where taxi drivers eat. They work long hours, eat at least two meals a day in the city, and cannot afford tourist restaurant prices. They know every good cheap lokanta, canteen, and street food stall in their part of the city. This advice works in every country I've tested it in.</p>

<h2>Central Markets</h2>
<p>Every city has a central market hall or outdoor market. In Sofia it's Zhenski Pazar. In Istanbul it's Kadikoy market. In Sarajevo it's the old bazaar area. Markets have the freshest food, the widest selection of local specialities, and the cheapest prices — because they're where locals buy food, not tourists.</p>

<h2>The Set Lunch Hack</h2>
<p>In Eastern Europe, the Balkans, and the Caucasus, restaurants offer a fixed-price lunch menu (called "business lunch" in many places) from 12–3pm. Typically $3–6 for soup + main + bread. This is how office workers eat. The same meal ordered à la carte in the evening costs $8–12. Eat your main meal at lunch.</p>

<h2>Supermarket Breakfasts</h2>
<p>Never buy breakfast from a hostel or café when a supermarket is nearby. Fresh bread, local cheese, fruit, yoghurt, and juice costs $1.50–2.50 and is often superior to a hostel's $4–5 "continental breakfast." Save eating out for meals that matter — dinner with something worth drinking.</p>

<h2>What to Look For</h2>
<ul>
<li>Handwritten menus on the wall or chalkboard (locals, not tourist menus)</li>
<li>No English menu displayed outside</li>
<li>Full tables at 1pm on a Tuesday (office workers)</li>
<li>Queues at street food stalls (freshness signal)</li>
<li>No photos of food on the menu (restaurants with photo menus mark up 40–60%)</li>
</ul>
    `.trim(),
  },
  {
    slug: "sarajevo-budget-guide-bosnia",
    title: "Sarajevo Budget Guide — Bosnia's Most Atmospheric City for $28/Day",
    category: "Destination Guides",
    date: "2024-10-10",
    readTime: 8,
    keywords: ["sarajevo budget guide", "bosnia budget travel", "sarajevo cheap travel"],
    excerpt: "Sarajevo is where East meets West in the most literal sense — and it's one of the most affordable and deeply interesting cities in Europe.",
    content: `
<p>Sarajevo stopped time in 1990, then had time forced upon it in the most brutal way. The result is a city unlike anywhere else in Europe — Ottoman bazaars, Austro-Hungarian boulevards, Brutalist housing blocks from the Yugoslav era, and the weight of recent history visible in bullet-pocked walls and the poignant Srebrenica Gallery. It is extraordinary, and it costs almost nothing to experience.</p>

<h2>Getting Oriented</h2>
<p>Sarajevo is small and walkable. The Baščaršija (Old Bazaar) at the east end of the old city is the Ottoman heart — a labyrinth of copper workshops, teahouses, and the iconic Sebilj fountain. Walk west and you're in the Austro-Hungarian quarter. Continue and you hit socialist-era Tito Street. The entire east-west axis is 2km.</p>

<h2>The Baščaršija</h2>
<p>Free to explore. The bazaar has been here since the 15th century and still functions as an actual market, not a tourist simulation. Coppersmith workshops produce the same handmade goods they have for 500 years. The Gazi Husrev-beg Mosque (1531) is one of the finest Ottoman mosques in the Balkans — free to enter outside prayer times (dress modestly, remove shoes).</p>

<h2>The Best Ćevapi in the Balkans</h2>
<p>Sarajevo takes ćevapi seriously. These small grilled sausages of minced beef and lamb served with somun bread, raw onion, and kajmak (cream) are the city's dish. Ćevabdžinica Zeljo on Kundurdžiluk Street is the institution — expect a queue, expect it to be worth it, expect to pay $3.50 for a proper portion.</p>

<h2>War Tunnel Museum</h2>
<p>The tunnel built under the airport runway during the 1992–1995 siege was the city's lifeline. The museum at Ilidža (tram from city centre, $0.70) tells the story. Entry is $5. It's one of the most powerful museums I've visited anywhere.</p>

<h2>Day Trip: Mostar</h2>
<p>Bus to Mostar takes 2 hours and costs $8 one-way. The Stari Most bridge (rebuilt after its destruction in 1993) is one of the most beautiful structures in the Balkans. The old town on both sides is tiny — 2–3 hours is enough. Return for dinner in Sarajevo.</p>

<h2>Daily Budget</h2>
<ul>
<li>Accommodation: $10–12 (hostel dorm, multiple good options in Baščaršija)</li>
<li>Food: $8–10 (ćevapi for $3.50, burek for $1.50, dinner for $4)</li>
<li>Transport: $2</li>
<li>Activities: $5</li>
<li><strong>Total: $25–29/day</strong></li>
</ul>
    `.trim(),
  },
  {
    slug: "budget-transport-europe-bus-trains",
    title: "Getting Across Europe Cheaply: Buses vs Trains vs Budget Flights",
    category: "Budget Tips",
    date: "2024-09-25",
    readTime: 7,
    keywords: ["cheap transport europe", "flixbus vs train europe", "cheapest way travel europe"],
    excerpt: "How you move between cities is the biggest variable in a European travel budget. Here's when to take the bus, the train, and the plane.",
    content: `
<p>The right mode of transport saves you $30–100 per leg in Europe. Make the wrong call repeatedly and your transport budget doubles. Here's the decision framework.</p>

<h2>When to Take the Bus (Flixbus / RegioJet)</h2>
<p>Buses win when: the journey is under 6 hours, rail connections are slow or require multiple changes, or you're travelling in Western Europe where trains are expensive.</p>
<p><strong>Flixbus</strong> covers 40+ countries and can be extraordinarily cheap if you book early — London to Amsterdam for $8, Paris to Barcelona for $15. These prices disappear fast; book 4–6 weeks ahead. The app is good, the buses are clean, WiFi is reliable.</p>
<p><strong>RegioJet</strong> operates in Central and Eastern Europe (Czech Republic, Slovakia, Hungary, Poland, Austria) with free coffee on board and better seats than Flixbus. Often cheaper than trains on the same route.</p>

<h2>When to Take the Train</h2>
<p>Trains beat buses when: the journey is over 6 hours and the train is overnight (saving a night's accommodation), the scenery is spectacular and worth seeing, or rail passes give you a better per-journey price.</p>
<p><strong>Night trains</strong> are undergoing a European renaissance. The European Sleeper (Brussels to Vienna) and Nightjet network have expanded dramatically. A couchette on an overnight train costs $30–50 and replaces both a bed and a transport ticket.</p>
<p><strong>Rail passes</strong> (Interrail for EU residents, Eurail for non-EU) make economic sense only if you're travelling fast and covering a lot of ground — 3+ countries in 10 days. For slow travel, point-to-point tickets almost always win on price.</p>

<h2>When to Take a Budget Flight</h2>
<p>Fly when: the destination is over 6 hours by ground transport, or budget airlines offer genuinely cheap fares that undercut the train.</p>
<p>Calculate total cost honestly: budget airline price + getting to/from low-cost airport (often 45–90 minutes outside the city) + luggage fees + time. A $20 Ryanair flight that costs $30 in airport transport and 3 hours of your time is often worse value than a $40 train.</p>

<h2>Marshrutkas: The Secret Weapon</h2>
<p>In Eastern Europe and the Caucasus, marshrutkas (shared minibuses) are the default cheap transport. They depart when full rather than on a schedule, cost $1–5 for most journeys, and go everywhere buses don't. Ask at your hostel where the marshrutka stand is for your destination — it's rarely at the main bus station.</p>
    `.trim(),
  },
  {
    slug: "albania-budget-guide-complete",
    title: "Albania Budget Guide 2025: Europe's Last Undiscovered Country",
    category: "Destination Guides",
    date: "2024-09-10",
    readTime: 8,
    keywords: ["albania budget travel", "albania cheap", "albania backpacker 2025"],
    excerpt: "Albania went from completely closed to moderately visited in one generation. It's still raw, still cheap, and still extraordinary. Here's the complete guide.",
    content: `
<p>Albania was one of the most isolated countries in the world until 1991. It's been catching up at extraordinary speed — but prices haven't fully caught up yet, which creates a window that won't last forever. This is the time to go.</p>

<h2>Tirana: The Capital</h2>
<p>Tirana is chaotic and colourful — literally, after former mayor Edi Rama (now Prime Minister) had the city's communist-era blocks painted in vivid patterns. Skanderbeg Square is the heart of the city, ringed by museums and the Et'hem Bey Mosque. The National Museum of History is $3 and excellent.</p>
<p>The Blloku neighbourhood (formerly reserved exclusively for Communist Party elites until 1991) is now Tirana's café and nightlife district — excellent espresso for $0.80, cocktails for $3. Budget $25–30/day in Tirana.</p>

<h2>The Albanian Riviera</h2>
<p>The stretch from Himara to Sarandë on the Ionian coast is one of Europe's most beautiful and least-developed coastlines. Crystal water, dramatic cliffs, and prices that would be impossible elsewhere on the Mediterranean. In June–July, budget camping spots on the beach go for $5–8/night. Guesthouses are $15–25. Out of peak season (May, September), these prices drop further.</p>

<h2>Gjirokastra: The Stone City</h2>
<p>UNESCO-listed Gjirokastra is one of the finest examples of Ottoman-era architecture in the Balkans — a city built from stone on a steep hillside, with a castle dominating the skyline. The birthplace of Ismail Kadare and Enver Hoxha (uncomfortable historical juxtaposition). Gjirokastra has almost no tourist infrastructure relative to its quality — which means prices are rock-bottom.</p>

<h2>The North: Accursed Mountains</h2>
<p>The Albanian Alps (locally called "Bjeshkët e Namuna" — the Cursed Mountains) are among Europe's most dramatic mountain landscapes and barely visited. The Valbona Valley and Theth are connected by a stunning 6-hour hike. Accommodation in both villages is in guesthouses ($20–25 including dinner and breakfast). This region should be on every serious hiker's list.</p>

<h2>Practical Notes</h2>
<p>Albania uses the Lek (ALL). $1 ≈ 100 ALL. Major sights accept card but always carry cash outside cities. The unofficial exchange economy means cash often gets better rates than ATMs. Roads in the north and in rural areas can be challenging. Driving is aggressive in cities — if you rent, go slowly and expect the unexpected.</p>

<h2>Daily Budget</h2>
<ul>
<li>Accommodation: $8–15 (hostel/guesthouse)</li>
<li>Food: $7–10</li>
<li>Transport: $3–5</li>
<li>Activities: $3–5</li>
<li><strong>Total: $21–35/day depending on region</strong></li>
</ul>
    `.trim(),
  },
  {
    slug: "travel-insurance-budget-guide",
    title: "Do You Really Need Travel Insurance? A Honest Budget Traveller's Take",
    category: "Budget Tips",
    date: "2024-08-28",
    readTime: 5,
    keywords: ["travel insurance budget travel", "cheapest travel insurance", "backpacker insurance guide"],
    excerpt: "Yes, you need it. But you don't need to pay $200 for it. Here's how to get proper coverage for under $30/month.",
    content: `
<p>Travel insurance is the topic most budget travellers prefer to avoid thinking about. It feels like a waste of money when nothing goes wrong — until something goes wrong and you're looking at a $15,000 medical bill in a country where your credit card's built-in "insurance" covers exactly nothing.</p>

<h2>What Actually Matters in a Policy</h2>
<p>Most travel insurance comparisons focus on cancellation cover. Don't. The critical number is medical evacuation and emergency hospitalisation cover. You want a minimum of $100,000 in emergency medical cover. Medical evacuation from a remote mountain or a country without decent hospitals can cost $30,000–80,000. That's the number that will ruin your financial life if uninsured.</p>

<h2>What You Can Skip</h2>
<ul>
<li><strong>Baggage cover</strong>: Airlines cover lost luggage, your home contents insurance often covers stolen items abroad. The incremental value from travel insurance baggage cover is low.</li>
<li><strong>Cancellation cover</strong>: Only relevant if you've pre-booked non-refundable things worth more than the extra premium cost.</li>
<li><strong>Gadget cover</strong>: A separate gadget policy from a specialist is almost always cheaper and better.</li>
</ul>

<h2>Recommended for Budget Travellers</h2>
<p><strong>SafetyWing Nomad Insurance</strong>: $45/month, covers medical emergencies including evacuation, works worldwide (excluding USA), can be bought after you've already left home. Designed explicitly for long-term travellers. The deductible is $250 per claim period — acceptable.</p>
<p><strong>World Nomads</strong>: Slightly more expensive ($55–75/month depending on nationality) but covers more activities including adventure sports. Worth it if you're doing anything more than hiking — diving, mountaineering, motorbike riding.</p>

<h2>One Real Story</h2>
<p>A friend broke her leg hiking in the Georgian mountains. Helicopter evacuation to Tbilisi: $4,000. Hospital: $2,000. Insurance payout: everything above the $250 deductible. She paid $250. Her SafetyWing policy had cost $45/month. The six days she'd had it before the accident paid for that policy for nine years. Buy the insurance.</p>
    `.trim(),
  },
  {
    slug: "north-macedonia-ohrid-budget",
    title: "North Macedonia & Ohrid: Europe's Most Overlooked Budget Destination",
    category: "Destination Guides",
    date: "2024-08-15",
    readTime: 7,
    keywords: ["north macedonia budget travel", "ohrid budget guide", "skopje cheap"],
    excerpt: "A million travellers fly over North Macedonia to reach Greece. They're missing Europe's most atmospheric lake town and some of its cheapest food.",
    content: `
<p>North Macedonia sits between Greece, Bulgaria, Serbia, Kosovo, and Albania — and somehow gets overlooked by almost everyone travelling between these countries. This is a mistake. Lake Ohrid is one of Europe's oldest and deepest lakes, Ohrid town is a UNESCO-listed Ottoman gem, and Skopje is one of the most bizarre and fascinating capital cities on the continent.</p>

<h2>Skopje: Baroque Gone Wrong</h2>
<p>Skopje's city centre was rebuilt after a 1963 earthquake and then subjected to "Skopje 2014" — a government project that added neo-classical statues, triumphal arches, and baroque fountains in an attempt to create an ancient feel for a city that doesn't need it. The result is genuinely surreal — Alexander the Great atop a massive horse fountain surrounded by 100 other statues. Spend one day here, embrace the absurdity.</p>
<p>The Old Bazaar (Čaršija) across the Stone Bridge is the counterpoint — an authentic Ottoman bazaar that pre-dates all the baroque additions and is far more interesting. Food here is excellent and cheap: a full meal for $3–5.</p>

<h2>Ohrid: The Jewel</h2>
<p>Three hours by bus from Skopje ($8), Ohrid sits on a lake so clear you can see the bottom at 20 metres depth. The old town piles up a hillside above the water with 365 churches (one for each day of the year, according to legend), a medieval fortress, and some of the best fresh trout you'll eat anywhere.</p>
<p>The Church of Saint John at Kaneo sits on a cliff above the lake and is the most photographed image in the country — and deservedly so. Arrive at dawn or dusk and you'll have it to yourself.</p>

<h2>What to Eat</h2>
<ul>
<li><em>Pastrmajlija</em>: oval flatbread topped with diced pork, baked in a wood oven. National dish. $3.</li>
<li><em>Ohrid trout</em> (in Ohrid obviously): grilled, with vegetables, lemon, $6–8. Worth every cent.</li>
<li><em>Tavče gravče</em>: baked beans Macedonian-style with peppers and spices. $2–3.</li>
</ul>

<h2>Daily Budget</h2>
<ul>
<li>Skopje: $22–27/day</li>
<li>Ohrid: $25–30/day (accommodation slightly pricier due to tourism)</li>
</ul>
    `.trim(),
  },
  {
    slug: "istanbul-to-tbilisi-cheapest-route",
    title: "Getting from Istanbul to Tbilisi: Every Cheap Option Compared",
    category: "Routes",
    date: "2024-07-30",
    readTime: 6,
    keywords: ["istanbul to tbilisi cheap", "istanbul tbilisi overland", "istanbul georgia route"],
    excerpt: "Istanbul and Tbilisi are one of the great travel pairings. Here are all the ways to get between them ranked by price and experience.",
    content: `
<p>Istanbul and Tbilisi sit at opposite ends of a natural travel arc that takes you from European metropolis through the dramatic highlands of Anatolia and into the Caucasus. Getting between them is an adventure in itself — depending on which option you choose.</p>

<h2>Option 1: Fly (Cheapest and Fastest)</h2>
<p>Turkish Airlines, Georgian Airways, and Pegasus all fly Istanbul–Tbilisi. The route takes 2.5 hours and costs $50–150 return depending on timing (cheapest in November–March). This is the default option if time is limited.</p>

<h2>Option 2: Bus (Cheapest Overland)</h2>
<p>Direct buses run from Istanbul's Esenler coach station to Tbilisi's Station Square. Journey time: 22–24 hours. Cost: $35–50 one-way. Metro Turizm and Georgian bus companies both run this route. The bus crosses the Turkish-Georgian border at Sarpi/Vale on the Black Sea coast — a beautiful border crossing. Book at the coach station or through the bus company website.</p>

<h2>Option 3: Train + Bus Hybrid</h2>
<p>Istanbul to Ankara by train (4 hours, $10–15 on the high-speed Marmaray line), then Ankara to Kars by overnight train (12 hours, $15), then bus from Kars to the Georgian border (2 hours, $5), marshrutka to Batumi or Tbilisi ($5–10). Total: around $35–45, but takes 30+ hours and requires planning. The scenery across the Anatolian plateau is extraordinary if you're not in a rush.</p>

<h2>Option 4: Self-Drive</h2>
<p>Rent a car in Istanbul and drive — either via the Black Sea coast (the most scenic route, through Trabzon and Rize, with the forest-draped mountains of the Eastern Pontus) or the shorter central route. Check whether your rental contract allows crossing into Georgia (many do, some don't). Petrol, tolls, and the ferry across the Bosphorus add up but it's unbeatable for flexibility.</p>

<h2>Recommendation</h2>
<p>If you have time, take the bus — 24 hours is long but waking up to the Caucasus mountains appearing outside the window as you cross into Georgia is genuinely memorable. If time is tight, fly and use the money saved for an extra day in Tbilisi.</p>
    `.trim(),
  },
  {
    slug: "montenegro-kotor-budget",
    title: "Montenegro on $30/Day — Kotor Bay for Backpackers",
    category: "Destination Guides",
    date: "2024-07-15",
    readTime: 7,
    keywords: ["montenegro budget travel", "kotor cheap guide", "montenegro backpacker"],
    excerpt: "Montenegro has one of Europe's most dramatic coastlines and a medieval walled city that's still affordable. Here's how to do it without the Adriatic price tag.",
    content: `
<p>Montenegro is where the Adriatic meets the Alps — a country the size of Connecticut with more variety of landscape than most countries ten times its size. Kotor Bay is extraordinary, the mountains are wild, and it's significantly cheaper than Croatia next door.</p>

<h2>Kotor: The Medieval City</h2>
<p>Kotor's old city is a UNESCO-listed medieval settlement surrounded by walls that climb impossibly steep mountains behind the town. The walls are a 2–3 hour hike to the top fortress — one of the best walks in the Balkans, and the views over the bay are among Europe's finest. Entry to the walls: $8.</p>
<p>The old town itself is a maze of marble streets, Romanesque churches, and squares. Free to wander. The Cathedral of Saint Tryphon (12th century) charges $3 entry and is worth it.</p>

<h2>Getting There</h2>
<p>The easiest approaches: bus from Dubrovnik ($15, 2.5 hours), bus from Sarajevo ($20, 5 hours), or fly into Tivat airport (literally inside the bay — one of Europe's most dramatic landings). Ferries cross the bay from Lepetane to Kamenari ($2.50, 5 minutes) if you're coming from the Herceg Novi direction.</p>

<h2>Eating on a Budget</h2>
<p>Restaurants inside Kotor's old walls charge tourist prices — $10–15 for a main. Cross the walls to the local residential area or head to nearby Dobrota and Muo for family-run konobas (tavernas) where fresh fish is $6–8 and pizza is $4–5. The bread and olive oil here is exceptional.</p>

<h2>The Rest of Montenegro</h2>
<p><strong>Budva</strong>: The party capital — busy, loud, and significantly more expensive in summer. Worth a night for the old town. <strong>Durmitor National Park</strong>: Spectacular mountain scenery, ski resort in winter, hiking and rafting in summer. <strong>Lake Skadar</strong>: Shared with Albania, Europe's largest bird reserve and extremely cheap to explore by rowing boat ($5/hour).</p>

<h2>Daily Budget in Kotor</h2>
<ul>
<li>Accommodation: $15–18 (hostel dorm or private room outside walls)</li>
<li>Food: $10–12</li>
<li>Transport: $2</li>
<li>Activities: $5</li>
<li><strong>Total: $32–37/day</strong></li>
</ul>
    `.trim(),
  },
  {
    slug: "free-things-tbilisi-georgia",
    title: "15 Completely Free Things to Do in Tbilisi, Georgia",
    category: "Destination Guides",
    date: "2024-07-01",
    readTime: 5,
    keywords: ["free things tbilisi", "tbilisi free activities", "tbilisi budget tips"],
    excerpt: "Tbilisi is already cheap, but these 15 things cost absolutely nothing and are among the best experiences the city offers.",
    content: `
<p>Tbilisi's most rewarding experiences often happen on the street, in the old town, or overlooking the city from its many hills — and almost none of them cost money. Here are 15 genuinely free things to do.</p>

<h2>1. Walk Old Town (Kala)</h2>
<p>The old city between Mtkvari River and Narikala Fortress is a labyrinth of carved wooden balconies, crumbling churches, and hidden courtyards. No map required — just wander.</p>

<h2>2. Cross the Peace Bridge</h2>
<p>The glass and steel pedestrian bridge connecting old and new Tbilisi is one of the most distinctive pieces of contemporary architecture in the Caucasus. Free, dramatic views.</p>

<h2>3. Kartlis Deda (Mother Georgia)</h2>
<p>The 20-metre aluminium statue of a woman holding a sword and a bowl of wine — representing Georgian hospitality and defiance — overlooks the whole city from a hilltop. Free to visit, walk up via Narikala Park.</p>

<h2>4. Narikala Fortress</h2>
<p>The 4th-century fortress is partially ruined and fully atmospheric. The ruins are free to explore and the views over the sulphur bath district and river valley are excellent.</p>

<h2>5. Sulphur Bath District</h2>
<p>The Abanotubani district with its distinctive domed brick bathhouses is worth walking through even if you don't bathe. The domes and the steam rising from the earth make it feel like another world.</p>

<h2>6. Dry Bridge Market</h2>
<p>Tbilisi's best flea market happens on weekends under the Dry Bridge. Soviet-era memorabilia, antique cameras, hand-painted icons, old coins, and general beautiful junk. Free to browse.</p>

<h2>7. Metekhi Church View</h2>
<p>The cliff-edge Metekhi Church overlooking the river is one of the most photographed spots in Georgia. The view from the surrounding area is free; the church is also free to enter.</p>

<h2>8. Rike Park</h2>
<p>The park along the river bank across from Old Town is where Tbilisi residents walk, picnic, and play. The Peace Bridge connects directly to it. Free and lovely on a warm evening.</p>

<h2>9. Fabrika</h2>
<p>A former Soviet sewing factory converted into a creative hub — hostels, cafes, bars, and market stalls around a central courtyard. Free to enter and browse.</p>

<h2>10. The Funicular (Skip It — Walk Instead)</h2>
<p>The Mtatsminda funicular costs $3. The path up through the forest is free and takes 35 minutes. The view from the top is the same.</p>

<h2>11. National Gallery of Georgia</h2>
<p>Free on Sundays. The collection of Georgian artists from the 19th and 20th centuries, including Niko Pirosmani's extraordinary naive paintings, is among the best in the Caucasus.</p>

<h2>12. Legvtakhevi Waterfall</h2>
<p>A 20-metre waterfall hidden in a gorge in the middle of Old Town. Genuinely easy to miss, completely free, and remarkable that it exists inside a city.</p>

<h2>13. Tbilisi Open Air Museum</h2>
<p>Traditional houses relocated from across Georgia to a hillside outside the city. Architecture, crafts, and rural life from different Georgian regions. Free on some days — check before visiting.</p>

<h2>14. Vake Park</h2>
<p>Tbilisi's main park, with fountains, walking paths, and an outdoor gym. Free, used constantly by locals.</p>

<h2>15. Republic Square Fountains (Evening)</h2>
<p>Actually this is in Yerevan, Armenia — but if you've ended up confusing the two Caucasian capitals, that's understandable and both are worth visiting.</p>
    `.trim(),
  },
  {
    slug: "moldova-budget-travel-guide",
    title: "Moldova: Europe's Least Visited Country (And Why That Makes It Brilliant)",
    category: "Destination Guides",
    date: "2024-06-18",
    readTime: 7,
    keywords: ["moldova budget travel", "chisinau cheap guide", "moldova wine country"],
    excerpt: "Moldova is Europe's least visited country and one of its cheapest. Wine costs $2/bottle, guesthouses $10/night, and the cave monasteries are otherworldly.",
    content: `
<p>Moldova gets around 140,000 international tourists per year. For reference, Iceland gets 2 million. Moldova has a UNESCO wine region, Soviet-era monuments that are stranger than anything in the former bloc, cave monasteries carved from limestone cliffs, and some of the cheapest prices in Europe. The obscurity is genuinely baffling.</p>

<h2>Chișinău</h2>
<p>The capital is functional rather than beautiful — much was destroyed in WWII and rebuilt in Soviet style. But the city has a confident, resilient energy, excellent wine bars (bottles start at $2), and a market (Piața Centrală) that's one of the most colourful in the region. Budget $20–25/day comfortably here.</p>

<h2>Cricova & Milestii Mici: Underground Wine Cities</h2>
<p>Moldova's most extraordinary sights are underground. Milestii Mici is the world's largest wine cellar by volume — 200km of tunnels carved into limestone, navigated by car or bicycle, containing 1.5 million bottles. Tours from $10–15 including tastings. Cricova is smaller but has hosted state banquets in its tunnels for Yuri Gagarin, Vladimir Putin, and Angela Merkel.</p>

<h2>Orheiul Vechi</h2>
<p>The ancient Orthodox monastery complex at Orheiul Vechi is carved into limestone cliffs above a river bend — monks have lived in these caves since the 13th century. The landscape is extraordinary and almost nobody goes. Day trip by marshrutka from Chișinău ($2 each way) or by tour ($15).</p>

<h2>Transnistria</h2>
<p>The breakaway region that still uses Soviet-era symbols, currency (the Transnistrian ruble, not recognised anywhere else), and political system. Visiting is straightforward (EU passports need no visa), surreal, and completely safe. The main city Tiraspol has a working Lenin statue, Soviet-era architecture, and cheap beer. Cross from Chișinău by marshrutka ($2, 1.5 hours) — bring your passport.</p>

<h2>Daily Budget</h2>
<ul>
<li>Accommodation: $10–15</li>
<li>Food: $6–8</li>
<li>Transport: $3</li>
<li>Activities: $5–10</li>
<li><strong>Total: $24–36/day</strong></li>
</ul>
    `.trim(),
  },
  {
    slug: "best-budget-hostels-tbilisi",
    title: "Best Budget Hostels in Tbilisi Under $15/Night",
    category: "Accommodation",
    date: "2024-06-05",
    readTime: 5,
    keywords: ["best hostels tbilisi", "tbilisi cheap hostel", "where to stay tbilisi budget"],
    excerpt: "Tbilisi has some of the best-value hostels in Europe. Here are the ones consistently rated above 9.0 with dorms under $12.",
    content: `
<p>Tbilisi's hostel scene has matured dramatically — the city now has some of the most characterful and well-run budget accommodation in the region. Here are the consistently highest-rated options at the lowest prices.</p>

<h2>What to Expect</h2>
<p>Dorm beds in Tbilisi range from $6 to $15/night depending on season and quality. The $8–12 range gets you clean linen, lockers, strong WiFi, and usually a social atmosphere. The $6 end is functional but often in buildings that feel more Soviet than boutique.</p>

<h2>Old Town vs Vake vs Marjanishvili</h2>
<p><strong>Old Town</strong>: Best location for sightseeing — within walking distance of everything. Slightly noisier and attracts more tourists. <strong>Vake</strong>: Residential, quieter, more local feel. 15 minutes by metro from Old Town. <strong>Marjanishvili</strong>: Midpoint with good nightlife access and metro connection.</p>

<h2>What to Look For</h2>
<ul>
<li>Score above 8.5 on Hostelworld or Booking.com</li>
<li>Reviews mentioning helpful staff specifically (this means people who actually know the city)</li>
<li>Common area where guests mix (solo travellers note: this is how you find travel companions)</li>
<li>Rooftop or terrace (Tbilisi is a city best appreciated from above)</li>
<li>Free walking tours or recommendations (staff who do this genuinely care about guests)</li>
</ul>

<h2>Seasonal Pricing</h2>
<p>Tbilisi prices are lowest November–February ($6–8 for dorms) and highest May–September ($10–15). The sweet spots for both weather and price: March–April and October. Book 1–2 weeks ahead in summer, walk in during winter.</p>

<h2>Areas to Avoid</h2>
<p>Very cheap accommodation (under $6) in the Gldani or Saburtalo districts is usually far from sights and requires marshrutka knowledge to navigate. Unless you're an experienced Tbilisi visitor or on an extremely tight budget, spend the extra $2–4 for a well-located option.</p>

<h2>Guesthouse Alternative</h2>
<p>For the same price as a mid-range hostel, family-run guesthouses in the old city often offer a private room with breakfast for $15–20. These are frequently the best value accommodation in the city — ask at your hostel for recommendations or search Booking.com filtering for guesthouses.</p>
    `.trim(),
  },
  {
    slug: "how-to-travel-europe-by-bus-flixbus",
    title: "The Complete Flixbus Europe Guide: Routes, Tips, and What Nobody Tells You",
    category: "Budget Tips",
    date: "2024-05-22",
    readTime: 6,
    keywords: ["flixbus europe guide", "flixbus tips", "cheapest bus europe"],
    excerpt: "Flixbus changed European budget travel. Here's everything you need to know to use it well — including the tricks most people don't know.",
    content: `
<p>Flixbus has become one of the most significant developments in European budget travel since Ryanair. It's not perfect, but at its best it connects cities that were previously expensive or slow to reach for $5–20 a leg. Here's how to use it well.</p>

<h2>When Flixbus Is The Right Choice</h2>
<p>Flixbus wins against trains when: booking more than a few weeks ahead (prices are lowest then), travelling to destinations with weak rail links, going on routes where trains charge the full flexible fare. It loses to trains when: the journey is more than 8 hours, you value reliability (Flixbus delays are more common than rail), or you're travelling in Scandinavia (prices aren't as low there).</p>

<h2>The Booking Window Trick</h2>
<p>Flixbus prices are dynamic and increase as seats fill. The cheapest fares appear 4–8 weeks ahead of travel. For popular summer routes (Paris–Barcelona, Munich–Prague), book 6–8 weeks out. For off-season travel or less popular routes, 2–3 weeks is usually fine. Never buy at the station on the day — you'll pay 3–5x the advance price.</p>

<h2>What Nobody Tells You About Luggage</h2>
<p>One cabin bag (fits overhead) is included. One large bag goes in the hold — also included. A second large bag costs €2.99–4.99 if added at booking, or significantly more if added later. Add the second bag at booking if you need it — it's the biggest hidden cost for over-packers.</p>

<h2>Reliability: The Honest Truth</h2>
<p>Flixbus is less punctual than it used to be. Driver shortages and post-COVID growth have stretched the network. Budget an hour of buffer for connections. Don't book a Flixbus that arrives 30 minutes before a train or flight departure.</p>

<h2>Night Buses: The Accommodation Hack</h2>
<p>A Flixbus night journey costs $10–20 and eliminates a night's accommodation cost. The seats recline partially, the bus is usually quiet at night, and arriving somewhere at 6am gives you a full day. The experience isn't comfortable but the economics are hard to argue with. Bring a neck pillow and ear plugs.</p>

<h2>RegioJet: The Better Alternative in Central Europe</h2>
<p>For Czech Republic, Slovakia, Austria, Hungary, and connecting routes, RegioJet often has similar prices to Flixbus with significantly better comfort — free coffee, more legroom, and better punctuality. Check both when booking Central European routes.</p>
    `.trim(),
  },
  {
    slug: "jordan-petra-budget-guide",
    title: "Jordan on a Budget: How to See Petra Without Spending a Fortune",
    category: "Destination Guides",
    date: "2024-05-08",
    readTime: 8,
    keywords: ["jordan budget travel", "petra budget guide", "jordan cheap travel"],
    excerpt: "Jordan is more expensive than its neighbours but Petra is one of the world's must-see wonders. Here's how to do it properly for under $60/day.",
    content: `
<p>Jordan is the most expensive country in the Middle East for budget travellers — Petra entry alone costs $70 for a single day. But the country is extraordinary: Petra, Wadi Rum, the Dead Sea, and Aqaba are all spectacular, and the Jordanian people are among the most genuinely hospitable you'll encounter anywhere.</p>

<h2>The Jordan Pass: Non-Negotiable</h2>
<p>Buy the Jordan Pass before you arrive. It includes your visa ($56 for most nationalities) AND entry to 40+ attractions including Petra. The Petra Wanderer pass (2 days in Petra) costs $80 as part of the Jordan Pass — that's $80 for visa + 2 days at Petra, vs $56 visa + $70/day Petra separately. The Jordan Pass pays for itself the moment you visit Petra.</p>

<h2>Petra: More Than One Day</h2>
<p>The tourist circuit in Petra is 2–3 full days if you're serious about it. Day 1: The Siq, Treasury, Royal Tombs, Monastery (a brutal but essential 850-step climb). Day 2: Little Petra (Siq al-Barid), the back route to the High Place of Sacrifice, the Colonnaded Street. The site is vast and most visitors only see 20–30% of it. The Jordan Pass covers 2 days — use both.</p>

<h2>Getting Around Jordan Cheaply</h2>
<p>JETT buses connect Amman to Petra ($8, 3.5 hours), Amman to Aqaba ($12, 5 hours), and other major routes. For smaller routes, service taxis (shared taxis leaving when full) connect most towns for $2–5. Uber operates in Amman and is remarkably affordable ($3–6 across the city).</p>

<h2>Wadi Rum: The Desert Experience</h2>
<p>Wadi Rum is the red desert valley that Lawrence of Arabia called "vast, echoing and God-like." An overnight Bedouin camp in the desert costs $35–60/person including dinner, sleeping in a tent, and a jeep tour at sunrise. This is not something you can do cheaply and do well — the overnight camp experience is genuinely transformative and worth the cost.</p>

<h2>Food in Jordan</h2>
<p>Jordanian food is excellent and street food is affordable: falafel in pitta ($0.50), hummus ($1), shawarma ($2), kanafeh (the cheese dessert) ($1.50). Sit-down restaurants are pricier — $8–15 for a main. Amman has excellent middle-range options around Rainbow Street and Jabal Amman.</p>

<h2>Daily Budget (Excluding Accommodation)</h2>
<ul>
<li>Food: $10–15</li>
<li>Transport: $5–10</li>
<li>Activities: Covered by Jordan Pass or $10–15 for smaller sites</li>
<li><strong>Total (excl. accommodation): $25–40/day</strong></li>
<li>Budget accommodation: $15–25 (guesthouses in Wadi Musa near Petra, hostels in Amman)</li>
</ul>
    `.trim(),
  },
  {
    slug: "digital-nomad-budget-destinations-2025",
    title: "Best Budget Cities for Digital Nomads in 2025: Where to Work and Live Cheap",
    category: "Remote Work & Travel",
    date: "2024-04-25",
    readTime: 8,
    keywords: ["digital nomad budget cities 2025", "cheap cities remote work", "digital nomad eastern europe"],
    excerpt: "Working remotely means you can live anywhere. These 8 cities have fast internet, affordable cost of living, and a growing remote work community.",
    content: `
<p>Digital nomad life sounds appealing until you realise most "nomad cities" (Bali, Lisbon, Mexico City) have had their prices driven up by the nomad influx. These 8 cities remain genuinely affordable for remote workers in 2025.</p>

<h2>1. Tbilisi, Georgia — $800–1,200/month</h2>
<p>The undisputed champion of budget nomad destinations in 2024–2025. Georgians can travel visa-free for up to a year under the Foreigners Act. Fast fibre internet is available in every co-working space and most cafes. The tech and startup scene is growing. Wine is $2/bottle. It's almost too good.</p>

<h2>2. Plovdiv, Bulgaria — $900–1,300/month</h2>
<p>Less discovered than Sofia but with excellent infrastructure, a thriving arts scene, and the beautiful Old Town for working-from-cafe sessions. EU country, so banking and business are straightforward for EU citizens. Non-EU residents need a long-stay visa after 90 days.</p>

<h2>3. Chișinău, Moldova — $700–1,000/month</h2>
<p>The cheapest European capital city for cost of living. Moldova introduced a digital nomad visa in 2023 for stays up to 90 days. Internet speeds are among the fastest in Europe (legacy of the Soviet-era infrastructure investment). The city is improving rapidly.</p>

<h2>4. Kotor, Montenegro — $1,100–1,500/month</h2>
<p>More expensive than the others but the quality of life is extraordinary — medieval city by a bay surrounded by mountains. Montenegro is a candidate EU member and uses the euro. Digital nomad visa available for non-EU citizens.</p>

<h2>5. Sofia, Bulgaria — $1,000–1,400/month</h2>
<p>The Bulgarian capital has excellent co-working spaces, a strong developer community, and EU infrastructure at a fraction of EU prices. Average rent for a decent one-bedroom in a good neighbourhood: $400–600.</p>

<h2>6. Batumi, Georgia — $700–1,000/month</h2>
<p>Georgia's Black Sea resort city is cheaper than Tbilisi with a completely different vibe — beach, casinos, palm trees, and bizarre neo-brutalist architecture. Better for summer stays; the city empties somewhat in winter.</p>

<h2>7. Belgrade, Serbia — $1,000–1,400/month</h2>
<p>Serbia is not in the EU (an advantage for some, disadvantage for others) but has a large expat and nomad community, excellent nightlife, strong tech sector, and a 90-day visa-free stay for most nationalities. The nightlife also means: bring earplugs for anything near the Savamala district.</p>

<h2>8. Yerevan, Armenia — $900–1,300/month</h2>
<p>Armenia's capital has seen a surge of Russian tech workers since 2022, which has raised prices somewhat but also dramatically improved the quality of co-working spaces and cafes. Still excellent value. The free trade agreement with Russia and EU trade preferences make it interesting for certain business structures.</p>
    `.trim(),
  },
  {
    slug: "budget-travel-credit-cards-guide",
    title: "Best Credit Cards for Budget Travellers: Zero Foreign Transaction Fees",
    category: "Money & Banking",
    date: "2024-04-10",
    readTime: 6,
    keywords: ["travel credit cards no foreign fees", "best cards budget travel", "travel debit card international"],
    excerpt: "Foreign transaction fees and ATM charges silently drain travel budgets. These cards eliminate both — and some pay you back on top.",
    content: `
<p>Bank fees on international travel are a form of financial mugging that happens in slow motion. 3% foreign transaction fee + 2% ATM fee + poor exchange rate = you're paying 8–12% more than you should for every transaction. The fix is simple: get a card designed for travel.</p>

<h2>The Non-Negotiables</h2>
<p>Any card used for travel should have: zero foreign transaction fees, and no (or reimbursed) ATM withdrawal fees. Without these two things, the card is costing you money every time you use it abroad.</p>

<h2>Wise (formerly TransferWise) — Best Overall</h2>
<p>Not a credit card but a debit card / account that converts at the real mid-market exchange rate with minimal fees. ATM withdrawals: free for the first £200/month, 1.75% after. No foreign transaction fee. The Wise account also allows holding multiple currencies. Ideal for travellers who want one solution for all countries.</p>

<h2>Revolut — Best for Features</h2>
<p>Free plan: no-fee currency exchange up to £1,000/month (mid-market rate), then 0.5% above. ATM withdrawals free up to £200/month. Premium/Metal plans add higher limits, travel insurance, and cashback. The app is excellent — real-time notifications, instant freezing, virtual card numbers for online shopping.</p>

<h2>Charles Schwab Investor Checking — Best for Americans</h2>
<p>For US-based travellers, Schwab's checking account is the gold standard: unlimited ATM fee rebates worldwide, zero foreign transaction fees, and access to any ATM globally (it reimburses at the end of the month). The only requirement is opening a linked brokerage account (which can sit empty).</p>

<h2>Starling Bank — Best for UK Residents</h2>
<p>Starling's personal current account has zero foreign transaction fees and free ATM withdrawals worldwide (subject to daily limits). The card is contactless, works on Apple/Google Pay, and the app is genuinely excellent. Free to open.</p>

<h2>ATM Strategy</h2>
<p>Even with a good card, ATM strategy matters. Use ATMs attached to real banks (not standalone Euronet/Cardtronics machines in tourist areas — these use terrible exchange rates). Always choose to be charged in the local currency (never "dynamic currency conversion" — this adds 4–7%). Withdraw larger amounts less frequently rather than small amounts often (fixed fees stack up).</p>
    `.trim(),
  },
  {
    slug: "tbilisi-2025-digital-nomad-guide",
    title: "Tbilisi for Digital Nomads in 2025: The Complete Guide",
    category: "Remote Work & Travel",
    date: "2024-03-28",
    readTime: 9,
    keywords: ["tbilisi digital nomad", "tbilisi remote work", "georgia visa digital nomad"],
    excerpt: "Tbilisi has become the default digital nomad destination for European and Middle Eastern remote workers. Here's everything you need to know.",
    content: `
<p>Tbilisi's rise as a digital nomad hub wasn't planned. It happened because the combination of a year-long visa, fast internet, extraordinarily low cost of living, good food, and a welcoming culture created a perfect storm. By 2022–2023, the city had become one of the most popular places for remote workers globally. In 2025, it remains excellent value despite modest price increases.</p>

<h2>The Visa Situation</h2>
<p>Most nationalities (including EU, US, UK, Canada, Australia) can stay in Georgia for 365 days visa-free under the Foreigners Act. No bureaucracy, no visa application, just arrive and stay. This alone makes Georgia unique in the region. After 365 days, cross the border and re-enter for another year.</p>

<h2>Internet and Co-working</h2>
<p>Tbilisi has fast, reliable internet — fibre connections are widespread and speeds of 100Mbps+ are common in apartments and co-working spaces. The co-working scene has grown dramatically: Spaces, Aboratory, Impact Hub, and dozens of independent spaces offer day passes from $8 and monthly desks from $80–150.</p>
<p>Cafes are also very work-friendly — Georgian coffee culture is strong, and the unwritten rule of "order one thing and stay three hours" is widely respected.</p>

<h2>Neighbourhoods for Nomads</h2>
<p><strong>Vera</strong>: Leafy, quiet, close to Vake Park. Slightly pricier but excellent quality apartments. <strong>Saburtalo</strong>: The local residential district. Cheap, well-connected by metro, less atmospheric. <strong>Old Town (Kala)</strong>: Atmospheric but noisy, tourist-heavy, and more expensive per square metre. <strong>Chugureti / Marjanishvili</strong>: Increasingly popular, up-and-coming area with good cafes and reasonable rents.</p>

<h2>Realistic Monthly Cost of Living</h2>
<ul>
<li>Rent (1BR apartment, good neighbourhood): $400–650</li>
<li>Food (cooking + eating out mix): $200–350</li>
<li>Co-working: $80–150</li>
<li>Transport (Bolt + metro): $30–50</li>
<li>Utilities + internet: $50–80</li>
<li>Entertainment/social: $100–200</li>
<li><strong>Total: $860–1,480/month</strong></li>
</ul>

<h2>Healthcare</h2>
<p>Georgia's healthcare is functional but variable in quality. Private medical care is cheap — a GP visit is $15–25, specialist consultations $25–50. Make sure your health insurance covers international treatment (SafetyWing's Remote Health product is designed for nomads and costs around $80–100/month with comprehensive cover).</p>

<h2>Banking</h2>
<p>TBC Bank and Bank of Georgia both open accounts relatively easily for foreigners with a Georgian phone number and passport. Wise and Revolut work well in Georgia. Local ATMs charge small fees (under $1) per withdrawal.</p>
    `.trim(),
  },
  {
    slug: "bulgaria-plovdiv-guide-budget",
    title: "Plovdiv Budget Guide: Bulgaria's Most Romantic City",
    category: "Destination Guides",
    date: "2024-03-14",
    readTime: 6,
    keywords: ["plovdiv budget guide", "plovdiv cheap travel", "bulgaria plovdiv visit"],
    excerpt: "Plovdiv was European Capital of Culture in 2019. Three years later, it's still largely unknown outside Bulgaria and still extremely cheap.",
    content: `
<p>Plovdiv is one of Europe's oldest continuously inhabited cities — 8,000 years old, predating Rome, Athens, and Carthage. It sits on seven hills above the Maritsa River, with a Roman amphitheatre in the centre of a working modern city, and an Ottoman old town of extraordinary beauty above. And almost nobody outside Bulgaria knows it exists.</p>

<h2>The Old Town (Stariyat Grad)</h2>
<p>The Old Town climbs three of Plovdiv's seven hills and is one of the finest collections of Bulgarian National Revival architecture in the country — ornate wooden houses with overhanging upper floors, cobbled streets, and hidden courtyards. It's free to walk through. The Roman Amphitheatre (2nd century AD) is embedded in the hillside below and hosts performances — check if there's a concert on during your visit.</p>

<h2>The Kapana Arts District</h2>
<p>Kapana ("The Trap") is Plovdiv's creative quarter — narrow medieval streets transformed into a district of independent cafes, galleries, boutiques, and restaurants. It's where Plovdiv's young and creative population goes. Coffee here is excellent and very cheap ($0.80–1.20 for an espresso).</p>

<h2>What to Eat</h2>
<p>Plovdiv is the gastronomic capital of Bulgaria. The regional specialty is <em>kavarma</em> (slow-cooked meat stew with vegetables, $4–5). Try also <em>tarator</em> (cold cucumber soup with yoghurt, $1.50) and <em>banitsa</em> (filo pastry with cheese, $0.60–1.00).</p>
<p>The central market area has food stalls where a full lunch costs $2–3. Restaurant meals in the Old Town are $5–10 for a main.</p>

<h2>Day Trip: Bachkovo Monastery</h2>
<p>One of Bulgaria's most important monasteries, founded in 1083, sits in a gorge 29km south of Plovdiv. Bus from Plovdiv's main bus station (every 30 minutes, $1). The monastery and the short hike through the gorge are free. Return by 4pm — buses thin out in the afternoon.</p>

<h2>Getting There</h2>
<p>Train from Sofia: 2 hours, $4. Bus: slightly faster, similar price. From Sofia it's an easy day trip but Plovdiv deserves 2 nights.</p>

<h2>Daily Budget</h2>
<ul>
<li>Accommodation: $12–18 (guesthouses or Airbnb rooms in Old Town area)</li>
<li>Food: $8–10</li>
<li>Transport: $2</li>
<li>Activities: Free–$5</li>
<li><strong>Total: $22–35/day</strong></li>
</ul>
    `.trim(),
  },
  {
    slug: "budget-travel-tips-solo-female",
    title: "Solo Female Budget Travel: Safety, Strategy, and Saving Money",
    category: "Solo Travel",
    date: "2024-02-28",
    readTime: 8,
    keywords: ["solo female budget travel", "female backpacking tips", "safe budget travel women"],
    excerpt: "Solo female travel on a budget requires a slightly different approach to safety, accommodation, and planning. Here's the practical guide.",
    content: `
<p>Solo female travel is one of the most rewarding ways to see the world — the level of openness and the conversations you have when travelling alone are different from anything that happens in a pair or group. It also requires a slightly different set of practical considerations, particularly when travelling on a budget.</p>

<h2>Accommodation Strategy</h2>
<p>Female-only dorms are your best friend for budget accommodation. They're quieter, safer, and often cheaper than mixed dorms at the same hostel. They're also where you'll meet other solo female travellers — the best source of real-time travel advice for female-specific concerns in a destination.</p>
<p>Research your hostel's social atmosphere before booking. Hostels with active common areas and staff-led events are safer — there are more eyes, more people around, and a more community-focused culture.</p>

<h2>Destinations That Are Particularly Good</h2>
<p><strong>Georgia</strong>: Georgian society has a strong culture of hospitality and protecting guests. Solo female travellers consistently rate it among the safest destinations in the region. Tbilisi at night feels safer than many Western European cities. <strong>Bulgaria, Serbia, Macedonia</strong>: Generally safe with normal city precautions. <strong>Armenia</strong>: Very safe; the culture is conservative but respectful toward foreign women.</p>

<h2>Cheaper Because You're Lighter</h2>
<p>Many budget strategies that don't work for groups work better for solo female travellers. Staying with a local family (via Couchsurfing or a family guesthouse) is often safer and cheaper than a hostel — hosts in conservative cultures often prefer single women to groups of men. Accepting invitations to family meals (very common in the Caucasus) is a safety-positive experience as well as a budget one.</p>

<h2>Transport Safety on a Budget</h2>
<p>Night buses are generally safe (you're in a public vehicle) but choose reputable companies and tell someone your route. Marshrutkas (shared minibuses) are used by local women constantly and are very safe — the social pressure of other passengers makes bad behaviour extremely rare. Taxis: use Bolt, Yandex, or local app-based services exclusively (not unlicensed cabs).</p>

<h2>The Network Advantage</h2>
<p>Solo female travellers are better at building local networks than almost any other type of traveller. Hostel common rooms, women-specific Facebook travel groups, and apps like Tourlina (female travel companion matching) connect you with other solo women in the same city. This network is both a safety resource and a shared cost resource — splitting transport, meals, and excursions with a travel companion you've just met reduces per-person costs significantly.</p>
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));
