import type { ImageMetadata } from "astro";
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
  context?: string;
};

export const projects: Project[] = [
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
