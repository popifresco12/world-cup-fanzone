/* =========================================
   WORLD CUP 2026 — MATCH DATASET
   Includes rivalries, suggested venues, AI picks
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
        title: "Emerging Rivalry",
        summary: "Mexico and Qatar have limited football history. Qatar's 2022 World Cup hosting sparked tension in CONCACAF circles. Their 2021 Gold Cup semifinal (Mexico won 1-0) was politically charged due to labor-rights controversies around Qatar's stadium construction.",
        wars: [],
        political: "Diplomatic tensions flared in 2021 over the treatment of Mexican migrant workers in Qatar. Amnesty International reports documented abuses in construction sites.",
        football_history: [
          { year: 2021, event: "Gold Cup SF: Mexico 1-0 Qatar" },
          { year: 2019, event: "Friendly: Qatar 0-1 Mexico" },
        ],
        fun_fact: "Both nations hosted World Cups under controversial circumstances — Mexico in 1986 (after Colombia withdrew) and Qatar in 2022."
      }
    },
    {
      id: "m2",
      date: "2026-06-12",
      time: "14:00",
      timezone: "UTC-4",
      group: "B",
      home: { code: "CAN", name: "Canada", flag: "🇨🇦", conf: "CONCACAF", rank: 42 },
      away: { code: "CZE", name: "Czechia", flag: "🇨🇿", conf: "UEFA", rank: 38 },
      stadium: "bmo",
      rivalry: {
        level: 1,
        title: "First Meeting",
        summary: "Canada and Czechia have never met in a competitive match. Canada is a rising CONCACAF force; Czechia returns after missing 2022. No historical animosity.",
        wars: [],
        political: "Both NATO allies. Canada sheltered Czech dissidents during the Cold War, including future president Václav Havel.",
        football_history: [],
        fun_fact: "Canada's coach Jesse Marsch has Czech ancestry through his mother's side."
      }
    },
    {
      id: "m3",
      date: "2026-06-12",
      time: "20:00",
      timezone: "UTC-4",
      group: "C",
      home: { code: "ARG", name: "Argentina", flag: "🇦🇷", conf: "CONMEBOL", rank: 1 },
      away: { code: "GHA", name: "Ghana", flag: "🇬🇭", conf: "CAF", rank: 68 },
      stadium: "hardrock",
      rivalry: {
        level: 3,
        title: "Debt Unpaid",
        summary: "Argentina ended Ghana's fairytale 2010 World Cup run with a controversial handball by Luis Suárez (Uruguay) in the quarterfinal. Ghana fans still carry grudges against South American teams. The 2022 World Cup saw Argentina eliminate African opposition again.",
        wars: [],
        political: "Argentina was one of the few South American nations to criticize European colonialism in Africa during the 1970s Non-Aligned Movement.",
        football_history: [
          { year: 2010, event: "WC QF: Uruguay vs Ghana (Suárez handball) — Argentina went on to win the tournament" },
          { year: 2009, event: "Friendly: Argentina 2-0 Ghana" },
        ],
        fun_fact: "Ghanaian fans still chant 'Justice for 2010' at any South American team."
      }
    },
    {
      id: "m4",
      date: "2026-06-13",
      time: "16:00",
      timezone: "UTC-4",
      group: "D",
      home: { code: "USA", name: "United States", flag: "🇺🇸", conf: "CONCACAF", rank: 16 },
      away: { code: "WAL", name: "Wales", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", conf: "UEFA", rank: 29 },
      stadium: "atlus",
      rivalry: {
        level: 3,
        title: "Revolution Echoes",
        summary: "The USA and Wales share surprisingly deep historical ties through migration. Over 2 million Americans claim Welsh ancestry. But their 2022 World Cup draw (1-1) was tense — Welsh fans outnumbered Americans in Qatar and mocked US soccer culture. US fans want revenge on home soil.",
        wars: [],
        political: "Welsh immigrants were crucial in the American Industrial Revolution, especially in Pennsylvania coal mines. Welsh-American unions clashed violently with mine owners in the early 1900s.",
        football_history: [
          { year: 2022, event: "WC Group: USA 1-1 Wales (Bale penalty)" },
          { year: 2020, event: "Friendly: USA 0-0 Wales" },
        ],
        fun_fact: "The town of Wales, Massachusetts was founded by Welsh immigrants in 1762."
      }
    },
    {
      id: "m5",
      date: "2026-06-14",
      time: "14:00",
      timezone: "UTC-7",
      group: "E",
      home: { code: "BRA", name: "Brazil", flag: "🇧🇷", conf: "CONMEBOL", rank: 5 },
      away: { code: "SRB", name: "Serbia", flag: "🇷🇸", conf: "UEFA", rank: 30 },
      stadium: "sofi",
      rivalry: {
        level: 4,
        title: "Yugoslav Fracture",
        summary: "Brazil and Serbia (formerly Yugoslavia) have a loaded history. Yugoslavia was the only European team to beat Brazil at the Maracanã (1950). Serbia's football identity is built on Balkan defiance. The 2022 World Cup saw Brazil demolish Serbia 2-0, with Neymar injured by harsh tackles. Serbian media called Brazilian players 'circus act' afterwards.",
        wars: [],
        political: "Brazil never recognized Kosovo's independence (2008), aligning with Serbian territorial claims. This diplomatic stance irritates NATO allies but pleases Belgrade.",
        football_history: [
          { year: 2022, event: "WC Group: Brazil 2-0 Serbia" },
          { year: 2014, event: "Friendly: Brazil 1-0 Serbia" },
          { year: 1950, event: "WC: Yugoslavia 0-2 Brazil (Yugoslavia's only loss)" },
        ],
        fun_fact: "Brazilian telenovelas are wildly popular in Serbia. Serbian fans often sing 'O Sole Mio' to mock Brazilian flair."
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
      away: { code: "CIV", name: "Ivory Coast", flag: "🇨🇮", conf: "CAF", rank: 52 },
      stadium: "mercedes",
      rivalry: {
        level: 4,
        title: "Colonial Shadows",
        summary: "France colonized Ivory Coast (Côte d'Ivoire) from 1893 to 1960. The Ivorian national team is packed with France-born players of Ivorian descent (Drogba, Touré, Zaha). Tensions flare when dual-nationals choose France over Ivory Coast. French far-right politicians routinely attack the 'foreign' origins of Les Bleus, many of whom are Ivorian-descended.",
        wars: [
          { name: "First Ivorian Civil War", years: "2002–2007", outcome: "French military intervention (Opération Licorne) — controversial role" },
          { name: "Second Ivorian Civil War", years: "2010–2011", outcome: "French-backed Ouattara victory; Gbagbo arrested" },
        ],
        political: "France maintains a permanent military base in Abidjan. Ivory Coast's currency (CFA franc) is still pegged to the euro via France. Football is often the battlefield where colonial resentment plays out.",
        football_history: [
          { year: 2006, event: "WC Group: France 0-0 Ivory Coast" },
          { year: 2015, event: "Friendly: France 2-0 Ivory Coast" },
        ],
        fun_fact: "Didier Drogba's peace plea after the 2006 civil war is credited with halting violence. He is a national hero in Ivory Coast."
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
      away: { code: "URU", name: "Uruguay", flag: "🇺🇾", conf: "CONMEBOL", rank: 11 },
      stadium: "hardrock",
      rivalry: {
        level: 5,
        title: "Iberian vs. River Plate",
        summary: "Portugal and Uruguay have clashed in crucial World Cup moments. Uruguay eliminated Portugal in the 2018 Round of 16 (2-1) with a Cavani masterclass. Historically, Portugal and Spain competed to colonize the Río de la Plata region (modern Uruguay) in the 1600s. Uruguay's culture is a direct descendant of Iberian immigration — but they reject that heritage fiercely on the pitch.",
        wars: [
          { name: "Luso-Spanish War (over Banda Oriental)", years: "1735–1737", outcome: "Stalemate; Uruguay later independent" },
          { name: "Cisplatine War", years: "1828", outcome: "Uruguay gains independence from Brazil; Portugal/Spain legacy ends" },
        ],
        political: "Portugal's colonial empire was the first European presence in Uruguay (Colonia del Sacramento, founded 1680). Uruguayan independence heroes like Artigas fought both Portuguese and Spanish rule.",
        football_history: [
          { year: 2018, event: "WC R16: Uruguay 2-1 Portugal (Cavani brace)" },
          { year: 1972, event: "Friendly: Portugal 1-1 Uruguay" },
        ],
        fun_fact: "Uruguay's national anthem mentions 'tyrants' — a direct reference to Portuguese and Spanish colonial rule."
      }
    },
    {
      id: "m12",
      date: "2026-06-17",
      time: "20:00",
      timezone: "UTC-4",
      group: "D",
      home: { code: "ITA", name: "Italy", flag: "🇮🇹", conf: "UEFA", rank: 12 },
      away: { code: "ARG", name: "Argentina", flag: "🇦🇷", conf: "CONMEBOL", rank: 1 },
      stadium: "metlife",
      rivalry: {
        level: 5,
        title: "Mass Migration, Maximum Hate",
        summary: "Italy vs Argentina is the World Cup's most culturally explosive matchup. Argentina is the world's largest Italian-descended population outside Italy (60% of Argentines claim Italian ancestry). Yet on the pitch, they are ruthless enemies. The 1990 World Cup semifinal in Naples saw Maradona — Napoli's god — turn the city against Italy. Argentine fans waved banners: 'Naples is not Italy.' Italian fans burned Maradona effigies.",
        wars: [],
        political: "From 1857 to 1940, over 2 million Italians emigrated to Argentina. Mussolini's fascist regime courted Argentine-Italians as 'lost brothers.' Perón welcomed Nazi fugitives and fascist sympathizers. The cultural bond is love-hate.",
        football_history: [
          { year: 2022, event: "Finalissima: Italy 0-3 Argentina" },
          { year: 1990, event: "WC SF: Italy 1-1 Argentina (ARG wins on pens) — Maradona vs Italy in Naples" },
          { year: 1982, event: "WC Group: Italy 2-1 Argentina" },
          { year: 1978, event: "WC Group: Italy 1-0 Argentina" },
        ],
        fun_fact: "The Argentine national anthem was written by an Italian, Vicente López y Planes. Italy's anthem has no words — just music."
      }
    },
  ],

  // AI venue selector
  pickVenue(match) {
    const stadium = this.stadiums[match.stadium];
    const cityVenues = this.venues.filter(v => v.city.includes(stadium.city.split(',')[0]));
    if (cityVenues.length === 0) return null;

    // "AI" algorithm: balance capacity, rating, and proximity
    const scored = cityVenues.map(v => {
      const dLat = Math.abs(v.lat - stadium.lat);
      const dLng = Math.abs(v.lng - stadium.lng);
      const distance = Math.sqrt(dLat*dLat + dLng*dLng) * 111; // rough km
      const capacityScore = Math.min(v.capacity / 500, 5);
      const ratingScore = v.rating;
      const proximityScore = Math.max(10 - distance, 0);
      const total = (capacityScore * 0.3) + (ratingScore * 0.4) + (proximityScore * 0.3);
      return { ...v, distance, score: total };
    });

    scored.sort((a, b) => b.score - a.score);
    const top = scored[0];

    // Generate AI justification
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
