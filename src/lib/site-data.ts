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
  email: "hello@bahariasilisafaris.com",
  phone: "+254 700 000 000",
  address: "Westlands, Nairobi, Kenya",
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
    days: 7,
    country: "Kenya",
    price: 3890,
    image: migration,
    summary: "Follow the herds across the Mara River with front-row seats to the greatest wildlife show on earth.",
    route: ["Nairobi", "Lake Naivasha", "Maasai Mara", "Nairobi"],
    dayByDay: [
      { day: 1, title: "Arrive in Nairobi", body: "Meet-and-greet at the airport and transfer to a garden hotel.", stay: "Hemingways Nairobi", meals: "Dinner" },
      { day: 2, title: "Lake Naivasha", body: "Drive the Rift Valley escarpment, then a boat safari among hippos.", stay: "Sanctuary Farm", meals: "B, L, D" },
      { day: 3, title: "Into the Maasai Mara", body: "Fly or drive to the Mara for an afternoon game drive.", stay: "Mara Plains Camp", meals: "B, L, D" },
      { day: 4, title: "River crossings", body: "Full day at the Mara River tracking crossing points.", stay: "Mara Plains Camp", meals: "B, L, D" },
      { day: 5, title: "Balloon at dawn", body: "Optional hot-air balloon and bush breakfast.", stay: "Mara Plains Camp", meals: "B, L, D" },
      { day: 6, title: "Maasai village", body: "Morning drive and an afternoon with a Maasai community.", stay: "Mara Plains Camp", meals: "B, L, D" },
      { day: 7, title: "Fly home", body: "Final drive, then a light aircraft back to Nairobi.", stay: "—", meals: "Breakfast" },
    ],
    activities: ["Game drives", "Balloon safari", "Boat safari", "Cultural visit"],
    lodges: ["Hemingways Nairobi", "Sanctuary Farm", "Mara Plains Camp"],
  },
  {
    slug: "serengeti-ngorongoro",
    tag: "Tanzania",
    name: "Serengeti & Ngorongoro",
    days: 8,
    country: "Tanzania",
    price: 4450,
    image: crater,
    summary: "Endless plains and the world's largest intact caldera, home to black rhino and lion prides.",
    route: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
    dayByDay: [
      { day: 1, title: "Arusha arrival", body: "Arrive at Kilimanjaro airport and settle in among coffee farms.", stay: "Arusha Coffee Lodge", meals: "Dinner" },
      { day: 2, title: "Tarangire", body: "Baobabs and big elephant herds.", stay: "Tarangire Treetops", meals: "B, L, D" },
      { day: 3, title: "Ngorongoro rim", body: "Drive the highlands to the crater rim.", stay: "Crater Lodge", meals: "B, L, D" },
      { day: 4, title: "Crater floor", body: "Descend at dawn for rhino, lion and flamingo.", stay: "Crater Lodge", meals: "B, L, D" },
      { day: 5, title: "To the Serengeti", body: "Via Olduvai Gorge into the central Serengeti.", stay: "Serengeti Pioneer Camp", meals: "B, L, D" },
      { day: 6, title: "Seronera", body: "Big cat country with full-day drives.", stay: "Serengeti Pioneer Camp", meals: "B, L, D" },
      { day: 7, title: "Northern plains", body: "Follow the herds north.", stay: "Lamai Camp", meals: "B, L, D" },
      { day: 8, title: "Fly out", body: "Light aircraft back to Arusha.", stay: "—", meals: "Breakfast" },
    ],
    activities: ["Crater descent", "Game drives", "Olduvai Gorge", "Sundowners"],
    lodges: ["Arusha Coffee Lodge", "Crater Lodge", "Lamai Camp"],
  },
  {
    slug: "kilimanjaro-amboseli",
    tag: "Elephants",
    name: "Amboseli & Tsavo",
    days: 5,
    country: "Kenya",
    price: 2390,
    image: amboseli,
    summary: "Giant tuskers walking beneath Kilimanjaro's snowy summit, then the red elephants of Tsavo.",
    route: ["Nairobi", "Amboseli", "Tsavo West", "Mombasa"],
    dayByDay: [
      { day: 1, title: "Nairobi to Amboseli", body: "Drive south to the foot of Kilimanjaro.", stay: "Tortilis Camp", meals: "B, L, D" },
      { day: 2, title: "Amboseli swamps", body: "Elephants, flamingos and Kilimanjaro views.", stay: "Tortilis Camp", meals: "B, L, D" },
      { day: 3, title: "Tsavo West", body: "Lava flows and Mzima Springs.", stay: "Finch Hattons", meals: "B, L, D" },
      { day: 4, title: "Tsavo game drives", body: "Red elephants and leopard in the rocky hills.", stay: "Finch Hattons", meals: "B, L, D" },
      { day: 5, title: "To the coast", body: "Transfer to Mombasa or continue to the beach.", stay: "—", meals: "Breakfast" },
    ],
    activities: ["Game drives", "Mzima Springs", "Bush walks"],
    lodges: ["Tortilis Camp", "Finch Hattons"],
  },
  {
    slug: "safari-and-zanzibar",
    tag: "Bush & Beach",
    name: "Safari & Zanzibar",
    days: 10,
    country: "Tanzania",
    price: 5280,
    image: beach,
    summary: "Five days on safari followed by slow days on Zanzibar's white sand and turquoise water.",
    route: ["Arusha", "Serengeti", "Zanzibar"],
    dayByDay: [
      { day: 1, title: "Arusha", body: "Arrival and welcome dinner.", stay: "Gran Meliá Arusha", meals: "Dinner" },
      { day: 2, title: "Fly to the Serengeti", body: "Afternoon drive.", stay: "Namiri Plains", meals: "B, L, D" },
      { day: 3, title: "Serengeti", body: "Cheetah country.", stay: "Namiri Plains", meals: "B, L, D" },
      { day: 4, title: "Ngorongoro", body: "Crater day trip.", stay: "The Highlands", meals: "B, L, D" },
      { day: 5, title: "Fly to Zanzibar", body: "Stone Town walking tour.", stay: "Emerson Spice", meals: "B, D" },
      { day: 6, title: "Beach days", body: "Days six to ten at leisure on the east coast.", stay: "Zuri Zanzibar", meals: "B, D" },
    ],
    activities: ["Game drives", "Dhow sunset cruise", "Spice tour", "Snorkelling"],
    lodges: ["Namiri Plains", "The Highlands", "Zuri Zanzibar"],
  },
  {
    slug: "maasai-cultural-journey",
    tag: "Culture",
    name: "Maasai Cultural Journey",
    days: 6,
    country: "Kenya",
    price: 2980,
    image: culture,
    summary: "Walk with Maasai guides, learn bush craft and stay in community-owned conservancies.",
    route: ["Nairobi", "Loita Hills", "Mara Conservancies"],
    dayByDay: [
      { day: 1, title: "Nairobi", body: "Arrive and meet your guide.", stay: "Giraffe Manor", meals: "Dinner" },
      { day: 2, title: "Loita Hills", body: "Drive into the highland forests.", stay: "Loita Camp", meals: "B, L, D" },
      { day: 3, title: "Walking with warriors", body: "Full-day guided walk and tracking.", stay: "Loita Camp", meals: "B, L, D" },
      { day: 4, title: "Conservancy", body: "Into the Mara conservancies.", stay: "Naboisho Camp", meals: "B, L, D" },
      { day: 5, title: "Community day", body: "School and women's beadwork co-op visit.", stay: "Naboisho Camp", meals: "B, L, D" },
      { day: 6, title: "Fly home", body: "Morning flight to Nairobi.", stay: "—", meals: "Breakfast" },
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
  { name: "Maasai Mara", country: "Kenya", image: migration, body: "Home of the Great Migration, July to October." },
  { name: "Serengeti", country: "Tanzania", image: hero, body: "Endless plains and year-round big cats." },
  { name: "Ngorongoro", country: "Tanzania", image: crater, body: "A volcanic caldera full of wildlife." },
  { name: "Amboseli", country: "Kenya", image: amboseli, body: "Elephants beneath Kilimanjaro." },
  { name: "Zanzibar", country: "Tanzania", image: beach, body: "Spice island beaches and Stone Town." },
  { name: "Laikipia", country: "Kenya", image: culture, body: "Private conservancies and rare species." },
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
