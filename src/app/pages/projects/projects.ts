// projects.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AcademicProject {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  category: string; // Ex: "Projet Académique"
  database: string;
  frontend: string;
  backend: string;
  coverImage: string; // Image de fond du projet
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  
  // Phrase d'introduction centrée
  introSentence = "Découvrez les projets clés réalisés durant mon cursus à l'IT University, illustrant mes compétences du design de base de données à l'intégration FullStack.";

   projectsList: AcademicProject[] = [
    {
      id: 1,
      title: "Gestion de Cinéma",
      subtitle: "Java Servlet & PostgreSQL",
      period: "Janv 2026 - Fév 2026",
      category: "Projet Académique",
      description: "Application de gestion de cinéma avec tarification des sièges par séance (total des billets par tarif/siège) et suivi des paiements publicitaires par société avec paiement partiel.",
      database: "PostgreSQL",
      frontend: "JSP (Java)",
      backend: "Java Servlet",
      // Image d'illustration cinéma / code
      coverImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600" 
    },
    {
      id: 2,
      title: "Gestion d'Élevage",
      subtitle: "Angular & NodeJS / Express",
      period: "Mars 2026 - Avril 2026",
      category: "Projet Académique",
      description: "Suivi d'élevage de poules pondeuses : gestion des lots d'œufs, recensement par race (prix de vente, coûts, poids) et génération de rapports de situation sur intervalles de dates.",
      database: "MySQL",
      frontend: "Angular",
      backend: "NodeJS / Express",
      // Image d'illustration nature / data
       coverImage: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?q=80&w=600"
    },
    {
      id: 3,
      title: "Gestion de Bibliothèque",
      subtitle: "SpringBoot & PostgreSQL",
      period: "Juin 2025 - Juillet 2025",
      category: "Projet Académique",
      description: "Application pour bibliothécaires : gestion des emprunts, prolongations, catalogue avec filtres multicritères et suivi en temps réel de la disponibilité (verrouillage automatique).",
      database: "PostgreSQL",
      frontend: "JSP (Java)",
      backend: "SpringBoot",
      // Image d'illustration bibliothèque / livres
      coverImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600"
    }
  ];
}