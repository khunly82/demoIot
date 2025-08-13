import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Data } from '../../../@types/data';
import { SensorsService } from '../../services/sensors-service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // ingredients = [
  //   { nom: 'Sel' },
  //   { nom:'Tomates' },
  //   { nom:'Sucre' }
  // ];

  // students = ['Patrick', 'Simon', 'Ugur'];

  private sensorsService = inject(SensorsService);

  sensorsData = this.sensorsService.data;

  constructor /*private httpClient: HttpClient*/() {
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
  }

  // trackFn(i: number, ing: any) {
  //   return ing.nom;
  // }

  onBtnRefresh() {
    console.log("J'ai cliqué sur le bouton refresh!");
    this.sensorsService.fetchSensorsData();
  }
}
