import hero from "@/assets/hero.jpg";
import jeep from "@/assets/jeep.jpg";
import lodge from "@/assets/lodge.jpg";
import beach from "@/assets/beach.jpg";
import culture from "@/assets/culture.jpg";
import migration from "@/assets/migration.jpg";
import crater from "@/assets/crater.jpg";
import amboseli from "@/assets/amboseli.jpg";

export const img = { hero, jeep, lodge, beach, culture, migration, crater, amboseli };

export const BRAND = "Bahari Asili Safaris";
export const CONTACT = {
  email: "bahariasilisafaris@gmail.com",
  phone: "+254 745 043 121",
  whatsapp: "+254745043121",
  address: "Kenya & Tanzania",
};

export type Day = { day: number; title: string; body: string; stay: string; meals: string };
export type Itinerary = {
  slug: string;
  tag: string;
  name: string;
  days: number;
  country: string;
  price: number;
  image: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  route: string[];
  dayByDay: Day[];
  activities: string[];
  lodges: string[];
};

export const itineraries: Itinerary[] = [
  {
    slug: "great-migration-classic",
    tag: "Migration",
    name: "Great Migration Classic",
    seoTitle: "7-Day Kenya Great Migration Safari | Bahari Asili Safaris",
    seoDescription: "Track the Great Migration in Kenya’s Maasai Mara on a 7-day safari with expert guiding, game drives and an optional hot-air balloon experience.",
    days: 7,
    country: "Kenya",
    price: 3890,
    image: migration,
    summary: "Follow the herds across the Mara River with front-row seats to the greatest wildlife show on earth.",
    route: ["Nairobi", "Lake Naivasha", "Maasai Mara", "Nairobi"],
    dayByDay: [
      { day: 1, title: "Arrive in Nairobi", body: "Arrive in Nairobi, meet your local safari representative and settle into a comfortable garden hotel. Take time to recover from your flight and get ready for the journey ahead.", stay: "Hemingways Nairobi", meals: "Dinner" },
      { day: 2, title: "Lake Naivasha", body: "Travel through the dramatic Great Rift Valley to Lake Naivasha. Enjoy a relaxed boat safari with opportunities to see hippos and abundant birdlife from the water.", stay: "Sanctuary Farm", meals: "B, L, D" },
      { day: 3, title: "Into the Maasai Mara", body: "Journey into the Maasai Mara by road or scheduled light aircraft, then head out with your guide for your first game drive across the reserve and surrounding conservancies.", stay: "Mara Plains Camp", meals: "B, L, D" },
      { day: 4, title: "River crossings", body: "Spend the day exploring the Mara ecosystem with your guide, following wildlife movement and checking the river areas when seasonal migration activity makes a crossing possible.", stay: "Mara Plains Camp", meals: "B, L, D" },
      { day: 5, title: "Balloon at dawn", body: "Rise early for an optional hot-air balloon safari, followed by a bush breakfast (subject to availability and weather). Alternatively, enjoy an unhurried morning game drive.", stay: "Mara Plains Camp", meals: "B, L, D" },
      { day: 6, title: "Maasai village", body: "Enjoy a morning game drive before an opportunity to learn about Maasai heritage and daily life through a locally guided community visit.", stay: "Mara Plains Camp", meals: "B, L, D" },
      { day: 7, title: "Fly home", body: "Enjoy a final morning in the Mara before transferring to the airstrip for your scheduled flight back to Nairobi and onward connections.", stay: "—", meals: "Breakfast" },
    ],
    activities: ["Game drives", "Balloon safari", "Boat safari", "Cultural visit"],
    lodges: ["Hemingways Nairobi", "Sanctuary Farm", "Mara Plains Camp"],
  },
  {
    slug: "serengeti-ngorongoro",
    tag: "Tanzania",
    name: "Serengeti & Ngorongoro",
    seoTitle: "8-Day Serengeti & Ngorongoro Safari | Bahari Asili Safaris",
    seoDescription: "Explore Tanzania’s Serengeti and Ngorongoro Crater on an 8-day safari with big-cat country, crater wildlife and handpicked safari stays.",
    days: 8,
    country: "Tanzania",
    price: 4450,
    image: crater,
    summary: "Endless plains and the world's largest intact caldera, home to black rhino and lion prides.",
    route: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
    dayByDay: [
      { day: 1, title: "Arusha arrival", body: "On arrival at Kilimanjaro International Airport, meet your representative and transfer to your lodge in the leafy outskirts of Arusha. Enjoy a relaxed welcome and briefing.", stay: "Arusha Coffee Lodge", meals: "Dinner" },
      { day: 2, title: "Tarangire", body: "Explore Tarangire National Park, known for its ancient baobab trees and impressive elephant herds. Your guide will help you look for wildlife along the river and open savannah.", stay: "Tarangire Treetops", meals: "B, L, D" },
      { day: 3, title: "Ngorongoro rim", body: "Travel through the scenic Ngorongoro highlands, with changing landscapes and views as you approach your lodge on the crater rim.", stay: "Crater Lodge", meals: "B, L, D" },
      { day: 4, title: "Crater floor", body: "Descend into the Ngorongoro Crater for a full-day game drive across its varied habitats. Look out for lion, buffalo, elephant and, with luck, the rare black rhino.", stay: "Crater Lodge", meals: "B, L, D" },
      { day: 5, title: "To the Serengeti", body: "Continue towards the Serengeti, with an opportunity to learn about the region’s human history around Olduvai Gorge before entering the plains.", stay: "Serengeti Pioneer Camp", meals: "B, L, D" },
      { day: 6, title: "Seronera", body: "Spend the day exploring the Seronera region, a rewarding area for spotting lions, leopards and cheetahs. Your route will follow wildlife sightings and conditions.", stay: "Serengeti Pioneer Camp", meals: "B, L, D" },
      { day: 7, title: "Northern plains", body: "Travel towards the northern Serengeti, enjoying game viewing along the way. Wildlife locations vary with the season, so your guide will adapt the route to current conditions.", stay: "Lamai Camp", meals: "B, L, D" },
      { day: 8, title: "Fly out", body: "After breakfast, transfer to the airstrip for your light aircraft flight back to Arusha, connecting with your onward travel.", stay: "—", meals: "Breakfast" },
    ],
    activities: ["Crater descent", "Game drives", "Olduvai Gorge", "Sundowners"],
    lodges: ["Arusha Coffee Lodge", "Crater Lodge", "Lamai Camp"],
  },
  {
    slug: "kilimanjaro-amboseli",
    tag: "Elephants",
    name: "Amboseli & Tsavo",
    seoTitle: "5-Day Amboseli & Tsavo Safari | Bahari Asili Safaris",
    seoDescription: "See Amboseli elephants beneath Mount Kilimanjaro and explore Tsavo West on this 5-day Kenya safari, with an option to continue to the coast.",
    days: 5,
    country: "Kenya",
    price: 2390,
    image: amboseli,
    summary: "Giant tuskers walking beneath Kilimanjaro's snowy summit, then the red elephants of Tsavo.",
    route: ["Nairobi", "Amboseli", "Tsavo West", "Mombasa"],
    dayByDay: [
      { day: 1, title: "Nairobi to Amboseli", body: "Leave Nairobi behind and travel south to Amboseli, arriving in time to settle into camp and enjoy views towards Mount Kilimanjaro when skies are clear.", stay: "Tortilis Camp", meals: "B, L, D" },
      { day: 2, title: "Amboseli swamps", body: "Explore Amboseli’s swamps and open plains, where elephants gather and wildlife thrives. Your guide will choose game-drive routes around sightings and weather.", stay: "Tortilis Camp", meals: "B, L, D" },
      { day: 3, title: "Tsavo West", body: "Travel into Tsavo West, a landscape of volcanic rock, rolling hills and natural springs. Visit Mzima Springs and look for wildlife around its clear pools.", stay: "Finch Hattons", meals: "B, L, D" },
      { day: 4, title: "Tsavo game drives", body: "Enjoy game drives through Tsavo West’s varied terrain, watching for its famous red-dust elephants and other wildlife among the rocky hills and woodland.", stay: "Finch Hattons", meals: "B, L, D" },
      { day: 5, title: "To the coast", body: "After breakfast, travel towards the coast. Finish your safari in Mombasa or arrange a beach extension, with onward transfers confirmed in your final itinerary.", stay: "—", meals: "Breakfast" },
    ],
    activities: ["Game drives", "Mzima Springs", "Bush walks"],
    lodges: ["Tortilis Camp", "Finch Hattons"],
  },
  {
    slug: "safari-and-zanzibar",
    tag: "Bush & Beach",
    name: "Safari & Zanzibar",
    seoTitle: "10-Day Tanzania Safari & Zanzibar Beach Holiday | Bahari Asili Safaris",
    seoDescription: "Pair Serengeti wildlife and Ngorongoro landscapes with Zanzibar beaches on a 10-day Tanzania safari and beach escape.",
    days: 10,
    country: "Tanzania",
    price: 5280,
    image: beach,
    summary: "Five days on safari followed by slow days on Zanzibar's white sand and turquoise water.",
    route: ["Arusha", "Serengeti", "Zanzibar"],
    dayByDay: [
      { day: 1, title: "Arusha", body: "Arrive in Arusha, meet your safari team and transfer to your hotel. Enjoy a welcome dinner and a briefing about the days ahead.", stay: "Gran Meliá Arusha", meals: "Dinner" },
      { day: 2, title: "Fly to the Serengeti", body: "Fly into the Serengeti and begin discovering its vast plains on an afternoon game drive, with time to settle into camp.", stay: "Namiri Plains", meals: "B, L, D" },
      { day: 3, title: "Serengeti", body: "Explore the Serengeti with your guide, looking for cheetahs and other wildlife across open grasslands. Sightings depend on season and natural movement.", stay: "Namiri Plains", meals: "B, L, D" },
      { day: 4, title: "Ngorongoro", body: "Set out for a memorable day in the Ngorongoro Conservation Area, with a crater-floor game drive and time to appreciate this remarkable volcanic landscape.", stay: "The Highlands", meals: "B, L, D" },
      { day: 5, title: "Fly to Zanzibar", body: "Fly to Zanzibar and discover the character of Stone Town on a guided walk through its historic lanes, architecture and lively markets.", stay: "Emerson Spice", meals: "B, D" },
      { day: 6, title: "Zanzibar's east coast", body: "Travel to Zanzibar’s coast and check in to your beach retreat. The rest of the day is yours to enjoy the shoreline and warm Indian Ocean.", stay: "Zuri Zanzibar", meals: "B, D" },
      { day: 7, title: "A day by the ocean", body: "Enjoy a free day at the beach. Swim, relax by the water or ask your host about optional island activities.", stay: "Zuri Zanzibar", meals: "B, D" },
      { day: 8, title: "Spice island experience", body: "Join a guided spice experience to learn how cloves, cinnamon and other crops shaped Zanzibar’s history, cuisine and trade.", stay: "Zuri Zanzibar", meals: "B, D" },
      { day: 9, title: "Choose your island day", body: "Choose a relaxed day at the resort or ask us to arrange an optional boat excursion or snorkelling trip, depending on sea and weather conditions.", stay: "Zuri Zanzibar", meals: "B, D" },
      { day: 10, title: "Departure", body: "Enjoy breakfast before your transfer to Zanzibar airport for your onward flight. Allow time for check-in and international connections.", stay: "—", meals: "Breakfast" },
    ],
    activities: ["Game drives", "Dhow sunset cruise", "Spice tour", "Snorkelling"],
    lodges: ["Namiri Plains", "The Highlands", "Zuri Zanzibar"],
  },
  {
    slug: "maasai-cultural-journey",
    tag: "Culture",
    name: "Maasai Cultural Journey",
    seoTitle: "6-Day Maasai Cultural Safari in Kenya | Bahari Asili Safaris",
    seoDescription: "Discover Kenya with Maasai-guided walks, cultural encounters and wildlife conservancies on this 6-day private safari journey.",
    days: 6,
    country: "Kenya",
    price: 2980,
    image: culture,
    summary: "Walk with Maasai guides, learn bush craft and stay in community-owned conservancies.",
    route: ["Nairobi", "Loita Hills", "Mara Conservancies"],
    dayByDay: [
      { day: 1, title: "Nairobi", body: "Arrive in Nairobi, meet your guide and settle in. Your team will walk you through the route and the cultural experiences planned for the coming days.", stay: "Giraffe Manor", meals: "Dinner" },
      { day: 2, title: "Loita Hills", body: "Travel into the Loita Hills, where forest, open country and community landscapes create a different perspective on Kenya. Settle into camp on arrival.", stay: "Loita Camp", meals: "B, L, D" },
      { day: 3, title: "Walking with warriors", body: "Walk with local Maasai guides and learn how to read tracks, understand the landscape and identify useful plants. The pace and route are adapted to the group.", stay: "Loita Camp", meals: "B, L, D" },
      { day: 4, title: "Conservancy", body: "Continue into the Mara conservancies, where community-led conservation supports wildlife and a more intimate safari experience.", stay: "Naboisho Camp", meals: "B, L, D" },
      { day: 5, title: "Community day", body: "Spend time learning about community initiatives and local craft traditions, with a visit arranged respectfully through local hosts and subject to availability.", stay: "Naboisho Camp", meals: "B, L, D" },
      { day: 6, title: "Fly home", body: "After breakfast, transfer to the airstrip for your flight to Nairobi and onward connections.", stay: "—", meals: "Breakfast" },
    ],
    activities: ["Walking safari", "Village visit", "Beadwork class", "Night drive"],
    lodges: ["Giraffe Manor", "Naboisho Camp"],
  },
];

