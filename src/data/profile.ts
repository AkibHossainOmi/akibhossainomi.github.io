// Career data shared by the About and Resume pages and the structured data.

export const experience = [
  {
    org: "Telcobright",
    role: "Software Engineer",
    start: "2023-07",
    period: "Jul 2023 – Present",
    points: [
      "Maintain and extend a billing system that processes over 10 million SMS records a day.",
      "Build and integrate REST APIs for the billing and reporting modules.",
    ],
  },
  {
    org: "Intech Solution",
    role: "Co-founder",
    period: "Present",
    points: [
      "Co-founded the company and build QuickSell, an AI-assisted sales inbox for shops selling over Messenger, Instagram and WhatsApp.",
    ],
  },
  {
    org: "DIIT Programming Club",
    role: "President",
    period: "Aug 2023 – Jul 2024",
    points: [
      "Ran 3+ coding sessions for 50+ participants, lifting engagement by about 20%.",
      "Wrote 5+ competitive programming problem sets and coached members for regional contests.",
    ],
  },
];

export const education = {
  school: "Daffodil Institute of IT",
  degree: "B.Sc. in Computer Science and Engineering",
  period: "2020 – 2025",
  note: "CGPA 3.57",
};

export const achievements = [
  { title: "Code Samurai 2024", detail: "1st place in the preliminary round, out of 400+ teams." },
  { title: "ICPC Asia Dhaka Regional 2022", detail: "Ranked 105th." },
  { title: "Codeforces", detail: "Max rating 1188 as Omi200045." },
];

export const openSource = [
  {
    project: "MiroTalk SFU",
    href: "https://github.com/miroslavpejic85/mirotalksfu",
    detail: "Added switching the voice-recognition language on the fly.",
    stack: "Node.js",
  },
];

export const skills = [
  { group: "Languages", items: ["C", "C++", "C#", "Java", "Python", "JavaScript", "TypeScript"] },
  { group: "Web", items: ["React", "Node.js", "Express", "Django", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Data", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"] },
  { group: "Systems & tools", items: ["Docker", "Git", "Postman", "Ubuntu / Debian", "Kafka", "WebRTC", "Wireshark"] },
];
