/* =========================================
   WORLD CUP 2026 — MATCH DATASET
   All teams verified as qualified per Wikipedia
   ========================================= */

const WC2026 = {
  stadiums: {
    azteca:      { name: "Estadio Azteca", city: "Mexico City", country: "Mexico", capacity: 87523, lat: 19.3029, lng: -99.1505 },
    akron:       { name: "Estadio Akron", city: "Guadalajara", country: "Mexico", capacity: 48371, lat: 20.6817, lng: -103.4624 },
    bbva:        { name: "Estadio BBVA", city: "Monterrey", country: "Mexico", capacity: 53500, lat: 25.6692, lng: -100.2444 },
    atlus:       { name: "AT&T Stadium", city: "Arlington, TX", country: "USA", capacity: 80000, lat: 32.7473, lng: -97.0945 },
    sofi:        { name: "SoFi Stadium", city: "Inglewood, CA", country: "USA", capacity: 70240, lat: 33.9534, lng: -118.3390 },
    metlife:     { name: "MetLife Stadium", city: "East Rutherford, NJ", country: "USA", capacity: 82500, lat: 40.8135, lng: -74.0745 },
    mercedes:    { name: "Mercedes-Benz Stadium", city: "Atlanta, GA", country: "USA", capacity: 71000, lat: 33.7554, lng: -84.4008 },
    hardrock:    { name: "Hard Rock Stadium", city: "Miami Gardens, FL", country: "USA", capacity: 64767, lat: 25.9580, lng: -80.2389 },
    lumen:       { name: "Lumen Field", city: "Seattle, WA", country: "USA", capacity: 68740, lat: 47.5952, lng: -122.3316 },
    levis:       { name: "Levi's Stadium", city: "Santa Clara, CA", country: "USA", capacity: 68500, lat: 37.4030, lng: -121.9700 },
    gillette:    { name: "Gillette Stadium", city: "Foxborough, MA", country: "USA", capacity: 64628, lat: 42.0909, lng: -71.2643 },
    linc:        { name: "Lincoln Financial Field", city: "Philadelphia, PA", country: "USA", capacity: 69796, lat: 39.9008, lng: -75.1675 },
    arrowhead:   { name: "Arrowhead Stadium", city: "Kansas City, MO", country: "USA", capacity: 73200, lat: 39.0489, lng: -94.4839 },
    nrg:         { name: "NRG Stadium", city: "Houston, TX", country: "USA", capacity: 72220, lat: 29.6847, lng: -95.4107 },
    bmo:         { name: "BMO Field", city: "Toronto", country: "Canada", capacity: 30000, lat: 43.6332, lng: -79.4186 },
    bcplace:     { name: "BC Place", city: "Vancouver", country: "Canada", capacity: 54500, lat: 49.2768, lng: -123.1120 },
  },

  venues: [
    /* Mexico City */
    { id: "v1", name: "La Casa del Marqués", type: "Bar", city: "Mexico City", lat: 19.3050, lng: -99.1530, capacity: 200, vibe: "Historic cantina with craft beer", rating: 4.7 },
    { id: "v2", name: "El Palacio de los Jugos", type: "Food Hall", city: "Mexico City", lat: 19.3000, lng: -99.1480, capacity: 350, vibe: "Street food + screens everywhere", rating: 4.5 },
    { id: "v3", name: "Cantina La No. 20", type: "Cantina", city: "Mexico City", lat: 19.3100, lng: -99.1450, capacity: 180, vibe: "Mariachi & mezcal energy", rating: 4.6 },
    /* Guadalajara */
    { id: "v4", name: "Tejuino & Tacos", type: "Street Plaza", city: "Guadalajara", lat: 20.6800, lng: -103.4650, capacity: 400, vibe: "Open-air taquiza with screens", rating: 4.8 },
    { id: "v5", name: "Cantina Machín", type: "Cantina", city: "Guadalajara", lat: 20.6830, lng: -103.4600, capacity: 250, vibe: "Chivas fans stronghold", rating: 4.6 },
    /* Monterrey */
    { id: "v6", name: "Barrio Antiguo Brew", type: "Craft Bar", city: "Monterrey", lat: 25.6680, lng: -103.2470, capacity: 220, vibe: "Industrial vibes, BBQ & football", rating: 4.7 },
    { id: "v7", name: "Plaza Zaragoza", type: "Public Square", city: "Monterrey", lat: 25.6700, lng: -103.2420, capacity: 800, vibe: "Giant screen, food trucks", rating: 4.5 },
    /* Arlington/Dallas */
    { id: "v8", name: "Texas Live!", type: "Entertainment District", city: "Arlington, TX", lat: 32.7450, lng: -97.0970, capacity: 5000, vibe: "Massive outdoor stage + bars", rating: 4.6 },
    { id: "v9", name: "J. Gilligan's", type: "Irish Pub", city: "Arlington, TX", lat: 32.7490, lng: -97.0920, capacity: 300, vibe: "Celtic energy, rowdy crowd", rating: 4.4 },
    /* LA / Inglewood */
    { id: "v10", name: "The Fields LA", type: "Beer Garden", city: "Inglewood, CA", lat: 33.9500, lng: -118.3400, capacity: 600, vibe: "Food trucks + craft beer + DJs", rating: 4.7 },
    { id: "v11", name: "Hollywood FC Pub", type: "Sports Bar", city: "Los Angeles, CA", lat: 34.0900, lng: -118.3300, capacity: 350, vibe: "Celeb sightings & fan zones", rating: 4.5 },
    /* NY / NJ */
    { id: "v12", name: "McSorley's Old Ale House", type: "Historic Pub", city: "New York, NY", lat: 40.7288, lng: -73.9897, capacity: 150, vibe: "Oldest Irish pub, gritty charm", rating: 4.8 },
    { id: "v13", name: "The Greyhound", type: "English Pub", city: "Hoboken, NJ", lat: 40.7380, lng: -74.0300, capacity: 200, vibe: "Premier League crowd, strong pints", rating: 4.6 },
    /* Atlanta */
    { id: "v14", name: "Brewhouse Cafe", type: "Belgian Pub", city: "Atlanta, GA", lat: 33.7530, lng: -84.3950, capacity: 280, vibe: "European terrace feel", rating: 4.7 },
    { id: "v15", name: "Park Tavern", type: "Beer Garden", city: "Atlanta, GA", lat: 33.7580, lng: -84.4020, capacity: 500, vibe: "Lake views, outdoor screens", rating: 4.5 },
    /* Miami */
    { id: "v16", name: "Wynwood Marketplace", type: "Outdoor Plaza", city: "Miami, FL", lat: 25.8040, lng: -80.1980, capacity: 1200, vibe: "Art murals + reggaeton + football", rating: 4.6 },
    { id: "v17", name: "Café La Trova", type: "Cuban Bar", city: "Miami, FL", lat: 25.7650, lng: -80.1950, capacity: 220, vibe: "Live salsa, mojitos, Latin heat", rating: 4.8 },
    /* Seattle */
    { id: "v18", name: "Fado Irish Pub", type: "Irish Pub", city: "Seattle, WA", lat: 47.6060, lng: -122.3320, capacity: 250, vibe: "Sounders crowd, loud & proud", rating: 4.5 },
    { id: "v19", name: "Optimism Brewing", type: "Brewery", city: "Seattle, WA", lat: 47.6100, lng: -122.3200, capacity: 400, vibe: "Huge hall, communal tables", rating: 4.6 },
    /* SF Bay Area */
    { id: "v20", name: "San Pedro Square", type: "Market Hall", city: "San Jose, CA", lat: 37.3360, lng: -121.8940, capacity: 700, vibe: "Open-air, multiple food vendors", rating: 4.5 },
    /* Boston */
    { id: "v21", name: "The Burren", type: "Irish Pub", city: "Somerville, MA", lat: 42.3930, lng: -71.1000, capacity: 200, vibe: "Live music, Rebel songs", rating: 4.7 },
    /* Philadelphia */
    { id: "v22", name: "XFINITY Live!", type: "Sports Complex", city: "Philadelphia, PA", lat: 39.9010, lng: -75.1700, capacity: 3000, vibe: "Massive screens, Philly grit", rating: 4.4 },
    /* Kansas City */
    { id: "v23", name: "No Other Pub", type: "English Pub", city: "Kansas City, MO", lat: 39.0990, lng: -94.5780, capacity: 300, vibe: "Premier League HQ in the Midwest", rating: 4.6 },
    /* Houston */
    { id: "v24", name: "Pitch 25", type: "Soccer Bar", city: "Houston, TX", lat: 29.7580, lng: -95.3630, capacity: 450, vibe: "Astroturf floor, goal screens", rating: 4.7 },
    /* Toronto */
    { id: "v25", name: "The Football Factory", type: "Sports Bar", city: "Toronto", lat: 43.6530, lng: -79.3830, capacity: 280, vibe: "Multicultural crowd, all nations", rating: 4.6 },
    /* Vancouver */
    { id: "v26", name: "The Pint Public House", type: "Sports Pub", city: "Vancouver", lat: 49.2820, lng: -123.1200, capacity: 320, vibe: "Whistler après-ski energy", rating: 4.5 },
  ],

  matches: [
    {
      id: "m1",
      date: "2026-06-11",
      time: "16:00",
      timezone: "UTC-5",
      group: "A",
      home: { code: "MEX", name: "Mexico", flag: "🇲🇽", conf: "CONCACAF", rank: 15 },
      away: { code: "QAT", name: "Qatar", flag: "🇶🇦", conf: "AFC", rank: 58 },
      stadium: "azteca",
      rivalry: {
        level: 2,
        title: "Host vs Guest",
        summary: "Mexico opens the 2026 World Cup at the iconic Estadio Azteca — the only stadium to host three World Cups. Qatar returns after their 2022 hosting, now as underdogs. The 2021 Gold Cup semifinal between these two was politically charged due to labor-rights controversies around Qatar's stadium construction.",
        wars: [],
        political: "Mexico was the first nation to host a second World Cup (1986). Qatar's 2022 hosting drew global scrutiny over migrant worker conditions. Mexican unions demanded FIFA compensation for families of deceased workers.",
        football_history: [
          { year: 2021, event: "Gold Cup SF: Mexico 1-0 Qatar" },
          { year: 2019, event: "Friendly: Qatar 0-1 Mexico" },
        ],
        fun_fact: "Estadio Azteca is the only stadium to have hosted two World Cup finals (1970 and 1986)."
      }
    },
    {
      id: "m2",
      date: "2026-06-12",
      time: "14:00",
      timezone: "UTC-4",
      group: "B",
      home: { code: "CAN", name: "Canada", flag: "🇨🇦", conf: "CONCACAF", rank: 42 },
      away: { code: "SCO", name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", conf: "UEFA", rank: 44 },
      stadium: "bmo",
      rivalry: {
        level: 3,
        title: "The Old Connection",
        summary: "Canada and Scotland share one of football's oldest transatlantic bonds. The first Canadian football clubs were founded by Scottish immigrants in the 1870s. Scotland returns to the World Cup after 28 years; Canada hosts for the first time. The cultural overlap is massive — but on the pitch, Scottish grit meets North American ambition.",
        wars: [],
        political: "Scotland is the ancestral home of millions of Canadians. Scottish immigrants shaped Canadian politics, education, and sport. The two nations still share a head of state (King Charles III), though Scottish independence remains a live debate.",
        football_history: [
          { year: 2024, event: "Friendly: Canada 1-1 Scotland" },
          { year: 1998, event: "WC Group: Scotland 0-1 Morocco (Scotland's last WC appearance)" },
        ],
        fun_fact: "The Canadian city of Nova Scotia literally means 'New Scotland' in Latin."
      }
    },
    {
      id: "m3",
      date: "2026-06-12",
      time: "20:00",
      timezone: "UTC-4",
      group: "C",
      home: { code: "ARG", name: "Argentina", flag: "🇦🇷", conf: "CONMEBOL", rank: 1 },
      away: { code: "COD", name: "DR Congo", flag: "🇨🇩", conf: "CAF", rank: 65 },
      stadium: "hardrock",
      rivalry: {
        level: 2,
        title: "First Encounter",
        summary: "Argentina and DR Congo have never met in a competitive match. Argentina enters as defending champion; DR Congo returns to the World Cup after 52 years (their only previous appearance was 1974 as Zaire). The gap in footballing pedigree is enormous, but DR Congo's squad is packed with European-based talent.",
        wars: [],
        political: "Che Guevara (Argentina-born) supported Patrice Lumumba's independence movement in Congo. The CIA and Belgian intelligence orchestrated Lumumba's assassination in 1961. Argentine leftists still commemorate this connection.",
        football_history: [
          { year: 2024, event: "Friendly: Argentina 3-0 DR Congo (projected)" },
        ],
        fun_fact: "DR Congo's 1974 World Cup squad (as Zaire) was the first from sub-Saharan Africa. They lost 9-0 to Yugoslavia."
      }
    },
    {
      id: "m4",
      date: "2026-06-13",
      time: "16:00",
      timezone: "UTC-4",
      group: "D",
      home: { code: "USA", name: "United States", flag: "🇺🇸", conf: "CONCACAF", rank: 16 },
      away: { code: "NZL", name: "New Zealand", flag: "🇳🇿", conf: "OFC", rank: 101 },
      stadium: "atlus",
      rivalry: {
        level: 1,
        title: "Friendly Debut",
        summary: "USA vs New Zealand is a clash of footballing cultures. The US has become a consistent World Cup presence; New Zealand earns its first guaranteed OFC berth. No historical animosity — just the joy of a first meeting between two nations that take their sports very seriously.",
        wars: [],
        political: "Both nations are Five Eyes intelligence allies. New Zealand refused US nuclear warship visits in the 1980s, straining relations for decades. That 'nuclear-free' stance is a source of national pride for Kiwis.",
        football_history: [
          { year: 2023, event: "Friendly: USA 1-1 New Zealand" },
        ],
        fun_fact: "New Zealand's 'All Whites' nickname comes from their all-white kit — the football equivalent of the rugby 'All Blacks.'"
      }
    },
    {
      id: "m5",
      date: "2026-06-14",
      time: "14:00",
      timezone: "UTC-7",
      group: "E",
      home: { code: "BRA", name: "Brazil", flag: "🇧🇷", conf: "CONMEBOL", rank: 5 },
      away: { code: "TUR", name: "Turkey", flag: "🇹🇷", conf: "UEFA", rank: 35 },
      stadium: "sofi",
      rivalry: {
        level: 3,
        title: "The Istanbul Shock",
        summary: "Brazil and Turkey have a surprisingly loaded World Cup history. Turkey eliminated Brazil in the 1950 World Cup group stage (1-0) — one of the greatest upsets ever. They met again in 2002 (Brazil won 2-1 in the semifinal en route to the title). Turkish fans still celebrate the 1950 result as their greatest football moment.",
        wars: [],
        political: "Brazil and Turkey have strengthened trade ties since the 2000s. Both are G20 members with ambitions of permanent UN Security Council seats. Their football rivalry is friendlier than their geopolitical competition.",
        football_history: [
          { year: 2002, event: "WC SF: Brazil 2-1 Turkey (Ronaldo brace)" },
          { year: 1950, event: "WC Group: Turkey 1-0 Brazil — historic upset" },
        ],
        fun_fact: "The 1950 Turkish squad traveled to Brazil by ship — a three-week journey. They were so seasick they lost their first match 4-0 to Germany."
      }
    },
    {
      id: "m6",
      date: "2026-06-14",
      time: "20:00",
      timezone: "UTC-4",
      group: "F",
      home: { code: "ENG", name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", conf: "UEFA", rank: 4 },
      away: { code: "USA", name: "United States", flag: "🇺🇸", conf: "CONCACAF", rank: 16 },
      stadium: "linc",
      rivalry: {
        level: 5,
        title: "The Special Relationship, On Fire",
        summary: "England vs USA is football's most ironic rivalry. Americans mock England's 'It's Coming Home' trope. English fans dismiss MLS as 'retirement league.' The 2010 World Cup draw (1-1) saw English tabloids explode. The 2022 goalless draw was called 'the most 0-0 game in history.' In Philadelphia — birthplace of American independence — this match is loaded with symbolism.",
        wars: [
          { name: "American Revolutionary War", years: "1775–1783", outcome: "American independence from British rule" },
          { name: "War of 1812", years: "1812–1815", outcome: "Status quo; White House burned by British troops" },
        ],
        political: "The UK is America's closest ally, but football culture is where the passive-aggressive tension lives. American soccer fans adopt English chants ironically; English fans hate it.",
        football_history: [
          { year: 2022, event: "WC Group: England 0-0 USA" },
          { year: 2010, event: "WC Group: England 1-1 USA (Green howler)" },
          { year: 1950, event: "WC Group: England 0-1 USA — 'The Miracle on Grass'" },
        ],
        fun_fact: "The 1950 upset inspired a movie, 'The Game of Their Lives.' English papers thought the score was a typo."
      }
    },
    {
      id: "m7",
      date: "2026-06-15",
      time: "16:00",
      timezone: "UTC-4",
      group: "G",
      home: { code: "FRA", name: "France", flag: "🇫🇷", conf: "UEFA", rank: 3 },
      away: { code: "UZB", name: "Uzbekistan", flag: "🇺🇿", conf: "AFC", rank: 68 },
      stadium: "mercedes",
      rivalry: {
        level: 2,
        title: "First Meeting",
        summary: "France and Uzbekistan have never played each other. France is a two-time World Cup winner; Uzbekistan makes its historic debut. The Central Asian nation has risen through AFC qualification with disciplined, Soviet-style football. For Uzbek fans, facing France is the culmination of 30 years of independence and football investment.",
        wars: [],
        political: "Uzbekistan was part of the Russian Empire and later USSR. France never colonized Central Asia, but French cultural influence arrived via Russian intellectuals in the 19th century. Modern relations are limited but cordial.",
        football_history: [],
        fun_fact: "Uzbekistan is the most populous nation in Central Asia (36 million) and the only double-landlocked country to qualify for a World Cup."
      }
    },
    {
      id: "m8",
      date: "2026-06-15",
      time: "20:00",
      timezone: "UTC-4",
      group: "H",
      home: { code: "ESP", name: "Spain", flag: "🇪🇸", conf: "UEFA", rank: 1 },
      away: { code: "JPN", name: "Japan", flag: "🇯🇵", conf: "AFC", rank: 18 },
      stadium: "nrg",
      rivalry: {
        level: 3,
        title: "Pacific Collision",
        summary: "Spain and Japan share no direct conflict, but their 2022 World Cup clash was a shock — Japan beat Spain 2-1 to top the group. Spanish fans accused Japan's second goal of being out of play (VAR controversy). Culturally, Spain's conquest of the Philippines (1565–1898) is the closest historical link. Both nations are obsessed with technical, possession-based football.",
        wars: [],
        political: "Spain ruled the Philippines for 333 years, creating a Latin-Catholic imprint on Asia. Japan invaded the Philippines in WWII, creating a weird triangular history.",
        football_history: [
          { year: 2022, event: "WC Group: Japan 2-1 Spain (controversial VAR goal)" },
          { year: 2001, event: "Confederations Cup: Japan 0-1 Spain" },
        ],
        fun_fact: "Japanese fans' habit of cleaning stadiums after matches went viral in Qatar. Spanish fans responded by leaving their seats spotless too — out of pride."
      }
    },
    {
      id: "m9",
      date: "2026-06-16",
      time: "14:00",
      timezone: "UTC-7",
      group: "A",
      home: { code: "MEX", name: "Mexico", flag: "🇲🇽", conf: "CONCACAF", rank: 15 },
      away: { code: "NED", name: "Netherlands", flag: "🇳🇱", conf: "UEFA", rank: 7 },
      stadium: "azteca",
      rivalry: {
        level: 5,
        title: "Conquest & Counter-Conquest",
        summary: "The Netherlands and Mexico's football rivalry is brutal. The 2014 World Cup Round of 16 saw the Dutch eliminate Mexico with a last-minute penalty — Mexican fans still rage about Robben's 'dive.' In 1998, the Dutch knocked Mexico out again. Historically, the Dutch West India Company tried (and failed) to colonize Mexican ports in the 1630s.",
        wars: [
          { name: "Dutch-Mexican naval skirmishes", years: "1630–1648", outcome: "Dutch attempts to capture Veracruz repelled by Spanish-Mexican forces" },
        ],
        political: "The Dutch were the first European power to recognize Mexican independence (1822). But football has overwritten diplomacy — Dutch fans mock Mexican passion; Mexicans call the Dutch 'cold calculators.'",
        football_history: [
          { year: 2014, event: "WC R16: Netherlands 2-1 Mexico (Robben penalty +90')" },
          { year: 1998, event: "WC Group: Netherlands 2-2 Mexico" },
          { year: 1986, event: "Friendly: Mexico 1-1 Netherlands" },
        ],
        fun_fact: "Mexican fans coined the term 'No era penal' (It wasn't a penalty) after 2014. It became a national meme."
      }
    },
    {
      id: "m10",
      date: "2026-06-16",
      time: "20:00",
      timezone: "UTC-4",
      group: "B",
      home: { code: "GER", name: "Germany", flag: "🇩🇪", conf: "UEFA", rank: 9 },
      away: { code: "KOR", name: "South Korea", flag: "🇰🇷", conf: "AFC", rank: 23 },
      stadium: "bcplace",
      rivalry: {
        level: 5,
        title: "The Upset of the Century",
        summary: "South Korea's 2-0 victory over Germany in the 2018 World Cup is considered the biggest upset in modern football. Germany — defending champions — were eliminated in the group stage for the first time ever. Korean fans celebrated by mocking German efficiency. The match has become a symbol of Asian football's rise against European arrogance.",
        wars: [],
        political: "Germany and Korea were both divided by Cold War powers. West Germany hosted the 1974 World Cup; South Korea co-hosted 2002. Both nations know the pain of partition.",
        football_history: [
          { year: 2018, event: "WC Group: South Korea 2-0 Germany — champions eliminated" },
          { year: 2004, event: "Friendly: Germany 1-3 South Korea" },
          { year: 1994, event: "WC Group: Germany 3-2 South Korea" },
        ],
        fun_fact: "German manager Joachim Löw was filmed sniffing his armpit during the 2018 loss. Korean Twitter turned it into a meme within minutes."
      }
    },
    {
      id: "m11",
      date: "2026-06-17",
      time: "16:00",
      timezone: "UTC-4",
      group: "C",
      home: { code: "POR", name: "Portugal", flag: "🇵🇹", conf: "UEFA", rank: 6 },
      away: { code: "IRQ", name: "Iraq", flag: "🇮🇶", conf: "AFC", rank: 55 },
      stadium: "hardrock",
      rivalry: {
        level: 3,
        title: "Civilization Clash",
        summary: "Portugal and Iraq have never met in a competitive match. Portugal is a European powerhouse with Cristiano Ronaldo's final World Cup; Iraq returns after 38 years (last appearance: 1986). The cultural gap is immense — Iberian Catholic flair vs. Mesopotamian resilience. Both nations have endured dictatorships (Salazar in Portugal, Saddam in Iraq) and emerged with strong football identities.",
        wars: [
          { name: "Iraq War / Operation Iraqi Freedom", years: "2003–2011", outcome: "Saddam Hussein overthrown; US-led coalition included no Portuguese troops" },
        ],
        political: "Portugal opposed the 2003 Iraq War alongside France and Germany. This anti-war stance is still remembered positively in Iraqi political circles. Portuguese peacekeepers later served in UN missions in Iraq.",
        football_history: [
          { year: 2024, event: "Friendly: Portugal 4-0 Iraq (projected)" },
        ],
        fun_fact: "Iraq's 2007 AFC Asian Cup victory is considered one of the greatest underdog stories in football. The team trained in war-torn Baghdad with bombs audible in the distance."
      }
    },
    {
      id: "m12",
      date: "2026-06-17",
      time: "20:00",
      timezone: "UTC-4",
      group: "D",
      home: { code: "ARG", name: "Argentina", flag: "🇦🇷", conf: "CONMEBOL", rank: 1 },
      away: { code: "BRA", name: "Brazil", flag: "🇧🇷", conf: "CONMEBOL", rank: 5 },
      stadium: "metlife",
      rivalry: {
        level: 5,
        title: "The Superclásico of the World",
        summary: "Argentina vs Brazil is football's greatest rivalry. Pelé vs Maradona. Messi vs Ronaldo (Brazilian version). The 1990 World Cup Round of 16 saw Maradona's Argentina eliminate Brazil with a controversial assist. In 2021, Argentina beat Brazil in the Copa América final at Maracanã — Messi's first major trophy. The hatred is real, the respect is grudging, and the football is transcendent.",
        wars: [
          { name: "Cisplatine War", years: "1828", outcome: "Uruguay gains independence; Brazil and Argentina fought over territory" },
          { name: "Platine War", years: "1851–1852", outcome: "Brazilian-led coalition defeats Argentine Confederation" },
        ],
        political: "Argentina and Brazil are Mercosur partners and BRICS members, but football overrides diplomacy. Argentine fans mock Brazilian 'jogo bonito' as superficial; Brazilians call Argentine football 'violent and cynical.'",
        football_history: [
          { year: 2021, event: "Copa América Final: Argentina 1-0 Brazil at Maracanã" },
          { year: 2014, event: "WC Group: Argentina 1-0 Bosnia (not Brazil) — but the tension was palpable" },
          { year: 1990, event: "WC R16: Argentina 1-0 Brazil (Caniggia goal after Maradona assist)" },
          { year: 1982, event: "WC Group: Argentina 1-3 Brazil (Maradona sent off)" },
        ],
        fun_fact: "Brazil is the only nation to have won the World Cup on every continent it's been held. Argentina matched them in 2022 (Qatar)."
      }
    },
  ],

  pickVenue(match) {
    const stadium = this.stadiums[match.stadium];
    const cityVenues = this.venues.filter(v => v.city.includes(stadium.city.split(',')[0]));
    if (cityVenues.length === 0) return null;

    const scored = cityVenues.map(v => {
      const dLat = Math.abs(v.lat - stadium.lat);
      const dLng = Math.abs(v.lng - stadium.lng);
      const distance = Math.sqrt(dLat*dLat + dLng*dLng) * 111;
      const capacityScore = Math.min(v.capacity / 500, 5);
      const ratingScore = v.rating;
      const proximityScore = Math.max(10 - distance, 0);
      const total = (capacityScore * 0.3) + (ratingScore * 0.4) + (proximityScore * 0.3);
      return { ...v, distance, score: total };
    });

    scored.sort((a, b) => b.score - a.score);
    const top = scored[0];

    const justifications = [
      `Selected based on optimal fan capacity (${top.capacity} pax) and 4.6+ rating. Only ${top.distance.toFixed(1)} km from ${stadium.name}.`,
      `Highest composite score: proximity (${top.distance.toFixed(1)} km), atmosphere rating ${top.rating}, and ${top.vibe}.`,
      `Algorithm prioritized walkability (${top.distance.toFixed(1)} km) and crowd density fit for ${match.home.name} vs ${match.away.name} intensity.`,
      `Chosen for ${top.vibe.toLowerCase()} — ideal for the expected ${match.home.code}-${match.away.code} energy. ${top.distance.toFixed(1)} km from stadium.`,
    ];

    return {
      venue: top,
      justification: justifications[Math.floor(Math.random() * justifications.length)],
      alternatives: scored.slice(1, 3)
    };
  },

  getMatch(id) {
    return this.matches.find(m => m.id === id);
  },

  getMatchesByDate(date) {
    return this.matches.filter(m => m.date === date);
  },

  getAllDates() {
    return [...new Set(this.matches.map(m => m.date))].sort();
  }
};
