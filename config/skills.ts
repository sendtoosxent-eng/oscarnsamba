import { Icons } from "@/components/common/icons";

export interface skillsInterface { name: string; description: string; rating: number; icon: any }

export const skills: skillsInterface[] = [
  { name: "PHP & Laravel", description: "Business logic, APIs, authentication, jobs, and maintainable application services.", rating: 5, icon: Icons.work },
  { name: "C#", description: "Backend and business-system development with strongly typed application code.", rating: 4, icon: Icons.settings },
  { name: "REST APIs", description: "Clear interfaces connecting web, mobile, and operational systems.", rating: 5, icon: Icons.link },
  { name: "React & Next.js", description: "Responsive, component-driven web products with modern rendering patterns.", rating: 5, icon: Icons.react },
  { name: "JavaScript & TypeScript", description: "Reliable interactive experiences across frontend and full-stack applications.", rating: 5, icon: Icons.typescript },
  { name: "Tailwind CSS & HTML/CSS", description: "Accessible, mobile-first interfaces with a consistent visual system.", rating: 5, icon: Icons.tailwindcss },
  { name: "React Native & Expo", description: "Cross-platform mobile applications and mobile-first product experiences.", rating: 3, icon: Icons.react },
  { name: "Android Development", description: "Familiarity with Android application workflows and device-focused design.", rating: 3, icon: Icons.laptop },
  { name: "MySQL & MariaDB", description: "Relational data modelling, queries, migrations, and production data workflows.", rating: 5, icon: Icons.mysql },
  { name: "PostgreSQL & SQLite", description: "Database design for scalable web products and focused local applications.", rating: 4, icon: Icons.mysql },
  { name: "Git, GitHub & Developer Tooling", description: "Version control and practical workflows using VS Code, Composer, npm, and Laravel Herd.", rating: 5, icon: Icons.gitHub },
  { name: "Deployment & Infrastructure", description: "Deploying and supporting applications with Linux/SSH, Hostinger, Render, Railway, and Vercel.", rating: 4, icon: Icons.laptop },
  { name: "WordPress & Python", description: "WordPress experience and working familiarity with Python.", rating: 3, icon: Icons.page },
];

export const featuredSkills = skills.slice(0, 6);
