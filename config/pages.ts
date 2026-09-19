import { ValidPages } from "./constants";

type PagesConfig = Record<ValidPages, { title: string; description: string; metadata: { title: string; description: string } }>;

export const pagesConfig: PagesConfig = {
  home: { title: "Home", description: "Software built around real people, workflows, and results.", metadata: { title: "Full-Stack Software Developer & Product Builder", description: "Oscar Nsamba builds dependable web, mobile, and business software from Uganda." } },
  skills: { title: "Skills & Technologies", description: "A practical toolkit for taking products from requirements to production.", metadata: { title: "Skills", description: "Oscar Nsamba's full-stack software development toolkit." } },
  projects: { title: "Featured Work", description: "Products designed to make complex operations simpler and more reliable.", metadata: { title: "Projects", description: "Business, education, finance, and communication products built by Oscar Nsamba." } },
  contact: { title: "Let's build something useful", description: "Have a product idea or an operational problem worth solving? Let's talk.", metadata: { title: "Contact", description: "Start a project with Oscar Nsamba." } },
  contributions: { title: "Development Journey", description: "Continuous learning shaped by real products, users, and production challenges.", metadata: { title: "Development Journey", description: "Oscar Nsamba's product development journey." } },
  resume: { title: "Resume", description: "Oscar Nsamba's professional resume.", metadata: { title: "Resume", description: "Oscar Nsamba's professional resume." } },
  blogs: { title: "Writing", description: "Notes on product engineering and practical software development.", metadata: { title: "Writing", description: "Writing by Oscar Nsamba." } },
  experience: { title: "Professional Experience", description: "Engineering experience grounded in real organizational requirements.", metadata: { title: "Experience", description: "Oscar Nsamba's professional software development experience." } },
};
