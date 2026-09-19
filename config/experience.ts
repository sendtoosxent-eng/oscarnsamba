import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate?: Date;
  endDate?: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "lumpsum-technologies",
    position: "Backend Developer",
    company: "Lumpsum Technologies",
    location: "Uganda",
    startDate: new Date("2023-01-01"),
    endDate: "Present",
    description: [
      "Developed and improved backend systems shaped around real organizational and business requirements.",
      "Worked with application logic, databases, APIs, troubleshooting, and the continued improvement of business software.",
    ],
    achievements: [
      "Translated operational requirements into maintainable backend features and database workflows.",
      "Diagnosed issues in existing systems and implemented practical improvements.",
      "Contributed across development, debugging, deployment, and application support.",
    ],
    skills: ["Laravel", "PHP", "REST APIs", "MySQL", "SQL"],
  },
  {
    id: "frontend-digital-design",
    position: "Frontend Developer & Digital Designer",
    company: "Previous Experience",
    location: "Uganda",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2022-12-31"),
    description: [
      "Built user-facing web experiences and developed a foundation in graphics and digital product design.",
      "This background helps bridge engineering decisions with usability, clarity, and visual communication.",
    ],
    achievements: [
      "Developed responsive interfaces for different screen sizes and user contexts.",
      "Combined visual-design awareness with practical frontend implementation.",
    ],
    skills: ["Javascript", "React", "HTML 5", "CSS 3", "Figma"],
  },
];