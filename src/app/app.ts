import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastEmergency } from './shared/components/toast-emergency/toast-emergency';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, ToastEmergency],
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
