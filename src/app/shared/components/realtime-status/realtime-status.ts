import { Component, inject } from '@angular/core';
import { RealtimeSensorsService } from '../../../services/realtime-sensors-service';

@Component({
  selector: 'app-realtime-status',
  imports: [],
  templateUrl: './realtime-status.html',
  styleUrl: './realtime-status.css',
})
export class RealtimeStatus {
  private realtimeSensors = inject(RealtimeSensorsService);

  isConnected = this.realtimeSensors.isConnected;
}
