import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../../@types/pokemon';
import { BaseChartDirective } from 'ng2-charts';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-pokemon-details',
  imports: [BaseChartDirective],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.css'
})
export class PokemonDetails {
  private route = inject(ActivatedRoute);
  private httpClient = inject(HttpClient);
  pokemon: Pokemon|undefined;

  barChartData: ChartData = {
    labels: ['hp', 'atk', 'def', 'spe_atk', 'spe_def', 'vit'],
    datasets: [{ label: '', data: [] }]
  };

  constructor() {
    const id = this.route.snapshot.params['id'];
    this.httpClient.get<Pokemon>('https://tyradex.app/api/v1/pokemon/' + id).subscribe({
      next: (response) => {
        this.pokemon = response;
        this.barChartData.datasets.push({
          label:  response.name.fr,
          data: [
            response.stats?.atk ?? 0,
            response.stats?.def ?? 0,
            response.stats?.hp ?? 0,
            response.stats?.spe_atk ?? 0,
            response.stats?.spe_def ?? 0,
            response.stats?.vit ?? 0,
        ]});
      },
      error: () => {}
    })
  }
}
