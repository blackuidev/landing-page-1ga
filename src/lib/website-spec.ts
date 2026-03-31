import {
  features,
  testimonials,
  projects,
  faqs,
  techLogos,
} from "./data";

export type WebsiteSectionId = string;

export type WebsiteComponentType =
  | "hero"
  | "features-grid"
  | "pricing"
  | "testimonial"
  | "cta"
  | "stats"
  | "faq"
  | "gallery"
  | "contact"
  | "navbar"
  | "footer";

export interface WebsiteTheme {
  brandName: string;
  primaryColor: string;
  accentColor: string;
  background: "light" | "dark";
  fontFamily?: string;
}

export interface WebsiteSection {
  id: WebsiteSectionId;
  componentType: WebsiteComponentType;
  title?: string;
  eyebrow?: string;
  description?: string;
  layoutVariant?: string;
  ctas?: { label: string; href: string; variant?: "primary" | "secondary" }[];
  items?: any[];
}

export interface WebsitePage {
  slug: string;              // e.g. "/", "/pricing"
  title: string;             // Page title / SEO title
  metaDescription?: string;
  sections: WebsiteSection[];
}

export interface WebsiteSpec {
  siteName: string;
  tagline?: string;
  theme: WebsiteTheme;
  pages: WebsitePage[];
}

export const websiteSpec: WebsiteSpec = {
  siteName: "BlackUI Dev",
  tagline: "Building the Future of the Web, One Line of Code at a Time.",
  theme: {
    brandName: "BlackUI",
    primaryColor: "#6366F1", // indigo-500
    accentColor: "#EC4899", // pink-500
    background: "dark",
    fontFamily: "Inter, sans-serif",
  },
  pages: [
    {
      slug: "/",
      title: "BlackUI Dev - High-Performance Web Applications",
      metaDescription: "Crafting modern, high-performance web applications with cutting-edge technologies. Specializing in React, Next.js, and modern UI/UX design.",
      sections: [
        {
          id: "hero",
          componentType: "hero",
          eyebrow: "Expert Full-Stack Development",
          title: "Modern Web Experiences That Perform and Inspire.",
          description: "I design and build production-grade, high-performance web applications with a focus on modern UI/UX, robust architecture, and clean, scalable code.",
          ctas: [
            { label: "View My Work", href: "/projects", variant: "primary" },
            { label: "Get In Touch", href: "/contact", variant: "secondary" },
          ],
        },
        {
          id: "tech-stack",
          componentType: "stats",
          title: "Powered by Cutting-Edge Technologies",
          description: "I leverage the latest and most powerful tools in the web development ecosystem to build robust and scalable applications.",
          items: techLogos,
        },
        {
          id: "features",
          componentType: "features-grid",
          title: "What I Do",
          eyebrow: "Core Principles",
          description: "My development process is guided by a commitment to quality, performance, and user-centric design.",
          items: features,
        },
        {
          id: "projects",
          componentType: "gallery",
          title: "Featured Projects",
          eyebrow: "My Work",
          description: "A selection of projects that showcase my skills in creating modern, functional, and beautiful web applications.",
          items: projects,
        },
        {
          id: "testimonials",
          componentType: "testimonial",
          title: "What My Clients Say",
          description: "I'm proud to have collaborated with some amazing clients. Here's what they have to say about my work.",
          items: testimonials,
        },
        {
          id: "faq",
          componentType: "faq",
          title: "Frequently Asked Questions",
          description: "Have questions? Here are some of the most common things people ask me.",
          items: faqs,
        },
        {
          id: "cta",
          componentType: "cta",
          title: "Ready to Build Something Amazing?",
          description: "Let's collaborate to bring your next project to life. I'm currently available for freelance opportunities and new challenges.",
          ctas: [
            { label: "Contact Me", href: "/contact", variant: "primary" },
          ],
        },
      ],
    },
  ],
};
