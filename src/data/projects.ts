import type { ImageMetadata } from "astro";
import quicksell from "../assets/projects/quicksell.png";
import distressedprodata from "../assets/projects/distressedprodata.png";
import resultSync from "../assets/projects/ResultSync.jpeg";
import ecoSync from "../assets/projects/EcoSync.jpg";
import health from "../assets/projects/health.jpg";
import familyCart from "../assets/projects/FamilyCart.jpg";
import fontForger from "../assets/projects/FontForger.png";

export type Project = {
  slug: string;
  title: string;
  /** One line shown under the title. */
  summary: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  tags: string[];
  /** Public live site. */
  live?: string;
  /** Public source code. Omitted for closed-source products. */
  source?: string;
  role?: string;
  context?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "quicksell",
    title: "QuickSell",
    summary: "One inbox and an AI sales assistant for shops that sell through chat.",
    description:
      "Most online shops in Bangladesh sell through Messenger, Instagram and WhatsApp, not a storefront. QuickSell pulls those conversations and website chat into one inbox. Its AI answers product and price questions in Bangla, English or Banglish, writes up the order from the chat with stock, totals and delivery charge, and books it with Pathao or Steadfast in one click. It also has post and ad tools, sales insights, and a developer API with webhooks.",
    image: quicksell,
    imageAlt: "QuickSell landing page with the headline 'Sell where your customers actually chat' and a preview of the unified inbox",
    tags: ["AI auto-reply", "Messenger · Instagram · WhatsApp", "Courier integration", "Public API & webhooks", "Bangla + English"],
    live: "https://quicksell.intechsolution.bd",
    role: "Co-founder, Intech Solution",
    featured: true,
  },
  {
    slug: "distressed-pro-data",
    title: "Distressed Pro Data",
    summary: "A marketplace for verified tax-delinquent property leads in the US.",
    description:
      "A lead platform for real-estate investors. Users pick a state on an interactive US map, drill into counties and buy lists of owners with at least two years of unpaid property tax and $5,000+ owed. Records are reviewed by people and refreshed monthly, and pricing is pay-as-you-go instead of a locked subscription.",
    image: distressedprodata,
    imageAlt: "Distressed Pro Data home page with an interactive map of US states for browsing property leads",
    tags: ["Interactive US map", "Lead marketplace", "Usage-based billing", "Monthly data refresh"],
    live: "https://distressedprodata.com",
    featured: true,
  },
  {
    slug: "resultsync",
    title: "ResultSync",
    summary: "Result management for faculty: subjects, students and grades in one place.",
    description:
      "A web app that lets faculty register, sign in and manage student results. Authentication uses JWT with hashed passwords, and teachers can add, edit and review results, subjects and student records.",
    image: resultSync,
    imageAlt: "ResultSync dashboard screenshot",
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    source: "https://github.com/AkibHossainOmi/ResultSync",
  },
  {
    slug: "ecosync",
    title: "EcoSync",
    summary: "Waste collection planning for Dhaka North City Corporation.",
    description:
      "A waste management system connecting producers, collectors and recycling sites. It handles collection scheduling, vehicle tracking and route optimisation, and reports on how much waste moves through each site.",
    image: ecoSync,
    imageAlt: "EcoSync waste management dashboard screenshot",
    tags: ["React", "Express", "MySQL", "Tailwind CSS", "Route optimisation"],
    source: "https://github.com/AkibHossainOmi/cs24-p2-DIIT_RUNTIME_TERROR",
    context: "Code Samurai 2024",
  },
  {
    slug: "health",
    title: "Health",
    summary: "Open-source healthcare app for patients and doctors.",
    description:
      "An open-source web app covering medical reports, doctor availability and ratings, emergency services and prescriptions. It doubles as a real codebase students can contribute to.",
    image: health,
    imageAlt: "Health app screenshot",
    tags: ["Open source", "Web app", "Healthcare"],
    source: "https://github.com/Balagha/health",
  },
  {
    slug: "familycart",
    title: "FamilyCart",
    summary: "Shared shopping lists and spending for couples and families.",
    description:
      "An Android app with shared lists, price tracking and automatic expense totals. Items get ticked off as they're bought, so everyone sees what's left and what's been spent.",
    image: familyCart,
    imageAlt: "FamilyCart Android app screens",
    tags: ["Android", "Mobile app", "Expense tracking"],
    source: "https://github.com/AkibHossainOmi/familycart",
  },
  {
    slug: "fontforger",
    title: "FontForger",
    summary: "Chrome extension to switch selected text case with a shortcut.",
    description:
      "Select text in any editable field and press a keyboard shortcut to convert it to upper or lower case. Small, fast and dependency-free JavaScript.",
    image: fontForger,
    imageAlt: "FontForger Chrome extension screenshot",
    tags: ["JavaScript", "Chrome extension"],
    source: "https://github.com/AkibHossainOmi/FontForger",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
