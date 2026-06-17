import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Maulana Irfan",
  initials: "MI",
  url: "https://maulanairfan.dev",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description:
    "A passionate software developer committed to building impactful digital solutions. I love creating systems that not only work well but also deliver a delightful user experience.",
  summary:
    "I am a software developer with a strong interest in web development and mobile applications. With experience across various projects and organizations, I am comfortable working in teams and managing solutions from planning to implementation. I enjoy exploring new technologies and leveraging them to create valuable products.",
  avatarUrl: "/profile.jpeg",
  skills: [
    "PHP",
    "Laravel",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Flutter",
    "Angular",
    "Java",
    "Python",
    "React",
    "Tailwind CSS",
    "Docker",
    "Unity",
    "AI",
    "AR",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "emailkamu@example.com",
    tel: "+628123456789",
    social: {
      Resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: NotebookIcon,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mirfan777",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maulana-irfan-id",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/mawlana1308/",
        icon: Icons.Instagram,
        navbar: true,
      },
      Whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/+6281280513590",
        icon: Icons.Whatsapp,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:fcmirfan122@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  
  // Mengubah workExperience menjadi work sesuai struktur data kedua
  work: [
    {
      company: "Kodehana",
      href: "https://kodehana.com",
      badges: [],
      location: "Bogor, Indonesia",
      title: "FullStack Developer",
      logoUrl: "/kodehana.png",
      start: "Oktober 2025",
      end: "Present",
      description:
        "Led a 5-member development team to architect and deliver custom software solutions, including medical information systems and e-commerce platforms. Designed core database schemas and engineered data integration pipelines across 3 major projects utilizing Laravel. Executed end-to-end development to deployment processes.",
    },
    {
      company: "Unit Produksi SMK Telkom Jakarta",
      href: "https://smktelkom-jkt.sch.id",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Web Developer",
      logoUrl: "/smktelkom.png",
      start: "November 2022",
      end: "Juli 2023",
      description:
        "Developed an internal business web application using Laravel Livewire to automate tracking and streamline workflows. Deployed a WordPress site for SLBN 11 Jakarta and trained staff members for smooth adoption and maintenance.",
    },
    {
      company: "CV Kreatorku Indonesia",
      href: "https://kreatorku.com",
      badges: [],
      location: "Tangerang, Indonesia",
      title: "Frontend Developer",
      logoUrl: "/kreatorku.png",
      start: "Februari 2022",
      end: "Juli 2022",
      description:
        "Developed frontend features for Arxist platform using Angular, including Q&A modules and stream overlays. Built responsive landing pages with Angular and Tailwind CSS for pixel-perfect designs. Engineered a Discord bot using Discord.js.",
    },
  ],
  
  // Mengubah struktur education sesuai dengan data kedua
  education: [
    {
      school: "IPB University - Fakultas Vokasi",
      href: "https://ipb.ac.id",
      degree: "Teknologi Rekayasa Perangkat Lunak",
      list : [
        `Academic Achievement: Awarded "Best AR Project" for excellence in Virtual and Augmented Reality technology.`,
        `Publication: Author of "Pengembangan Aplikasi Berbasis Kecerdasan Buatan untuk Diagnostik Penyakit dan Optimalisasi Ekosistem Akuarium" (2026).`,
        `Copyright: Co-holder of HAKI registration from Kemenkumham for the Mauna software system (2026).`,
        `Competitions: Competed in 10+ national-level tech and business competitions, securing 4 major wins/finalist positions.`
      ],
      logoUrl: "/ipb.png",
      start: "2023",
      end: "Present",
    },
    {
      school: "SMK Telkom Jakarta",
      href: "https://smktelkom-jkt.sch.id",
      degree: "Rekayasa Perangkat Lunak",
      list : [
        `Certification: Certified Professional in Software Development (National Competency Certification / BNSP).`,
        `Extracurricular/Experience: Served as a Web Developer for the school's Unit Produksi, developing and delivering professional-grade digital solutions.`,
      ],
      logoUrl: "/smktelkom.png",
      start: "2020",
      end: "2023",
    },
  ],
  
  // Mengubah struktur projects agar sesuai dengan data kedua
  projects: [
    {
      title: "Website Arxist.id",
      href: "https://arxist.id/",
      dates: "2022",
      active: false,
      description:
        "Creator and agency monetization platform with UI slicing contributions, stream alerts with Angular & TypeScript, and Discord bot development using Discord.js & Adonis.js.",
      technologies: [
        "Angular",
        "TypeScript",
        "Discord.js",
        "Adonis.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://arxist.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/website-arxist-id.png",
      video: "",
    },
    {
      title: "SMK Telkom Jakarta Production Unit Website",
      href: "https://smktelkom-jkt.sch.id/",
      dates: "2022",
      active: false,
      description:
        "Development and enhancement of production unit administration system using Laravel Livewire.",
      technologies: [
        "Laravel",
        "PHP",
        "MySQL",,
      ],
      links: [
        {
          type: "Website",
          href: "https://smktelkom-jkt.sch.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/up.png",
      video: "",
    },
    {
      title: "SIMASET Website SMK Telkom Jakarta",
      href: "https://smktelkom-jkt.sch.id/",
      dates: "2022",
      active: false,
      description:
        "Development and enhancement of school administration system using CodeIgniter",
      technologies: [
        "CodeIgniter",
        "PHP",
        "MySQL",,
      ],
      links: [
        {
          type: "Website",
          href: "https://smktelkom-jkt.sch.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/default.png",
      video: "",
    },
    {
      title: "SLBN 11 Jakarta Selatan Profile Website",
      href: "https://slbn11jkt.sch.id/",
      dates: "2023",
      active: false,
      description: "School profile website built using WordPress.",
      technologies: [
        "WordPress",
        "PHP",
        "MySQL",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://slbn11jkt.sch.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/profil-slbn-11.png",
      video: "",
    },
    {
      title: "Tsunami Anticipation Application",
      href: "/aplikasi-antisipasi-tsunami",
      dates: "2023",
      active: false,
      description:
        "Determines fastest evacuation routes in tsunami-prone areas using Dijkstra algorithm, Python, HTML, and Folium.",
      technologies: [
        "Python",
        "Dijkstra Algorithm",
        "HTML",
        "Folium",
      ],
      image: "/aplikasi-antisipasi-tsunami.png",
      video: "",
    },
    {
      title: "Ice Cream Shop Company Profile",
      href: "/company-profile-kedai-es-krim",
      dates: "2024",
      active: true,
      description:
        "Local ice cream shop company profile and blog website built with Java Spring Boot, Tailwind CSS, and PostgreSQL featuring modern and responsive design.",
      technologies: [
        "Java",
        "Spring Boot",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      image: "/company-profile-kedai-es-krim.png",
      video: "",
    },
    {
      title: "Lingkar Hijau Recycled Goods Marketplace",
      href: "/lingkar-hijau-marketplace",
      dates: "2024",
      active: true,
      description:
        "Buy, sell, and educational platform for recycled goods (Figma prototype).",
      technologies: [
        "Figma",
      ],
      image: "/lingkar-hijau-marketplace.png",
      video: "",
    },
    {
      title: "FishCo - Fish Disease Detection & Aquarium Management",
      href: "https://fishco.miauwlan.com/",
      dates: "2025",
      active: true,
      description:
        "Android app with fish disease detection feature using Teachable Machine and Laravel API backend (in development).",
      technologies: [
        "Android",
        "Teachable Machine",
        "Laravel",
        "API",
      ],
      links: [
        {
          type: "Website",
          href: "https://fishco.miauwlan.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fishco-deteksi-penyakit.png",
      video: "",
    },
    {
      title: "AR Logic Game – Educational Logic Gate Boardgame",
      href: "/ar-logic-game",
      dates: "2025",
      active: true,
      description:
        "AR-based educational game using Unity and AR Foundation that detects logic cards and displays outputs.",
      technologies: [
        "Unity",
        "AR Foundation",
        "C#",
        "AR",
      ],
      image: "",
      video: "/AR_Logic_Cards.mp4",
    },
    {
      title: "Mauna - Sign Language Learning  App",
      href: "https://mauna.takumifahri.my.id/",
      dates: "2025",
      active: true,
      description:
        "Sign language learning app with Gamification and AI-powered hand gesture recognition ",
      technologies: [
        "Next JS",
        "Python",
        "Fastapi",
      ],
      image: "/mauna.png",
      video: "",
    },
    {
      title: "Kodehana Profile Company",
      href: "https://kodehana.com/",
      dates: "2025",
      active: true,
      description:
        "Company profile website for Kodehana built with Laravel and Tailwind CSS, featuring a modern and responsive design.",
      technologies: [
        "Next",
        "Tailwind CSS",
      ],
      image: "/pro_kodehana.png",
      video: "",
    },
    {
      title: "MasAkIn - AI-Powered Recipe & Ingredient Scanner ",
      href: "",
      dates: "2026",
      active: true,
      description:
        "A smart web application that detects kitchen ingredients using AI object recognition and automatically generates customized cooking recipes based on available food supplies.",
      technologies: [
        "Flutter",
        "Python",
        "Yolov26",
        "Tensorflow Lite",
        "Gemini Api",
      ],
      image: "/masakin.png",
      video: "",
    },
    {
      title: "Paspos - POS & E-commerce App with barcode scanner",
      href: "",
      dates: "2026",
      active: true,
      description:
        "Flutter mobile application for POS and e-commerce with barcode scanner, inventory management & e-commerce integration.",
      technologies: [
        "Flutter",
        "Python",,
        "Laravel",
      ],
      image: "/paspos.png",
      video: "",
    },
    // {
    //   title: "Si Kafa - POS System with Shopee & Tokopedia API Integration",
    //   href: "/si-kafa-pos",
    //   dates: "2025",
    //   active: true,
    //   description:
    //     "Laravel Filament-based POS system with third-party API integration.",
    //   technologies: [
    //     "Laravel",
    //     "Filament",
    //     "API Integration",
    //     "PHP",
    //   ],
    //   image: "/si-kafa-pos.png",
    //   video: "",
    // },
    // {
    //   title: "Temutukar - Geospatial Clothing Exchange & Donation",
    //   href: "/temutukar-geospasial",
    //   dates: "2025",
    //   active: true,
    //   description:
    //     "Clothing exchange and donation platform with interactive maps using JavaScript, WFS GeoJSON, PostGIS, and GeoServer.",
    //   technologies: [
    //     "JavaScript",
    //     "WFS GeoJSON",
    //     "PostGIS",
    //     "GeoServer",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "/temutukar-geospasial.png",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/temutukar-geospasial.png",
    //   video: "",
    // },
  ],
  
  // Mempertahankan data pelatihan yang sudah sesuai strukturnya
  trainings: [
    {
      name: "Microservices Foundations Professional Certificate",
      provider: "LinkedIn Learning & Kong",
      link_certificate: "https://www.linkedin.com/learning/certificates/8253ff835b329f9a22a94ae5d1a44968ce65c6c8b4f1746dcb094803a673fb8d?u=145014580" 
    },
    {
      name: "Docker Foundations Professional Certificate",
      provider: "LinkedIn Learning & Docker",
      link_certificate: "linkedin.com/learning/certificates/b3967ae1e0c9afdff8ba6f1bad1661195985513c22412e3786f03fff021d4c62?trk=share_certificate" 
    },
    {
      name: "Design User Experiences with Figma",
      provider: "LinkedIn Learning",
      link_certificate: "https://www.linkedin.com/learning/certificates/fcae3108c3c6677f2b616fafbd549d45d60e226af94512e101371cfbbeee514a?trk=share_certificate" 
    },
    {
      name: "Geospatial Data Analytics Essential Training",
      provider: "LinkedIn Learning",
      link_certificate: "https://www.linkedin.com/learning/certificates/73ff7f9ebfff7461db65c67dd52a02332c5c1a3cb6321c20492378cade6bea23?trk=share_certificate" 
    },
  ],
  
  // Menambahkan hackathons yang tidak ada di data pertama tetapi ada di data kedua
  hackathons : [
  {
    title: "I/O FESTIVAL 2026",
    dates: "2026",
    location: "Universitas Tarumanagara",
    description: "participate in the national web development competition",
    image: "/untar.png",
  },
  {
    title: "Business Plan Competition",
    dates: "2026",
    location: "Universitas Muhammadiyah Purwokerto",
    description: "Finalist - design giziku mobile app for healthy lifestyle and balanced nutrition.",
    image: "/ump.png",
    links: [],
  },
  {
    title: "National Website Development ITASE 6.0",
    dates: "2025",
    location: "Telkom University Purwokerto",
    description: "1st Place - Developed mauna website with AI-powered sign language learning features, winning the national web development competition.",
    image: "/telkompurwokerto.png",
    links: [],
  },
  {
    title: "National Business Model Canvas MaFIA Industry Insight",
    dates: "2025",
    location: "Brawijaya University",
    description: "1st Place - Created innovative business model canvas for aqmon aquaponics system, winning the national business model competition.",
    image: "/ub.png",
    links: [],
  },
  {
    title: "Garuda Hacks 6.0",
    dates: "2025",
    location: "Multimedia Nusantara University (UMN)",
    description: "Participated in the national hackathon, contributing to the development of innovative solutions.",
    image: "/garuda.png",
    links: [],
  },
  {
    title: "ITfest IPB University",
    dates: "2025",
    location: "IPB University",
    description: "Participated in the national software development competition , developing nemo aquarium management system with AI-powered fish disease detection.",
    image: "/ipb.png",
    links: [],
  },
  {
    title: "Stitch Loop: Where Every Thread Tells a New Story",
    dates: "2025",
    location: "Universitas Atma Jaya Yogyakarta",
    description: "Created Rajulang, a web platform for point-based secondhand clothing exchange.",
    image: "/uajy.png",
    links: [],
  },
  {
    title: "Recursion 1.0",
    dates: "2025",
    location: "Universitas Hasanuddin",
    description: "Designed Hening, a lip reading educational app for deaf individuals with UI/UX approach.",
    image: "uh.png",
    links: [],
  },
  {
    title: "Invention Udayana",
    dates: "2024",
    location: "Universitas Udayana",
    description: "Designed Lingkar Hijau, a community-based education and recycling marketplace.",
    image: "udayana.png",
    links: [],
  },
  {
    title: "Web Development FIT Competition",
    dates: "2024",
    location: "Universitas Kristen Satya Wacana",
    description: "1st Runner Up - Achieved 2nd place in the national web development competition.",
    image: "/uksw.png",
    links: [],
  },
  {
    title: "Garuda Hacks 5.0",
    dates: "2024",
    location: "Multimedia Nusantara University (UMN)",
    description: "Built an educational website featuring themes of empowerment, innovation, and collaboration.",
    image: "garuda.png",
    links: [],
  }
]}



