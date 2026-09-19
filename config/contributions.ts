export interface contributionsInterface { repo: string; contibutionDescription: string; repoOwner: string; link: string }

export const contributionsUnsorted: contributionsInterface[] = [
  { repo: "Edlink", contibutionDescription: "Continued development, deployment, data migration, troubleshooting, training, and improvement of a school-management product.", repoOwner: "Product development", link: "/projects/edlink" },
  { repo: "Business systems", contibutionDescription: "Backend, database, reporting, and workflow improvements for financial and operational software.", repoOwner: "Backend engineering", link: "/projects/financial-business-systems" },
  { repo: "Ripple", contibutionDescription: "Exploring modern messaging architecture with Next.js, Laravel, PostgreSQL, and real-time concepts.", repoOwner: "Full-stack development", link: "/projects/ripple" },
];

export const featuredContributions = contributionsUnsorted.slice(0, 3);
