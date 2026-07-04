// navbar.ts
import { Component, ElementRef, EventEmitter, HostListener, Output, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  isMenuOpen = signal(false);

  @Output() menuStateChange = new EventEmitter<boolean>();

  navLinks: NavLink[] = [
    { path: '/', label: 'Acceuil' },
    { path: '/about', label: 'À propos' },
    { path: '/skills', label: 'Compétences' },
    { path: '/projects', label: 'Projets' }
  ];

  constructor(private elementRef: ElementRef) {}

  toggleMenu() {
    this.setMenuOpen(!this.isMenuOpen());
  }

  closeMenu() {
    this.setMenuOpen(false);
  }

  // Point central : toute fermeture/ouverture passe par ici,
  // donc l'émission vers le parent ne peut jamais être oubliée
  private setMenuOpen(value: boolean) {
    this.isMenuOpen.set(value);
    this.menuStateChange.emit(this.isMenuOpen());
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isMenuOpen() && !this.elementRef.nativeElement.contains(event.target)) {
      this.setMenuOpen(false);
    }
  }

}