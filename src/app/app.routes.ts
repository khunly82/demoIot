import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';

export const routes: Routes = [
    // si on ne met rien, le router redirige vers home
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'login', component: Login },
];
