import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Data } from '../../../@types/data';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // ingredients = [
  //   { nom: 'Sel' }, 
  //   { nom:'Tomates' }, 
  //   { nom:'Sucre' }
  // ];

  // students = ['Patrick', 'Simon', 'Ugur'];

  data: Data[]|undefined;

  private httpClient = inject(HttpClient);

  constructor(
    /*private httpClient: HttpClient*/
  ) {
    // setTimeout(() => {
    //   this.ingredients = [
    //     { nom:'Sel' }, 
    //     { nom:'Poivre' }, 
    //     { nom:'Tomates' }, 
    //     { nom:'Sucre' }
    //   ];
    //   this.students = ['Patrick', 'Ugur'];
    // }, 5000)
    // connection à l'api
    this.httpClient.get<Data[]>('http://localhost:5097/api/data', { 
      // permet d'ajouter les paramètres de requète (?limit=50)
      params: { limit: 50 } 
    })
    // apres avoir recupérer les données
    .subscribe({ 
        // ce que je vais faire en cas de success 
        next: data => {
          //console.log(data)
          this.data = data
        },
        // ce que je vais faire en cas d'erreur
        error: () => {}
      });
  }

  // trackFn(i: number, ing: any) {
  //   return ing.nom;
  // }
}
