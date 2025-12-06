
import {  Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

export const COMPANY_INFO = {
  name: "Stella Lumen",
  tagline: "Discover a Galaxy of Stars",
  phone: "031 944 4635",
  email: "info@stella-lumen.com",
  location: "52 Norfolk Terrace, Westville, KwaZulu Natal, 3629",
  socials: {
    linkedin: "https://za.linkedin.com/company/stella-lumen",
    facebook: "https://www.facebook.com/profile.php?id=100094446342559",
    youtube: "https://youtube.com/@StellaLumen1",
    instagram: "https://www.instagram.com/s.tella_lumen/",
    tiktok: "#",
  },
  founded: 2020,
  experience: "30+",
  logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921b7b75b1721e7c7ec376c/a1bd91b3f_ProfilePhoto.png",
  heroImage: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921b7b75b1721e7c7ec376c/9e5c46186_a.jpg"
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { 
    label: "About Us", 
    href: "/about-us",
    subItems: [
      { label: "About Stella Lumen", href: "/about-us" },
      { label: "Meet The Team", href: "/team" }
    ]
  },
  { 
    label: "Product Catalogue", 
    href: "/shop",
    subItems: [
      { label: "All Products", href: "/shop" },
      { label: "Product Details", href: "/product-category" },
      { label: "Trial Products", href: "/projects" },
      { label: "User Manual", href: "https://stella-lumen.com/downloads/rigel-business-beta/UserManual.pdf" }
    ]
  },
  { label: "Services", href: "/team-2" },
  { label: "Internship Program", href: "/internship" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const SERVICES = [
  {
    title: "Strategic Consulting",
    description: "Guiding businesses through complex challenges to achieve sustainable growth.",
    icon: "Strategy"
  },
  {
    title: "Innovation Advisory",
    description: "Fostering creativity and implementing cutting-edge solutions.",
    icon: "Lightbulb"
  },
  {
    title: "Talent Development",
    description: "Nurturing potential and building high-performance teams.",
    icon: "Users"
  },
  {
    title: "Performance Optimization",
    description: "Enhancing efficiency and maximizing operational output.",
    icon: "TrendingUp"
  },
];

export const PAGE_SERVICES = [
  {
    title: "Creative Design",
    description: "Visual storytelling that resonates with your audience.",
    icon: "Palette"
  },
  {
    title: "Web Development",
    description: "Robust, scalable, and beautiful digital experiences.",
    icon: "Code"
  },
  {
    title: "Incredible Idea",
    description: "Turning concepts into reality with strategic planning.",
    icon: "Lightbulb"
  },
  {
    title: "24/7 Support",
    description: "Always there when you need us, ensuring continuity.",
    icon: "Headphones"
  },
  {
    title: "Digital Products",
    description: "Creating innovative digital solutions for modern problems.",
    icon: "Smartphone"
  },
  {
    title: "Pixel Perfect",
    description: "Attention to detail in every pixel and line of code.",
    icon: "Monitor"
  }
];

export const PRODUCTS = [
  {
    id: "venus",
    name: "VENUS",
    category: "Small and Medium Enterprises",
    description: "Generates a comprehensive business plan with financial projections by translating natural business language into funder-ready technical content. Prompts for company info, finance requirements, product/service details, competitor and marketing analysis, and operating costs. Exports to Microsoft Word for refinement.",
    price: "Negotiable",
    image: "/assets/Venus-Package-300x300.jpg",
  },
  {
    id: "rigel-business",
    name: "RIGEL BUSINESS",
    category: "Small and Medium Enterprises",
    description: "Advanced yet simple SME finance management solution that updates accounts, ledgers, and statements in real time. Components: all financial modules in one platform; automated annual and monthly accounts; KPI; transaction listing/general ledger; trial balance; VAT calculations; project management accounts; invoicing/quotations; payroll with payslips; accounts summary reports.",
    price: "R550",
    image: "/assets/Rigel-Package-300x300.jpg",
    featured: true,
  },
  {
    id: "rigel-personal",
    name: "RIGEL PERSONAL",
    category: "Personal Finance",
    description: "Personal finance application for budgeting income and expenditure, capturing actual transactions, and viewing variances in real time. Benefits: understand spending patterns, tax implications, debt control, and personal insurance coverage.",
    price: "Negotiable",
    image: "/assets/Rigel-Personal-Package-300x300.png",
  },
  {
    id: "polaris",
    name: "POLARIS",
    category: "Audit and Risk",
    description: "Internal audit software managing assignments end-to-end premised on Global Internal Audit Standards: planning, team allocation, remote execution/review, evidence storage, quality review, and full audit trail.",
    price: "Negotiable",
    image: "/assets/Polaris-Package-300x300.jpg",
  },
  {
    id: "perseus",
    name: "PERSEUS",
    category: "Audit and Risk",
    description: "Risk Management System that converges risk profiling, risk management and combined assurance. Automates reports for risk intelligence, tracks strategy implementation, and enables dynamic reporting and focused governance.",
    price: "Negotiable",
    image: "/assets/Perseus-Package-300x300.jpg",
  },
  {
    id: "dara",
    name: "DARA",
    category: "Governance",
    description: "Measures organisational governance maturity inline with King IV principles. Evaluates pillars including Leadership, Ethics & Corporate Citizenship, Strategy, Performance & Reporting, Governing Structures & Delegation, Governance Functional Areas, and Stakeholder Relationships. Benefits include aggregating dashboards and quick maturity views to direct action.",
    price: "Negotiable",
    image: "/assets/Dara-Package-300x300.jpg",
    featured: true,
  },
  {
    id: "regulus",
    name: "REGULUS",
    category: "School Financial Management",
    description: "Simplifies GRAP standards for public finance departments, enabling mastery of understanding and application in financial statements. Provides one-page summaries of requirements, definitions of key terms, keeps officials up to date with disclosure pronouncements, offers examples and scenarios to solidify understanding, and includes self-assessment questionnaires.",
    price: "Negotiable",
    image: "/assets/Regulus-Package-300x300.jpg",
  },
  {
    id: "canopus",
    name: "CANOPUS",
    category: "Small and Medium Enterprises",
    description: "SMME business maturity analysis with an easy questionnaire to identify development gaps. Assesses Financial Management, Marketing, ICT, Legal & Governance, Compliance, Product, Human Resources, and Business Continuity. Useful for business owners, funders, trainers/mentors, and targeting funding to areas needing improvement.",
    price: "Negotiable",
    image: "/assets/Canopus-Package-300x300.jpg",
  },
  {
    id: "betelgeuse",
    name: "BETELGEUSE",
    category: "Audit and Risk",
    description: "Internal Audit performance management system based on a balanced scorecard. Evaluates organisational performance, CAE effectiveness, secretariat function, audit coverage plans, and adherence to budget.",
    price: "Negotiable",
    image: "/assets/BETELGEUSE.png",
  },
  {
    id: "epiphany",
    name: "EPIPHANY",
    category: "Audit and Risk",
    description: "Risk maturity evaluation across six pillars: philosophy, governance, responsibility, competency, integrity & ethical values, and resources & systems. Provides consolidated reporting, self-assessment, five-point scale, qualitative commentary, and clear graphical results.",
    price: "Negotiable",
    image: "/assets/Epiphany-Package-300x300.jpg",
  },
  {
    id: "orion",
    name: "ORION",
    category: "Audit and Risk",
    description: "Internal audit function maturity evaluation identifying QAIP gaps across principles: purpose, ethics & professionalism, governance, managing the IA function, and performing IA services. Uses built-in questionnaires and maturity criteria for periodic evaluations.",
    price: "Negotiable",
    image: "/assets/orion-product-package.png",
  },
  {
    id: "kielz",
    name: "KIELZ",
    category: "School Financial Management",
    description: "Comprehensive school financial management and learner tracking system for administrators. Cloud-based with no IT infrastructure investment, aggregated reporting across school/circuit/district/province/national, learner tracking functionality, all financial modules in one platform (Revenue, Expenditure, Assets, Inventory, Payroll, Bank Reconciliation), real-time reports for School Management and the Department, quick access to financial statements, automated learner fee statements, and automated governing body employee payslips.",
    price: "Negotiable",
    image: "/assets/kielz-Package-300x300.jpg",
  },
  {
    id: "astro",
    name: "ASTRO",
    category: "Education",
    description: "Targets accountants and accounting students to master IAS standards, terms, and disclosures. Provides one-page summaries of requirements, definitions of key terms, keeps users up to date with disclosure pronouncements, offers examples and scenarios to solidify understanding, and includes self-assessment questionnaires.",
    price: "Negotiable",
    image: "/assets/Astro-300x300.jpg",
  },
  {
    id: "tz-arietis",
    name: "TZ ARIETIS",
    category: "Audit and Risk",
    description: "Financial reporting system for municipalities providing proper interpretation of municipal financial performance while integrating all municipal financial reports and financial statements in real-time. Functions as a governance system over financial oversight and reporting. Benefits: interpretation of municipal budgets; automated National Treasury reporting from underlying systems; monthly financial discipline with compliance dashboards overall and by account categories; automated CFO reports with analysis tables and graphics; automated GRAP-compliant financial statements.",
    price: "Negotiable",
    image: "/assets/TZ-Arietis-Package-300x300.jpg",
  },
  {
    id: "sirius",
    name: "SIRIUS",
    category: "Public Sector",
    description: "Manages and integrates procurement stages related to acquiring goods and services to facilitate efficiency, transparency, and compliance with policies and regulations. Provides automation of the procurement cycle, transparency, real-time status tracking, automation in calculation of scores, and effective evaluation and adjudication of bids.",
    price: "Negotiable",
    image: "/assets/Sirius-Package-300x300.jpg",
  },
];

export const TEAM = [
  {
    name: "Thabani Zulu CA(SA)",
    role: "Director",
    bio: "A visionary leader with extensive experience in financial management and corporate governance.",
    image: "/assets/team/thabani-zulu.jpg"
  },
  {
    name: "Lusanda Ntloko",
    role: "Head of Audit and Accounts Manager",
    bio: "Specialist in risk management and internal audit processes.",
    image: "/assets/team/lusanda-ntloko.jpg"
  },
  {
    name: "Lizo Shongwe",
    role: "Office Administration",
    bio: "Expert in developing customized business solutions and technical modeling.",
    image: "/assets/team/lizo-shongwe.jpg"
  },
  {
    name: "Amahle Mtolo",
    role: "Marketing and Risk Management",
    bio: "Dedicated to analyzing business models and optimizing performance.",
    image: "/assets/team/amahle-mtolo.jpg"
  },
  {
    name: "Sinethemba Zwane",
    role: "Information Technology",
    bio: "Ensuring client satisfaction and successful project roll-outs.",
    image: "/assets/team/sinethemba-zwane.jpg"
  },
  {
    name: "Londiwe Mahlangu",
    role: "Finance",
    bio: "Streamlining internal processes for maximum efficiency.",
    image: "/assets/team/londiwe-mahlangu.jpg"
  },
  {
    name: "Luthando Zulu",
    role: "Information Technology",
    bio: "Bringing fresh perspectives and energy to the team.",
    image: "/assets/team/luthando-zulu.jpg"
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "How to create a Logo like a Pro",
    excerpt: "Key strategies for branding and visual identity in the corporate world.",
    date: "Oct 12, 2023",
    image: "https://stella-lumen.com/blog-2"
  },
  {
    id: 2,
    title: "Principles of Coldness",
    excerpt: "Understanding the dynamics of professional detachment and objective decision making.",
    date: "Sep 28, 2023",
    image: "https://stella-lumen.com/blog-2"
  },
  {
    id: 3,
    title: "Much Space in World",
    excerpt: "Exploring market gaps and opportunities for expansion in the global economy.",
    date: "Sep 15, 2023",
    image: "https://stella-lumen.com/blog-2"
  },
  {
    id: 4,
    title: "RIGEL PERSONAL: EXERCISING FULL PERSONAL CONTROL OVER YOUR FINANCES",
    excerpt: "Exercising full personal control over your finances is crucial in today's economic climate.",
    date: "Aug 10, 2023",
    image: "https://stella-lumen.com/wp-content/uploads/2023/07/slide-1-min-1-300x169.jpg"
  }
];

export const INTERNS = [
  {
    name: "Nompumelelo Mbhele",
    role: "Finance and Accounting Intern",
    testimonial: "Working as an Accounting Intern at Stella Lumen, I have gained valuable hands-on experience in internal auditing and financial compliance through various projects. Honestly, the experience has been both challenging and rewarding. The environment at Stella Lumen is incredibly supportive — I’ve been able to strengthen my technical skills, understand the importance of ethics and accuracy, and learn how to handle real financial reporting tasks with confidence. So far, it’s been such a great learning curve. I’ve had the chance to connect what I learned in class to the real world. For me, this internship is more than just a job — it’s a stepping stone toward becoming a well-rounded finance professional.",
    image: "https://stella-lumen.com/wp-content/uploads/2025/10/IMG_1237.jpg"
  },
  {
    name: "Thabile Radebe",
    role: "Finance and Accounting Intern",
    testimonial: "My journey in accounting began at Luthuli High, where I developed a strong interest in numbers and financial processes. I pursued this passion at the University of Zululand, graduated with a BCom in Accounting, and have continued to build on my skills ever since. At Stella Lumen, I’ve gained hands-on experience in auditing, evaluating internal controls, supporting compliance, risk assessment, analytical review, and professional reporting, while contributing to meaningful improvements within the firm. I’m driven by a desire to grow my expertise in accounting and finance, embrace new challenges, and make a real impact wherever I work.",
    image: "https://stella-lumen.com/wp-content/uploads/2025/10/IMG_1169.jpg"
  },
  {
    name: "Nolwazi Zaca",
    role: "Finance and Accounting Intern",
    testimonial: "A challenging but incredibly rewarding environment. The team really cares about your growth.",
    image: "https://stella-lumen.com/wp-content/uploads/2025/12/IMG_1231.jpg"
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://stella-lumen.com/wp-content/uploads/2025/10/Screenshot-2025-10-30-220921.png",
    alt: "Risk and Reward",
    category: "Boardgames"
  },
  {
    id: 2,
    src: "https://stella-lumen.com/wp-content/uploads/2025/10/Screenshot-2025-10-30-221037.png",
    alt: "Risk and Reward",
    category: "Boardgames"
  },
  {
    id: 3,
    src: "https://stella-lumen.com/wp-content/uploads/2025/10/Screenshot-2025-10-30-221110.png",
    alt: "Risk and Reward",
    category: "Boardgames"
  },
  {
    id: 4,
    src: "https://stella-lumen.com/wp-content/uploads/2025/10/Screenshot-2025-10-30-221158.png",
    alt: "Risk and Reward",
    category: "Boardgames"
  },
  {
    id: 5,
    src: "https://stella-lumen.com/wp-content/uploads/2025/10/Screenshot-2025-10-30-221233.png",
    alt: "Presentation",
    category: "Events"
  },
  {
    id: 6,
    src: "https://stella-lumen.com/wp-content/uploads/2025/10/Screenshot-2025-10-30-221254.png",
    alt: "Collaboration",
    category: "Events"
  }
];

export const BOARDGAME_IMAGES = [
  {
    id: "bg1",
    src: "https://stella-lumen.com/wp-content/uploads/2025/10/Screenshot-2025-10-30-221317.png",
    alt: "Risk and Reward Game Board"
  },
  {
    id: "bg2",
    src: "https://stella-lumen.com/wp-content/uploads/2025/10/Screenshot-2025-10-30-221333.png",
    alt: "Playing the Game"
  },
  {
    id: "bg3",
    src: "https://stella-lumen.com/wp-content/uploads/2025/10/Screenshot-2025-10-30-221037.png",
    alt: "Game Pieces"
  }
];
