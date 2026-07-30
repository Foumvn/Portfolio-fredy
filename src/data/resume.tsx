import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, LayoutGridIcon } from "lucide-react";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Flutter } from "@/components/ui/svgs/flutter";
import { Laravel } from "@/components/ui/svgs/laravel";
import { Angular } from "@/components/ui/svgs/angular";
import { SpringBoot } from "@/components/ui/svgs/springboot";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Redis } from "@/components/ui/svgs/redis";
import { Firebase } from "@/components/ui/svgs/firebase";

export const DATA = {
  name: "Fredy Foumane",
  initials: "FF",
  url: "https://github.com/Foumvn",
  location: "Odza, Yaoundé, Cameroon",
  locationLink: "https://www.google.com/maps/place/Yaoundé",
  description:
    "Fullstack Developer & Mobile Architect. Passionate about building modern web, mobile and desktop solutions with clean architectures.",
  summary:
    "Développeur Fullstack passionné avec une solide expérience en développement web, mobile et desktop (multi-plateforme). Spécialisé dans les architectures modernes (Microservices, Monolithique, MVC) et les Design Patterns, avec une expertise reconnue en [Laravel, Spring Boot, Angular, Next.js et Flutter](/#skills). Capable de concevoir des solutions complètes du backend jusqu'à l'interface utilisateur, avec des compétences complémentaires en design graphique, [systèmes de communication en temps réel](/#projects) et DevOps.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "Java", icon: Java },
    { name: "Spring Boot", icon: SpringBoot },
    { name: "Flutter", icon: Flutter },
    { name: "Angular", icon: Angular },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Laravel", icon: Laravel },
    { name: "Node.js", icon: Nodejs },
    { name: "TypeScript", icon: Typescript },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: MongoDB },
    { name: "Redis", icon: Redis },
    { name: "Docker", icon: Docker },
    { name: "Firebase", icon: Firebase },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/gallery", icon: LayoutGridIcon, label: "Gallery" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fredyfoumvn237@gmail.com",
    tel: "+237657933330",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Foumvn",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fred-foumane-712a7827b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:fredyfoumvn237@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Athari",
      href: "#",
      badges: [],
      location: "Yaoundé, CM",
      title: "Fullstack Developer & Mobile Architect",
      logoUrl: "/Athari.png",
      start: "Juin 2026",
      end: "Present",
      description:
        "Développement d'applications mobiles et web avec Flutter, React Native et Next.js. Conception d'architectures microservices et intégration de solutions temps réel. Développement d'API RESTful et déploiement cloud. Collaboration sur des projets innovants alliant développement mobile, web et design graphique.",
    },
    {
      company: "Kairos",
      href: "#",
      badges: [],
      location: "Yaoundé, CM",
      title: "Fullstack Developer & Mobile Architect",
      logoUrl: "/kairos.png",
      start: "Feb 2025",
      end: "Jan 2026",
      description:
        "Développement de WithIn (anciennement Dreamflow), une plateforme de messagerie d'entreprise complète avec architecture microservices. Mise en place d'un système de communication en temps réel avec Spring Boot, ASP.NET Core (SignalR) et Flutter. Conception d'architecture multi-bases de données : PostgreSQL, MongoDB, Redis. Développement de l'application mobile KAIROS-HARMONI pour la gestion des processus et projets avec Flutter. Intégration de LiveKit pour la diffusion vidéo et la communication en temps réel.",
    },
    {
      company: "CS-Technology Agency",
      href: "https://cstechnologyagency.com",
      badges: [],
      location: "Yaoundé, CM",
      title: "Fullstack Developer & Designer",
      logoUrl: "/cs-tech.png",
      start: "Feb 2024",
      end: "Mar 2025",
      description:
        "Développement du frontend mobile de l'application Ongola App. Implémentation d'un système d'authentification avec vérification par e-mail. Développement d'une API RESTful avec Laravel (backend). Interface mobile intuitive avec React Native. Conception du site web cstechnologyagency.com. Création de supports graphiques pour des campagnes publicitaires.",
    },
    {
      company: "Care and Health Program (CHP)",
      href: "http://carehealthprogram.org",
      badges: [],
      location: "Yaoundé, CM",
      title: "Software & Backend Developer",
      logoUrl: "/chp.png",
      start: "Feb 2023",
      end: "May 2024",
      description:
        "Mise en place d'un système de gestion logistique avec Laravel, Blade, Tailwind CSS. Formation des employés au déploiement de l'ERP DHIS2. Maintenance et support technique du matériel informatique. Déploiement et mise en ligne du site web CHP carehealthprogram.org.",
    },
  ],
  education: [
    {
      school: "Université de Yaoundé I",
      href: "https://uy1.uninet.cm",
      degree: "Master 1 en Informatique — Spécialité : Développement Logiciel",
      logoUrl: "/universite.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Université de Yaoundé I",
      href: "https://uy1.uninet.cm",
      degree: "Licence Professionnelle en Informatique — Spécialité : Génie Logiciel",
      logoUrl: "/universite.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "Lycée Bilingue d'Ekounou",
      href: "#",
      degree: "Baccalauréat C — Sciences (Mathématiques & Physique)",
      logoUrl: "/ekounou.png",
      start: "2019",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "KAIROS-HARMONI - K-Scanner",
      href: "https://github.com/Foumvn/k-scanner",
      dates: "2025 - 2026",
      active: true,
      description:
        "Application mobile Flutter de gestion de processus et projets. Scan QR, scan documents, compression/merge PDF, extraction de texte (ML Kit), authentification biométrique, thème dynamique et support multilingue.",
      technologies: [
        "Flutter",
        "Dart",
        "Google ML Kit",
        "Provider",
        "go_router",
        "Lottie",
        "mobile_scanner",
        "local_auth",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Foumvn/k-scanner",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/template/kairos-harmoni.svg",
      video: "",
    },
    {
      title: "AfricaFreelance",
      href: "https://github.com/Foumvn/AfricaFreelance",
      dates: "2025 - 2026",
      active: true,
      description:
        "Plateforme backend de mise en relation freelances — clients. API RESTful avec architecture modulaire, authentification JWT, et déploiement cloud.",
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Foumvn/AfricaFreelance",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://frontend-africa-freelance.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/template/africa-freelance.svg",
      video: "",
    },
    {
      title: "Micro-Service Gestion de Notes",
      href: "https://github.com/Foumvn/Micro-Service_Gestion-de-Note",
      dates: "2024",
      active: true,
      description:
        "Architecture microservices avec Spring Boot Cloud Config, service Proxy, Consul, RabbitMQ et CockroachDB pour la communication inter-services et la gestion distribuée des notes.",
      technologies: [
        "Spring Boot",
        "Cloud Config",
        "Consul",
        "RabbitMQ",
        "CockroachDB",
        "Java",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Foumvn/Micro-Service_Gestion-de-Note",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/template/notes-microservice.svg",
      video: "",
    },
    {
      title: "Urbania",
      href: "https://github.com/Foumvn/Urbania",
      dates: "2025 - 2026",
      active: true,
      description:
        "Plateforme web moderne dédiée à l'urbanisme et à l'aménagement du territoire. Interface interactive pour la visualisation de données urbaines.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Foumvn/Urbania",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Live",
          href: "https://urbania-omega.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/template/urbania.svg",
      video: "",
    },
    {
      title: "King - Projecteur Multiplateforme",
      href: "https://github.com/Foumvn/King",
      dates: "2024",
      active: true,
      description:
        "Application de projection télécommandée avec serveur DLNA intégré. Développée en Flutter/Dart avec des modules natifs C++, Swift, Kotlin pour une expérience multi-plateforme optimale.",
      technologies: [
        "Flutter",
        "Dart",
        "C++",
        "Swift",
        "Kotlin",
        "DLNA",
        "CMake",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Foumvn/King",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/template/king.svg",
      video: "",
    },
    {
      title: "ChairRemote - IoT & Robotique",
      href: "https://github.com/Foumvn/ChairRemote",
      dates: "2024",
      active: true,
      description:
        "Projet connecté combinant React Native et Arduino pour le contrôle motorisé d'une chaise via microcontrôleur. Pont entre le développement mobile et l'embarqué.",
      technologies: [
        "React Native",
        "Arduino",
        "JavaScript",
        "IoT",
        "Bluetooth",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Foumvn/ChairRemote",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/template/chairremote.svg",
      video: "",
    },
  ],
  hackathons: [],
} as const;
