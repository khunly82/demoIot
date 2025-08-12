import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  ingredients = [
    { nom: 'Sel' }, 
    { nom:'Tomates' }, 
    { nom:'Sucre' }
  ];

  students = ['Patrick', 'Simon', 'Ugur'];

  constructor() {
    setTimeout(() => {
      this.ingredients = [
        { nom:'Sel' }, 
        { nom:'Poivre' }, 
        { nom:'Tomates' }, 
        { nom:'Sucre' }
      ];
      this.students = ['Patrick', 'Ugur'];
    }, 5000)
  }

  // trackFn(i: number, ing: any) {
  //   return ing.nom;
  // }
}
