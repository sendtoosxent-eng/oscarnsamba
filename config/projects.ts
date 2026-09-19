import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface { title: string; imgArr: string[]; description?: string }
interface DescriptionDetailsInterface { paragraphs: string[]; bullets: string[] }
export interface ProjectInterface {
  id: string; type: ValidExpType; companyName: string; category: ValidCategory[];
  shortDescription: string; websiteLink?: string; githubLink?: string; techStack: ValidSkills[];
  startDate?: Date; endDate?: Date; companyLogoImg: string;
  descriptionDetails: DescriptionDetailsInterface; pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "edlink", companyName: "Edlink", type: "Personal", category: ["Full Stack", "Backend", "Product"],
    shortDescription: "A school-management platform that brings academic, financial, staff, and administrative workflows into one dependable system.",
    techStack: ["Laravel", "PHP", "Javascript", "MySQL", "Tailwind CSS"], companyLogoImg: "/projects/oscar/edlink.svg",
    pagesInfoArr: [{ title: "School operations, connected", description: "A reusable platform shaped around the day-to-day work of schools.", imgArr: ["/projects/oscar/edlink.svg"] }],
    descriptionDetails: {
      paragraphs: ["Edlink is a school-management platform designed to replace fragmented manual processes with one clear operational system.", "Oscar's work spans application development, database design, deployment, data migration, troubleshooting, user training, and continued improvement after launch."],
      bullets: ["Supports student, staff, fees, attendance, academic records, report cards, payroll, notifications, and reporting workflows.", "Uses role-based access to give administrators and staff the right tools for their responsibilities.", "Built with long-term maintainability and real school operations in mind."],
    },
  },
  {
    id: "financial-business-systems", companyName: "Financial & Business Systems", type: "Professional", category: ["Backend", "Full Stack", "Product"],
    shortDescription: "Operational software for lending and business workflows, including clients, loans, savings, payments, reporting, and administration.",
    techStack: ["C#", "Laravel", "PHP", "SQL", "MySQL"], companyLogoImg: "/projects/oscar/finance.svg",
    pagesInfoArr: [{ title: "Reliable operational workflows", description: "Systems that help teams manage sensitive business processes consistently.", imgArr: ["/projects/oscar/finance.svg"] }],
    descriptionDetails: {
      paragraphs: ["Oscar has worked on financial, lending, and business-management systems designed around the daily workflows of real organizations.", "The work combines careful database design, role-based administration, data migration, reporting, and dependable application behavior."],
      bullets: ["Client, loan, savings, and payment management.", "Financial reporting and role-based operational administration.", "Data migration and improvement of existing business workflows."],
    },
  },
  {
    id: "ripple", companyName: "Ripple", type: "Personal", category: ["Full Stack", "Web Dev", "Product"],
    shortDescription: "A modern chat application exploring real-time communication across a Next.js frontend and Laravel backend.",
    techStack: ["Next.js", "React", "Laravel", "PHP", "PostgreSQL"], companyLogoImg: "/projects/oscar/ripple.svg",
    pagesInfoArr: [{ title: "Modern real-time communication", description: "A product-focused exploration of messaging architecture and user experience.", imgArr: ["/projects/oscar/ripple.svg"] }],
    descriptionDetails: {
      paragraphs: ["Ripple is a modern chat application built to explore dependable communication flows, a responsive user experience, and real-time application concepts.", "It combines Next.js and React on the frontend with Laravel and PostgreSQL on the backend."],
      bullets: ["Designed around modern messaging interactions.", "Connects a component-driven frontend to a structured backend API and relational database.", "Explores the architecture required for responsive, real-time product experiences."],
    },
  },
  {
    id: "additional-product-work", companyName: "Additional Product Work", type: "Professional", category: ["Full Stack", "Web Dev", "Mobile Dev"],
    shortDescription: "E-commerce, POS, HR/payroll, mobile, website, and internal-tool work built around practical organizational needs.",
    techStack: ["Laravel", "React", "React Native", "WordPress", "MySQL"], companyLogoImg: "/projects/oscar/products.svg",
    pagesInfoArr: [{ title: "A growing product portfolio", description: "Reusable space for additional case studies as product details become publishable.", imgArr: ["/projects/oscar/products.svg"] }],
    descriptionDetails: {
      paragraphs: ["Oscar's wider product work includes e-commerce applications, corporate websites, POS systems, HR and payroll tools, mobile applications, and internal business software."],
      bullets: ["Websites and applications designed for real users and business goals.", "Experience across frontend, backend, database, deployment, and support work.", "This portfolio entry is designed to grow into individual case studies over time."],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
