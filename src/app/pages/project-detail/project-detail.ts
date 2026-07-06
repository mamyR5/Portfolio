// project-detail.ts
import { Component, Input, Output, EventEmitter, signal, computed, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectData } from '../../services/project-service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  @Input({ required: true }) project!: ProjectData;
  @Output() close = new EventEmitter<void>();

  private sanitizer = inject(DomSanitizer); 

  currentSlideIndex = signal(1);
  activeZoomIndex = signal<number | null>(null);

  activeZoomImage = computed(() => {
    const index = this.activeZoomIndex();
    return index !== null ? this.project.gallery[index] : null;
  });

    getSafeSvg(svgString: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }

  // 1. ÉCOUTEUR CLAVIER GLOBAL (S'active uniquement lorsque la Lightbox est ouverte)
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const currentIndex = this.activeZoomIndex();
    
    // Si la visionneuse est fermée, on n'écoute pas les touches
    if (currentIndex === null) return;

    if (event.key === 'ArrowRight' || event.key === 'Right') {
      event.preventDefault(); // Évite de faire défiler le fond du site
      this.nextZoomImage();   // Passe à l'image suivante
    } 
    else if (event.key === 'ArrowLeft' || event.key === 'Left') {
      event.preventDefault();
      this.prevZoomImage();   // Retourne à l'image précédente
    } 
    else if (event.key === 'Escape' || event.key === 'Esc') {
      event.preventDefault();
      this.closeZoom();       // Ferme la visionneuse
    }
  }

  onClose() {
    this.close.emit();
  }

  onScroll(slider: HTMLDivElement) {
    const index = Math.round(slider.scrollLeft / slider.clientWidth) + 1;
    this.currentSlideIndex.set(index);
  }

  zoomImage(index: number) {
    this.activeZoomIndex.set(index);
  }

  closeZoom() {
    this.activeZoomIndex.set(null);
  }

  slideLeft(slider: HTMLDivElement) {
    slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
  }

  slideRight(slider: HTMLDivElement) {
    slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
  }

  // 2. MODIFICATION : Nous rendons 'event' optionnel avec le point d'interrogation (?)
  prevZoomImage(event?: Event) {
    if (event) {
      event.stopPropagation(); // Évite de fermer l'overlay au clic sur la flèche
    }
    const currentIndex = this.activeZoomIndex();
    if (currentIndex !== null && currentIndex > 0) {
      this.activeZoomIndex.set(currentIndex - 1);
    }
  }

  // 3. MODIFICATION : Nous rendons 'event' optionnel ici également
  nextZoomImage(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    const currentIndex = this.activeZoomIndex();
    if (currentIndex !== null && currentIndex < this.project.gallery.length - 1) {
      this.activeZoomIndex.set(currentIndex + 1);
    }
  }
}