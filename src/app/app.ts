import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  open = true;

  links: Links = [
    { path: '/home', title: 'Accueil' },
    { path: '/pokedex', title: 'Pokedex' },
    // { path: '/about', title: 'A propos' },
    { path: '/login', title: 'Se Connecter' },
    { path: '/graphic', title: 'Graphics' },
  ];

  clickHandler() {
    this.open = !this.open;
  }
}
