import { Component, computed, inject } from '@angular/core';
import { RealtimeStatus } from '../../shared/components/realtime-status/realtime-status';
import { SensorsService } from '../../services/sensors-service';
import { ChartData, ChartOptions, ScatterDataPoint } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import 'chartjs-adapter-date-fns';

type XY = ScatterDataPoint; // {x: number, y: number}

@Component({
  selector: 'app-graphic',
  imports: [RealtimeStatus, BaseChartDirective],
  templateUrl: './graphic.html',
  styleUrl: './graphic.css',
})
export class Graphic {
  private sensorsService = inject(SensorsService);

  chartType: 'line' = 'line';

  // Data
  chartData = computed<ChartData<'line', XY[], number>>(() => {
    return {
      datasets: [
        {
          label: 'Temperature',
          data: (this.sensorsService.data() ?? []).map((d) => ({
            x: new Date(d.date).getTime(),
            y: d.temperature,
          })),

          // affichages
          borderColor: 'red',
          pointRadius: 5,
        },

        {
          label: 'Humidité',
          data: (this.sensorsService.data() ?? []).map((d) => ({
            x: new Date(d.date).getTime(),
            y: d.humidity,
          })),

          // affichages
          borderColor: 'blue',
          pointRadius: 3,
        },
      ],
    };
  });

  chartOptions: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
      },
      y: {
        beginAtZero: true,
      },
    },
  };
}
