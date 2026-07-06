// projects.ts
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, ProjectData } from '../../services/project-service';
import { ProjectDetail } from '../project-detail/project-detail'; // Import de la modale

@Component({
  selector: 'app-projects',
  standalone: true,
  // 1. On déclare le composant ProjectDetail dans les imports pour pouvoir l'utiliser
  imports: [CommonModule, ProjectDetail], 
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  
  private projectService = inject(ProjectService);
  
  introSentence = "Découvrez les projets clés réalisés durant mon cursus, illustrant mes compétences du design de base de données à l'intégration FullStack.";
  projectsList: ProjectData[] = [];
  
  // 2. L'état qui mémorise quel projet est actuellement ouvert dans la modale (null = fermé)
  selectedProject: ProjectData | null = null;

  ngOnInit() {
    this.projectsList = this.projectService.getProjects();
  }

  // 3. Ouvrir la modale
  openDetails(project: ProjectData): void {
    this.selectedProject = project;
  }

  // 4. Fermer la modale
  closeDetails(): void {
    this.selectedProject = null;
  }
}