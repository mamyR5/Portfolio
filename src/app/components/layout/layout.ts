// layout.ts
import { Component, signal } from '@angular/core';
import { Navbar } from '../ui/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Navbar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  isMenuOpen = signal(false);

  onMenuStateChange(isOpen: boolean) {
    this.isMenuOpen.set(isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
  }
}