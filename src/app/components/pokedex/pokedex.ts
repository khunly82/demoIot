import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Pokemon } from '../../../@types/pokemon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  imports: [CommonModule, RouterModule],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css'
})
export class Pokedex {
  private httpClient = inject(HttpClient);
  pokemons: Pokemon[]|undefined;

  constructor() {
    this.loadPokemon()
  }

  loadPokemon() {
    this.httpClient.get<Pokemon[]>('https://tyradex.app/api/v1/pokemon', {
      // observe: 'events'
    }).subscribe({
      next: (response) => {
        this.pokemons = response;
      },
      error: () => {},
      //complete: () => { console.log('requete terminée'); }
    })  
  }
}
