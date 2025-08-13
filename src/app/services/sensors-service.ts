import { inject, Injectable, signal } from '@angular/core';
import { Data } from '../../@types/data';
import { HttpClient } from '@angular/common/http';
import { RealtimeSensorsService } from './realtime-sensors-service';

@Injectable({
  providedIn: 'root',
})
export class SensorsService {
  data = signal<Data[] | null>(null);

  private httpClient = inject(HttpClient);
  private realtimeSensor = inject(RealtimeSensorsService);

  constructor() {
    this.fetchSensorsData();
  }

  fetchSensorsData() {
    this.httpClient
      .get<Data[]>('http://localhost:5097/api/data', {
        // permet d'ajouter les paramètres de requète (?limit=50)
        params: { limit: 50 },
      })
      // apres avoir recupérer les données
      .subscribe({
        // ce que je vais faire en cas de success
        next: (data) => {
          //console.log(data)
          this.data.set(data);
        },
        // ce que je vais faire en cas d'erreur
        error: () => {},
      });
  }
}
