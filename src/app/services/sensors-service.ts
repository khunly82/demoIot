import { effect, inject, Injectable, signal } from '@angular/core';
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

    // s'abonner au changement d'une valeur des signaux
    effect(() => {
      const newItem = this.realtimeSensor.incoming();

      if (newItem) {
        // ajouter newItem dans data
        this.data.update((previous) => {
          const list = previous ?? [];
          // const liste1 = ["a", "b", "c"]
          // const liste2 = [list1, "d"]
          // log => [["a", "b", "c"], "d"] ❌

          // const liste2 = [...list1, "d"] usage de "..." pour sortir tout les éléments de liste1
          // log => ["a", "b", "c", "d"] ♥️

          // "..." = JS spread operator
          return [newItem, ...list];
        });
      }
    });
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
