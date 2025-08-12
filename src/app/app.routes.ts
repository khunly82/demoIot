import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Pokedex } from './components/pokedex/pokedex';
import { PokemonDetails } from './components/pokemon-details/pokemon-details';

export const routes: Routes = [
    // si on ne met rien, le router redirige vers home
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'pokedex', component: Pokedex },
    { path: 'pokemon/:id', component: PokemonDetails }
];
