export const site = {
  url: "https://akibhossainomi.github.io",
  name: "Md. Akib Hossain Omi",
  title: "Md. Akib Hossain Omi | Software Engineer",
  role: "Software Engineer",
  description:
    "Md. Akib Hossain Omi is a software engineer at Telcobright and co-founder of Intech Solution, the team behind QuickSell. He builds billing systems, web platforms and AI-assisted sales tools from Bangladesh.",
  location: { city: "Narayanganj", country: "Bangladesh", countryCode: "BD" },
  email: "akibhossainomi2000@gmail.com",
  resumePdf: "/AkibHossainOmi.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/AkibHossainOmi", handle: "AkibHossainOmi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mdakibhossainomi/", handle: "mdakibhossainomi" },
    { label: "X / Twitter", href: "https://twitter.com/akib_omi", handle: "akib_omi" },
    { label: "Instagram", href: "https://www.instagram.com/omicronic_metamorphosis", handle: "omicronic_metamorphosis" },
    { label: "Codeforces", href: "https://codeforces.com/profile/Omi200045", handle: "Omi200045" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
  ],
} as const;

export const organizations = {
  telcobright: { name: "Telcobright", url: "https://telcobright.com" },
  intech: { name: "Intech Solution", url: "https://intechsolution.bd" },
  diit: { name: "Daffodil Institute of IT", url: "https://diit.edu.bd" },
} as const;
