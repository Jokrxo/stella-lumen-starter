
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
    instagram: "https://www.instagram.com/stellalumen1/",
    tiktok: "#",
  },
  founded: 2020,
  experience: "30+",
  logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921b7b75b1721e7c7ec376c/a1bd91b3f_ProfilePhoto.png",
  heroImage: "/assets/realistic-burgundy-gold-background-vector-600nw-2463614061.jpg"
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
      { label: "User Manual", href: "/rigel-business-user-manual" }
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
    description: "Comprehensive Business Planning solution for SMEs.",
    price: null,
    image: "/assets/Venus-Package-300x300.jpg",
  },
  {
    id: "rigel-business",
    name: "RIGEL BUSINESS",
    category: "Small and Medium Enterprises",
    description: "Complete Accounting solution including Payroll, SARS reports, Financial statements, and Bank balances.",
    price: 350,
    image: "/assets/Rigel-Package-300x300.jpg",
    featured: true,
  },
  {
    id: "rigel-personal",
    name: "RIGEL PERSONAL",
    category: "Personal Finance",
    description: "Personal finance management made simple and effective.",
    price: 350,
    image: "/assets/Rigel-Personal-Package-300x300.png",
  },
  {
    id: "polaris",
    name: "POLARIS",
    category: "Risk Management and Assurance",
    description: "Internal Audit solution for robust risk management.",
    price: "Negotiable",
    image: "/assets/Polaris-Package-300x300.jpg",
  },
  {
    id: "perseus",
    name: "PERSEUS",
    category: "Risk Management",
    description: "Advanced Risk Management tools for modern enterprises.",
    price: null,
    image: "/assets/Perseus-Package-300x300.jpg",
  },
  {
    id: "dara",
    name: "DARA",
    category: "Governance",
    description: "Governance Maturity assessment and improvement framework.",
    price: null,
    image: "/assets/Dara-Package-300x300.jpg",
    featured: true,
  },
  {
    id: "regulus",
    name: "REGULUS",
    category: "School Financial Management",
    description: "Specialized financial management for educational institutions.",
    price: null,
    image: "/assets/Regulus-Package-300x300.jpg",
  },
  {
    id: "canopus",
    name: "CANOPUS",
    category: "Public Sector",
    description: "Public sector financial tools and reporting.",
    price: 350,
    image: "/assets/Canopus-Package-300x300.jpg",
  },
  {
    id: "betelgeuse",
    name: "BETELGEUSE",
    category: "Education Sector",
    description: "Comprehensive solution for the education sector.",
    price: null,
    image: "/assets/BETELGEUSE.png",
  },
  {
    id: "epiphany",
    name: "EPIPHANY",
    category: "Education Sector",
    description: "Educational management and insights platform.",
    price: null,
    image: "/assets/Epiphany-Package-300x300.jpg",
  },
  {
    id: "kielz",
    name: "KIELZ",
    category: "School Financial Management",
    description: "Streamlined school finance operations.",
    price: null,
    image: "/assets/kielz-Package-300x300.jpg",
  },
  {
    id: "astro",
    name: "ASTRO",
    category: "Small and Medium Enterprises",
    description: "Entry-level SME solution for startups.",
    price: null,
    image: "/assets/Astro-300x300.jpg",
  },
  {
    id: "tz-arietis",
    name: "TZ ARIETIS",
    category: "Risk Management",
    description: "Specialized risk management tools.",
    price: null,
    image: "/assets/TZ-Arietis-Package-300x300.jpg",
  },
  {
    id: "sirius",
    name: "SIRIUS",
    category: "Public Sector",
    description: "Procurement management for the public sector.",
    price: null,
    image: "/assets/Sirius-Package-300x300.jpg",
  },
];

export const TEAM = [
  {
    name: "Thabani Zulu CA(SA)",
    role: "Director",
    bio: "A visionary leader with extensive experience in financial management and corporate governance.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Lusanda Ntloko",
    role: "Senior Consultant",
    bio: "Specialist in risk management and internal audit processes.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Lizo Shongwe",
    role: "Technical Lead",
    bio: "Expert in developing customized business solutions and technical modeling.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Amahle Mtolo",
    role: "Business Analyst",
    bio: "Dedicated to analyzing business models and optimizing performance.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Sinethemba Zwane",
    role: "Client Relations",
    bio: "Ensuring client satisfaction and successful project roll-outs.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Londiwe Mahlangu",
    role: "Operations Manager",
    bio: "Streamlining internal processes for maximum efficiency.",
    image: "https://images.unsplash.com/photo-1598550874175-4d7112ee52d9?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Luthando Zulu",
    role: "Junior Associate",
    bio: "Bringing fresh perspectives and energy to the team.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "RIGEL PERSONAL: EXERCISING FULL PERSONAL CONTROL OVER YOUR FINANCES",
    excerpt: "Exercising full personal control over your finances is crucial in today's economic climate.",
    date: "Oct 12, 2023",
    image: "/assets/Rigel-Personal-Package-300x300.png"
  },
  {
    id: 2,
    title: "How to create a Logo like a Pro",
    excerpt: "Key strategies for branding and visual identity in the corporate world.",
    date: "Sep 28, 2023",
    image: "/assets/Venus-Package-300x300.jpg"
  },
  {
    id: 3,
    title: "Principles of Coldness",
    excerpt: "Understanding the dynamics of professional detachment and objective decision making.",
    date: "Sep 15, 2023",
    image: "/assets/Polaris-Package-300x300.jpg"
  },
  {
    id: 4,
    title: "Much Space in World",
    excerpt: "Exploring market gaps and opportunities for expansion in the global economy.",
    date: "Aug 10, 2023",
    image: "/assets/Astro-300x300.jpg"
  }
];

export const INTERNS = [
  {
    name: "Sipho Mkhize",
    role: "Finance Intern",
    testimonial: "The mentorship at Stella Lumen has been invaluable. I've learned more in 6 months here than I did in my entire final year.",
    image: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Naledi Radebe",
    role: "IT Intern",
    testimonial: "Working on real-world projects like Rigel Business has given me confidence in my coding skills.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Jason Pillay",
    role: "Business Analyst Intern",
    testimonial: "A challenging but incredibly rewarding environment. The team really cares about your growth.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
    alt: "Team Workshop",
    category: "Events"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
    alt: "Client Meeting",
    category: "Office"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    alt: "Strategy Session",
    category: "Events"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    alt: "Office Culture",
    category: "Office"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    alt: "Presentation",
    category: "Events"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    alt: "Collaboration",
    category: "Office"
  }
];

export const BOARDGAME_IMAGES = [
  {
    id: "bg1",
    src: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=1200",
    alt: "Risk and Reward Game Board"
  },
  {
    id: "bg2",
    src: "https://images.unsplash.com/photo-1632501641765-e568d9088bed?auto=format&fit=crop&q=80&w=1200",
    alt: "Playing the Game"
  },
  {
    id: "bg3",
    src: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&q=80&w=1200",
    alt: "Game Pieces"
  }
];
