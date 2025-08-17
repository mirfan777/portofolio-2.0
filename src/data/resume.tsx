import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Maulana Irfan",
  initials: "MI",
  url: "https://maulanairfan.dev",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description:
    "Seorang pengembang perangkat lunak yang bersemangat dalam membangun solusi digital berdampak. Saya suka menciptakan sistem yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman yang menyenangkan bagi penggunanya.",
  summary:
    "Saya adalah pengembang perangkat lunak yang memiliki minat besar dalam pengembangan web dan aplikasi mobile. Dengan latar belakang pengalaman di berbagai proyek dan organisasi, saya terbiasa bekerja dalam tim dan mengelola solusi dari tahap perencanaan hingga implementasi. Saya senang mengeksplorasi teknologi baru dan memanfaatkannya untuk menciptakan produk yang bermanfaat.",
  avatarUrl: "/profile.jpeg",
  skills: [
    "PHP",
    "Laravel",
    "JavaScript",
    "Vue.js",
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
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mirfan777",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/meowlana-irfan/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/maw_lana08/",
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
      company: "CV. Kreatorku",
      href: "https://kreatorku.com",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Internship Developer",
      logoUrl: "/kreatorku.png",
      start: "Februari 2022",
      end: "Juli 2022",
      description:
        "Mengembangkan fitur Q&A dan landing page dengan Angular, membangun bot Discord dengan Adonis.js, serta mengimplementasikan desain dari Figma.",
    },
    {
      company: "Unit Produksi SMK Telkom Jakarta",
      href: "https://smktelkom-jkt.sch.id",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Web Developer",
      logoUrl: "/smktelkom.png",
      start: "September 2022",
      end: "Juli 2023",
      description:
        "Mengembangkan sistem administrasi sekolah menggunakan Laravel, Tailwind CSS, dan CodeIgniter. Membuat website profil SLB Negeri 11 dengan WordPress.",
    },
    {
      company: "MicroIT IPB University",
      href: "https://ipb.ac.id",
      badges: [],
      location: "Bogor, Indonesia",
      title: "Webmaster",
      logoUrl: "/ipb.png",
      start: "Januari 2024",
      end: "Present",
      description:
        "Memperdalam React dan pengembangan web, serta menjadi staf logistik dalam program company visit.",
    },
  ],
  
  // Mengubah struktur education sesuai dengan data kedua
  education: [
    {
      school: "SMK Telkom Jakarta",
      href: "https://smktelkom-jkt.sch.id",
      degree: "Rekayasa Perangkat Lunak",
      logoUrl: "/smktelkom.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "IPB University - Fakultas Vokasi",
      href: "https://ipb.ac.id",
      degree: "Teknologi Rekayasa Perangkat Lunak",
      logoUrl: "/ipb.png",
      start: "2023",
      end: "Present",
    },
  ],
  
  // Mengubah struktur projects agar sesuai dengan data kedua
  projects: [
    {
      title: "Jasa Rental Mobil",
      href: "/jasa-rental-mobil",
      dates: "2021",
      active: false,
      description:
        "Platform rental mobil menggunakan PHP dan MySQL untuk mengelola data kendaraan dan peminjaman.",
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
      ],
      image: "/default.png",
      video: "",
    },
    {
      title: "Website Arxist.id",
      href: "https://arxist.id/",
      dates: "2022",
      active: false,
      description:
        "Platform monetisasi kreator dan agensi dengan kontribusi slicing UI, stream alert dengan Angular & TypeScript, serta pembuatan Discord bot dengan Discord.js & Adonis.js.",
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
      title: "Unit Produksi Website SMK Telkom Jakarta",
      href: "https://smktelkom-jkt.sch.id/",
      dates: "2022",
      active: false,
      description:
        "Pengembangan dan peningkatan sistem administrasi unit produksi dengan Laravel Livewire.",
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
      image: "/default.png",
      video: "",
    },
    {
      title: "SIMASET Website SMK Telkom Jakarta",
      href: "https://smktelkom-jkt.sch.id/",
      dates: "2022",
      active: false,
      description:
        "Pengembangan dan peningkatan sistem administrasi sekolah dengan CodeIgniter",
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
      title: "Website Profil SLBN 11 Jakarta Selatan",
      href: "https://slbn11jkt.sch.id/",
      dates: "2023",
      active: false,
      description: "Website profil sekolah dibangun menggunakan WordPress.",
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
      title: "Aplikasi Antisipasi Tsunami",
      href: "/aplikasi-antisipasi-tsunami",
      dates: "2023",
      active: false,
      description:
        "Menentukan rute evakuasi tercepat di area rawan tsunami menggunakan algoritma Dijkstra, Python, HTML, dan Folium.",
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
      title: "Company Profile Kedai Es Krim",
      href: "/company-profile-kedai-es-krim",
      dates: "2024",
      active: true,
      description:
        "Website company profile dan blog kedai es krim lokal menggunakan Java Spring Boot, Tailwind CSS, dan PostgreSQL dengan desain modern dan responsif.",
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
      title: "Lingkar Hijau Marketplace Barang Daur Ulang",
      href: "/lingkar-hijau-marketplace",
      dates: "2024",
      active: true,
      description:
        "Platform jual beli dan edukasi barang daur ulang (prototype figma).",
      technologies: [
        "Figma",
      ],
      image: "/lingkar-hijau-marketplace.png",
      video: "",
    },
    {
      title: "FishCo - Deteksi Penyakit Ikan Hias & Manajemen Akuarium",
      href: "https://fishco.miauwlan.com/",
      dates: "2025",
      active: true,
      description:
        "Aplikasi Android dengan fitur deteksi penyakit ikan menggunakan Teachable Machine dan backend Laravel API (sedang dikembangkan).",
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
      title: "Marketplace Rajulang",
      href: "https://mirfan777.github.io/rajulang/",
      dates: "2025",
      active: true,
      description: "Marketplace tukar poin pakaian bekas berbasis Svelte.",
      technologies: [
        "Svelte",
        "JavaScript",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://mirfan777.github.io/rajulang/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/marketplace-rajulang.png",
      video: "",
    },
    {
      title: "Hening - Aplikasi Edukasi Baca Bibir untuk Tuli",
      href: "https://www.figma.com/proto/ArDjCzG3ElTVqAiBbxWAU8/Hening?node-id=171-235&p=f&t=6VW5JyY1DGuHBsru-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=171%3A235&show-proto-sidebar=1",
      dates: "2025",
      active: true,
      description:
        "Aplikasi edukasi baca bibir dengan materi video dan latihan berbasis AI dan video processing (prototype).",
      technologies: [
        "Figma"
      ],
      links: [
        {
          type: "prototype",
          href: "https://www.figma.com/proto/ArDjCzG3ElTVqAiBbxWAU8/Hening?node-id=213-494&t=YPfBscR4aNv1LGfv-1",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/hening-edukasi-baca-bibir.png",
      video: "",
    },
    {
      title: "AR Logic Game – Boardgame Edukasi Gerbang Logika",
      href: "/ar-logic-game",
      dates: "2025",
      active: true,
      description:
        "Game edukasi berbasis AR menggunakan Unity dan AR Foundation yang mendeteksi kartu logika dan menampilkan output.",
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
      title: "Si Kafa - Sistem POS dengan Integrasi API Shopee & Tokopedia",
      href: "/si-kafa-pos",
      dates: "2025",
      active: true,
      description:
        "Sistem POS berbasis Laravel Filament dengan integrasi API pihak ketiga.",
      technologies: [
        "Laravel",
        "Filament",
        "API Integration",
        "PHP",
      ],
      image: "/si-kafa-pos.png",
      video: "",
    },
    {
      title: "Temutukar - Website Geospasial Tukar Pakaian & Donasi",
      href: "/temutukar-geospasial",
      dates: "2025",
      active: true,
      description:
        "Platform donasi dan tukar pakaian dengan peta interaktif menggunakan JavaScript, WFS GeoJSON, PostGIS, dan GeoServer.",
      technologies: [
        "JavaScript",
        "WFS GeoJSON",
        "PostGIS",
        "GeoServer",
      ],
      links: [
        {
          type: "Website",
          href: "/temutukar-geospasial.png",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/temutukar-geospasial.png",
      video: "",
    },
    // {
    //   title: "Booking Pesawat",
    //   href: "/booking-pesawat.png",
    //   dates: "2021",
    //   active: false,
    //   description: "Sistem booking pesawat menggunakan Laravel dan Bootstrap.",
    //   technologies: [
    //     "Laravel",
    //     "Bootstrap",
    //     "PHP",
    //     "MySQL",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "/booking-pesawat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "/booking-pesawat.png",
    //   video: "",
    // },
  ],
  
  // Mempertahankan data pelatihan yang sudah sesuai strukturnya
  trainings: [
    {
      name: "Microservices Foundations Professional Certificate",
      provider: "Linkedin Leaning & Kong",
      link_certificate: "https://www.linkedin.com/learning/certificates/fcae3108c3c6677f2b616fafbd549d45d60e226af94512e101371cfbbeee514a?trk=share_certificate" 
    },
    {
      name: "Career Essentials in GitHub Professional Certificate",
      provider: "Linkedin Leaning & GitHub",
      link_certificate: "https://www.linkedin.com/learning/certificates/fcae3108c3c6677f2b616fafbd549d45d60e226af94512e101371cfbbeee514a?trk=share_certificate" 
    },
    {
      name: "Docker Foundations Professional Certificate",
      provider: "Linkedin Leaning & Docker",
      link_certificate: "https://www.linkedin.com/learning/certificates/fcae3108c3c6677f2b616fafbd549d45d60e226af94512e101371cfbbeee514a?trk=share_certificate" 
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
    title: "Stitch Loop: Where Every Thread Tells a New Story",
    dates: "Maret 2025",
    location: "Universitas Atma Jaya Yogyakarta",
    description: "Membuat Rajulang, sebuah platform web untuk pertukaran pakaian bekas berbasis poin.",
    image: "/uajy.png", // ganti dengan link gambar jika ada
    links: [],
  },
  {
    title: "Recursion 1.0",
    dates: "Maret 2025",
    location: "Universitas Hasanuddin",
    description: "Merancang Hening, aplikasi edukasi baca bibir untuk penyandang tuli melalui pendekatan UI/UX.",
    image: "uh.png", // ganti dengan link gambar jika ada
    links: [],
  },
  {
    title: "Invention Udayana",
    dates: "September 2024",
    location: "Universitas Udayana",
    description: "Mendesain Lingkar Hijau, marketplace edukasi dan daur ulang berbasis komunitas.",
    image: "udayana.png", // ganti dengan link gambar jika ada
    links: [],
  },
  {
    title: "FIT COMPETITION 2024",
    dates: "31 Juli 2024",
    location: "Universitas Kristen Satya Wacana",
    description: "Membuat website pelaporan fasilitas publik untuk mendukung smart city di terminal bus.",
    image: "uksw.png", // ganti dengan link gambar jika ada
    links: [],
  },
  {
    title: "Garuda Hacks 5.0",
    dates: "11 - 13 Juli 2024",
    location: "Multimedia Nusantara University (UMN)",
    description: "Membangun website edukasi yang mengangkat tema pemberdayaan, inovasi, dan kolaborasi.",
    image: "garuda.png", // ganti dengan link gambar jika ada
    links: [],
  }
]}



