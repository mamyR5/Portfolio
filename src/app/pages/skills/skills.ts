// skills.ts
import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  iconUrl: string;
}

interface SkillCategory {
  id: string;
  label: string;
  items: Technology[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private elementRef = inject(ElementRef);


  // Phrase d'accroche épurée pour les compétences
  introSentence = "Voici quelques-unes des technologies que j'explore et maîtrise progressivement.";


  selectedCategory = signal<string>('frontend');
  isDropdownOpen = signal<boolean>(false);

  // 5 catégories d'onglets claires et équilibrées
  skillsData: SkillCategory[] = [
    {
      id: 'frontend',
      label: 'Frontend',
      items: [
        { name: 'Angular', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/angular.svg' },
        { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg' },
        { name: 'Vue', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vuedotjs.svg' }
      ]
    },
    {
      id: 'styles',
      label: 'Styles CSS',
      items: [
        { name: 'TailwindCSS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg' },
        { name: 'SCSS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sass.svg' },
        { name: 'Bootstrap', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bootstrap.svg' }
      ]
    },
    {
      id: 'backend',
      label: 'Backend',
      items: [
        { name: 'SpringBoot', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/springboot.svg' },
        { name: 'NodeJS / Express', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg' },
        { name: 'Java Servlet', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg' },
        { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/php.svg' },
        { name: 'Flask', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg' }
      ]
    },
    {
      id: 'databases',
      label: 'Bases de données',
      items: [
        { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg' },
        { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg' },
        { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg' },
        { name: 'SQL Server', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftsqlserver.svg' },
        { name: 'SQLite', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sqlite.svg' }
      ]
    },
    {
      id: 'tools',
      label: 'Outils',
      items: [
        { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg' },
        { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg' },
        { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg' }
      ]
    }
  ];

  get activeCategory() {
    return this.skillsData.find(cat => cat.id === this.selectedCategory()) || this.skillsData[0];
  }

  toggleDropdown() {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }

  selectCategory(id: string) {
    this.selectedCategory.set(id);
    this.isDropdownOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.isDropdownOpen() && !this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen.set(false);
    }
  }
}