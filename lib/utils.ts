import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const speakers = [
  {
    name: "Izuogu Prince Jonathan",
    title: "CTO CODAFRI",
    image: "/beginnersbytes/prince.jpg",
  },
  {
    name: "Friday Kingsley (Mr Smilez)",
    title: "CEO Smilez Digital",
    image: "/beginnersbytes/smilez.jpg",
  },
  {
    name: "Philip Kayode",
    title: "MD Emrancis Group",
    image: "/beginnersbytes/philip.jpg",
  },
  {
    name: "Chukwueke Micheal U.",
    title: "COO Emrancis Group",
    image: "/beginnersbytes/mikel.jpg",
  },
  {
    name: "Okah IfeanyiChukwu (Nature)",
    title: "CTO CCDAFRI",
    image: "/beginnersbytes/nature.jpg",
  },
  {
    name: "Ikwueze chibuzo Henry",
    title: "CMO CCDAFRI",
    image: "/beginnersbytes/original1.jpg",
  },
];

export const workshopTopics = [
  "Machine Learning",
  "Deep Learning",
  "AI",
  "IoT",
  "Web Development",
  "Graphics Design",
  "Digital Marketing",
  "Content Creation",
];

export const agenda = [
  "Learn web and mobile development basics through hands-on coding sessions.",

  "Explore AI, automation, digital marketing, and design with practical workshops.",
];

export const eventDetails = {
  location: "New Haven, FirstBank",
  date: "August 15, 2025",
};

export const schedules = [
  {
    name: speakers[0].name,
    title: speakers[0].title,
    course: "AI and Automation",
    image: speakers[0].image,
    description:
      "Teaching AI and Automation - exploring the latest trends in artificial intelligence and how to automate workflows efficiently",
    time: "10:00 AM",
  },
  {
    name: speakers[1].name,
    title: speakers[1].title,
    course: "Digital Marketing",
    image: speakers[1].image,
    description:
      "Leading a session on Digital Marketing - covering strategies for social media, content marketing, and data-driven campaigns",
    time: "11:30 AM",
  },
  {
    name: speakers[2].name,
    title: speakers[2].title,
    course: "Mobile App Development",
    image: speakers[2].image,
    description:
      "Hosting a workshop on Mobile App Development - building cross-platform applications with modern frameworks",
    time: "1:00 PM",
  },
  {
    name: speakers[3].name,
    title: speakers[3].title,
    course: "Web Development",
    image: speakers[3].image,
    description:
      "Teaching Web Development - from fundamentals to advanced concepts including responsive design and modern JavaScript frameworks",
    time: "2:30 PM",
  },
];

export const partners = [
  {
    name: "CODAFRI",
    url: "/CODAFRI.png",
  },
  {
    name: "EMRANCIS GROUP",
    url: "/EMRANCISGROUP.png",
  },
  {
    name: "PRINCE CONCEPT",
    url: "/PRINCECONCEPT.png",
  },
  {
    name: "SMILEZ DIGITAL",
    url: "/SMILEZDIGITAAL.png",
  },
  {
    name: "TECH TONIC",
    url: "/TECHTONICLOGO.png",
  },
];

export const getBaseUrl = (): string => {
  const siteUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://beginnerbytes.com.ng";

  return siteUrl;
};
