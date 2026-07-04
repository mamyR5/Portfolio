import { Component } from '@angular/core';
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

  isMenuOpen = false; // Le menu est fermé par défaut

  navLinks: NavLink[] = [
    {
      path: '/about',
      label: 'About'
    },
    {
      path: '/skills',
      label: 'Skills'
    },
    {
      path: '/projects',
      label: 'Projects'
    }

  ];

  toggleMenu() {
    if(this.isMenuOpen){
      console.log('Misokatra ilay hamburger...');
    }else{
      console.log('Mihidy ilay hamburger...');
    }

    this.isMenuOpen = !this.isMenuOpen;
  }

}
