// project.service.ts
import { Injectable } from '@angular/core';

export interface Tech {
  name: string;
  svgIconUrl: string;
}

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  category: string;
  description: string;
  features: string[];
  technologies: Tech[];
  coverImage: string;
  gallery: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // Centralisation des logos officiels en SVG
  private svgLogos = {
    angular: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    springboot: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    sqlserver: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    tailwindcss:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    css3:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
    figma: `<svg viewBox="0 0 24 24" fill="#F24E1E" width="24" height="24"><path d="M12 2a3 3 0 0 0-3 3v3h6V5a3 3 0 0 0-3-3zm-3 6a3 3 0 0 0 0 6h3V8H9zm3 6v3a3 3 0 1 0 3-3h-3zm3-6a3 3 0 0 0-3 3v3h3a3 3 0 0 0 0-6z"/></svg>`
  };

  private rootPath = 'Screenshots-Portfolio/';

  private projects: ProjectData[] = [
    {
      id: 1,
      title: "Gestion de Cinéma",
      subtitle: "Java Servlet & PostgreSQL",
      period: "Janv 2026 - Fév 2026",
      category: "Projet Académique",
      description: "Application de gestion de cinéma avec tarification des sièges par séance (total des billets par tarif, par siège) et suivi des paiements de contrats publicitaires avec facturation mensuelle par société.",
      features: [
        "Tarification dynamique des sièges par séance (tarifs normaux, étudiants, réduits).",
        "Suivi comptable en temps réel des billets vendus par tarif et par salle.",
        "Gestion des contrats de partenariats publicitaires avec facturation mensuelle.",
        "Système de paiement partiel sécurisé avec tableau de suivi des relances clients."
      ],
      technologies: [
        { name: "Java 17", svgIconUrl: this.svgLogos.java },
        { name: "Java Servlet", svgIconUrl: this.svgLogos.java },
        { name: "PostgreSQL 17.5", svgIconUrl: this.svgLogos.postgresql },
        { name:"TailwindCSS",svgIconUrl:this.svgLogos.tailwindcss},
      ],
      coverImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600",
      gallery: [
        this.rootPath+"CINEMA/CINEMA-1.png",
        this.rootPath+"CINEMA/CINEMA-2.png",
        this.rootPath+"CINEMA/CINEMA-3.png",
        this.rootPath+"CINEMA/CINEMA-4.png",
        this.rootPath+"CINEMA/CINEMA-5.png",
        this.rootPath+"CINEMA/CINEMA-6.png",
        this.rootPath+"CINEMA/CINEMA-7.png",
        this.rootPath+"CINEMA/CINEMA-8.png",
        this.rootPath+"CINEMA/CINEMA-9.png",
        this.rootPath+"CINEMA/CINEMA-10.png",
        this.rootPath+"CINEMA/CINEMA-11.png",
        this.rootPath+"CINEMA/CINEMA-12.png",
        this.rootPath+"CINEMA/CINEMA-13.png",
        this.rootPath+"CINEMA/CINEMA-14.png",
        this.rootPath+"CINEMA/CINEMA-15.png",
      ]
    },
    {
      id: 2,
      title: "Gestion d'Élevage",
      subtitle: "Angular & NodeJS / Express",
      period: "Mars 2026 - Avril 2026",
      category: "Projet Académique",
      description: "Suivi d'élevage de poules pondeuses : gestion des lots d'œufs, recensement par race (prix de vente, coûts, poids) et génération de rapports de situation sur intervalles de dates.",
      features: [
        "Inventaire et recensement automatisé des poules pondeuses classées par race.",
        "Suivi des lots d'œufs collectés (calibrage, stockage et traçabilité).",
        "Calcul automatique du coût de revient (coût alimentaire vs prix de vente au kg).",
        "Génération de rapports de situation détaillés exportables sur intervalles de dates."
      ],
      technologies: [
        { name: "Angular 21", svgIconUrl: this.svgLogos.angular },
        { name: "NodeJS", svgIconUrl: this.svgLogos.nodejs },
        { name: "SQL Server", svgIconUrl: this.svgLogos.sqlserver},
        { name:"TailwindCSS",svgIconUrl:this.svgLogos.tailwindcss}
      ],
      coverImage: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?q=80&w=600",
       gallery: [
        this.rootPath+"AKOHO/AKOHO-1.png",
        this.rootPath+"AKOHO/AKOHO-2.png",
        this.rootPath+"AKOHO/AKOHO-3.png",
        this.rootPath+"AKOHO/AKOHO-4.png",
        this.rootPath+"AKOHO/AKOHO-5.png",
        this.rootPath+"AKOHO/AKOHO-6.png",
        this.rootPath+"AKOHO/AKOHO-7.png",
        this.rootPath+"AKOHO/AKOHO-8.png",
        this.rootPath+"AKOHO/AKOHO-9.png",
        this.rootPath+"AKOHO/AKOHO-10.png",
      ]
    },
    {
      id: 3,
      title: "Gestion de Bibliothèque",
      subtitle: "SpringBoot & PostgreSQL",
      period: "Juin 2025 - Juillet 2025",
      category: "Projet Académique",
      description: "Application destinée aux bibliothécaires pour la gestion des emprunts, prolongations et retours de livres. Catalogue avec filtre par catégorie et auteur.",
      features: [
        "Gestion fluide du cycle de vie des livres : emprunts, prolongations et retours.",
        "Gestion d'abonnement et resérvation d'exemplaire",
        "Suivi en temps réel de la disponibilité des exemplaires physiques.",
        "Système de verrouillage automatique d'un exemplaire dès son emprunt jusqu'à sa restitution."
      ],
      technologies: [
        { name: "Spring Boot 3.5.3", svgIconUrl: this.svgLogos.springboot },
        { name: "PostgreSQL 17.5", svgIconUrl: this.svgLogos.postgresql },
        { name:'CSS',svgIconUrl:this.svgLogos.css3}
      ],
      coverImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600",
      gallery: [
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-1.png",
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-2.png",
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-3.png",
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-4.png",
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-5.png",
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-6.png",
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-7.png",
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-8.png",
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-9.png",
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-10.png",
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-11.png",
        this.rootPath+"BIBLIOTHEQUE/BIBLIOTHEQUE-12.png",
      ]
    }
  ];

  // Permet au composant Projects d'obtenir la liste complète
  getProjects(): ProjectData[] {
    return this.projects;
  }

  // Permet au composant ProjectDetail de récupérer dynamiquement un projet unique
  getProjectById(id: number): ProjectData | undefined {
    return this.projects.find(project => project.id === id);
  }
}