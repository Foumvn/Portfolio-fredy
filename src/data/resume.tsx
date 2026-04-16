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
      company: "ECA-Technology",
      href: "https://ecatechnology.tech",
      badges: [],
      location: "Remote",
      title: "Web Developer (Freelance)",
      logoUrl: "",
      start: "Nov 2024",
      end: "Present",
      description:
        "Réalisation complète du site web ecatechnology.tech. Technologies : HTML5, CSS3, PHP, MailJS. Développement du système de contact et optimisation SEO.",
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
      title: "WithIn - Messagerie d'Entreprise",
      href: "#",
      dates: "Feb 2025 - Jan 2026",
      active: true,
      description:
        "Plateforme de messagerie d'entreprise complète avec architecture microservices. Messagerie en temps réel, streaming vidéo avec LiveKit, support multi-bases de données et déploiement mobile multi-plateforme.",
      technologies: [
        "Spring Boot",
        "ASP.NET Core",
        "SignalR",
        "Flutter",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "LiveKit",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "KAIROS-HARMONI",
      href: "#",
      dates: "Feb 2025 - Jan 2026",
      active: true,
      description:
        "Application Flutter pour la gestion des processus et projets avec fonctionnalités avancées : authentification biométrique, scan QR, traitement de documents, génération PDF et interface Material Design moderne.",
      technologies: [
        "Flutter",
        "Dart",
        "Provider",
        "Google ML Kit",
        "PDF",
        "QR Scanner",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Système de Gestion des Notes (Microservices)",
      href: "https://github.com/Foumvn/Micro-Service_Gestion-de-Note",
      dates: "2024",
      active: true,
      description:
        "Architecture microservices avec Spring Boot Cloud Config, service Proxy, Consul et broker pour la communication inter-services.",
      technologies: [
        "Spring Boot",
        "Cloud Config",
        "Consul",
        "Proxy",
        "Java",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Foumvn/Micro-Service_Gestion-de-Note",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "App Mobile Streaming Audio",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Application mobile de streaming audio avec notifications push Firebase FCM. Backend Node.js + Express.js. Stockage Firebase + Cloudinary. Frontend Flutter.",
      technologies: [
        "Flutter",
        "Node.js",
        "Express.js",
        "Firebase",
        "Cloudinary",
        "FCM",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "King Projector",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Application desktop multi-plateforme pour projections et présentations. Technologies Electron.js + React Vite pour une expérience utilisateur fluide et moderne.",
      technologies: [
        "Electron.js",
        "React",
        "Vite",
        "JavaScript",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Simulation de Données IoT",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Simulation de données volatiles avec capteurs IoT pour un problème Big Data. Redis (séries temporelles), Docker (base de données distribuée avec sharding Horizontal et Vertical).",
      technologies: [
        "Redis",
        "Docker",
        "IoT",
        "Big Data",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Système de Gestion des Notes Universitaires",
      href: "#",
      dates: "2023",
      active: false,
      description:
        "Système pour la Faculté des Sciences de l'Université de Yaoundé I. Module d'import de données (Excel, CSV), comité de délibération et correction avec aperçu responsive.",
      technologies: [
        "Laravel",
        "PHP",
        "Bootstrap",
        "MySQL",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