export const experiences = [
  { title: "Big Five Safaris", body: "Lion, leopard, elephant, buffalo and rhino with expert trackers.", image: jeep },
  { title: "Beach Extensions", body: "Zanzibar, Diani and Lamu after the dust of the plains.", image: beach },
  { title: "Cultural Tours", body: "Time with Maasai, Samburu and Swahili communities.", image: culture },
  { title: "Private & Group Departures", body: "Your own vehicle and guide, or join a small group.", image: lodge },
];

export const destinations = [
  { slug: "maasai-mara", name: "Maasai Mara", country: "Kenya", image: migration, body: "Home of the Great Migration, July to October." },
  { slug: "serengeti", name: "Serengeti", country: "Tanzania", image: hero, body: "Endless plains and year-round big cats." },
  { slug: "ngorongoro", name: "Ngorongoro", country: "Tanzania", image: crater, body: "A volcanic caldera full of wildlife." },
  { slug: "amboseli", name: "Amboseli", country: "Kenya", image: amboseli, body: "Elephants beneath Kilimanjaro." },
  { slug: "zanzibar", name: "Zanzibar", country: "Tanzania", image: beach, body: "Spice island beaches and Stone Town." },
  { slug: "laikipia", name: "Laikipia", country: "Kenya", image: culture, body: "Private conservancies and rare species." },
];

