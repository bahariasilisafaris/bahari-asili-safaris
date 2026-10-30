import { createFileRoute } from "@tanstack/react-router";
import { HomeExperience } from "@/components/site/home-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bahari Asili Safaris | Kenya & Tanzania Safari Journeys" },
      { name: "description", content: "Explore tailor-made Kenya and Tanzania safaris with Bahari Asili Safaris. Discover the Maasai Mara, Serengeti, Ngorongoro and Zanzibar." },
      { property: "og:title", content: "Bahari Asili Safaris | Kenya & Tanzania" },
      { property: "og:description", content: "Thoughtfully planned safaris across Kenya and Tanzania, shaped around you." },
    ],
  }),
  component: HomeExperience,
});
