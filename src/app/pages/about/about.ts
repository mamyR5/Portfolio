// about.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface MinimalEducation {
  period: string;
  degree: string;
  details: string;
  svgIcon: string;
  institution:string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private sanitizer = inject(DomSanitizer);

   introSentence = "Voici les formations que j'ai fait durant mon parcours.";

  icons = {
    university: `<svg viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>`,
    school: `<svg viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    award: `<svg viewBox="0 0 24 24" fill="none" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`
  };

  educationPath: MinimalEducation[] = [
    {
      period: "Sept 2023 - Présent",
      degree: "Licence en Informatique (3ème année)",
      details: "Spécialisation dans l'option Web & Design.",
      svgIcon: this.icons.university,
      institution:'IT University'
    },
    {
      period: "Sept 2022 - Juillet 2023",
      degree: "Baccalauréat Scientifique (Série C)",
      details: "Baccalauréat acquis avec <span class='subtitle'>Mention Assez Bien</span>.",
      svgIcon: this.icons.school,
      institution:'For Twelve School'
    },
    {
      period: "Sept 2019 - Juin 2020",
      degree: "Brevet d'Études du Premier Cycle (BEPC)",
      details: "Validation du premier cycle d'études secondaires (Option B) avec Lauréat.",
      svgIcon: this.icons.award,
      institution:'For Twelve School'
    }
  ];

  getSafeSvg(svgString: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }
}