export const lodges = [
  { name: "Mara Plains Camp", place: "Maasai Mara, Kenya", tier: "Luxury tented", image: lodge },
  { name: "Crater Lodge", place: "Ngorongoro, Tanzania", tier: "Signature lodge", image: crater },
  { name: "Tortilis Camp", place: "Amboseli, Kenya", tier: "Classic tented", image: amboseli },
  { name: "Namiri Plains", place: "Serengeti, Tanzania", tier: "Luxury tented", image: jeep },
  { name: "Zuri Zanzibar", place: "Zanzibar, Tanzania", tier: "Beach resort", image: beach },
  { name: "Naboisho Camp", place: "Mara Conservancy, Kenya", tier: "Eco camp", image: culture },
];

export const reviews = [
  { quote: "We saw a river crossing on day two. Our guide Joseph knew exactly where to wait.", name: "Sarah & Tom, UK", trip: "Great Migration Classic" },
  { quote: "Every lodge was better than the last. Planning took one call and a few emails.", name: "Daniel R., USA", trip: "Serengeti & Ngorongoro" },
  { quote: "Safari then Zanzibar was the perfect balance. Our kids still talk about the elephants.", name: "Maya K., Germany", trip: "Safari & Zanzibar" },
  { quote: "Walking with Maasai guides was the most moving part of our trip.", name: "Priya S., Canada", trip: "Maasai Cultural Journey" },
  { quote: "Our flight was delayed and the team rebooked the whole first day for us.", name: "Lars B., Sweden", trip: "Amboseli & Tsavo" },
  { quote: "Honest advice on when to go. We went in February and had the plains to ourselves.", name: "Amara O., Nigeria", trip: "Private safari" },
];
