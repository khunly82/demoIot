import { Component, inject } from '@angular/core';
import { RealtimeSensorsService } from '../../../services/realtime-sensors-service';

@Component({
  selector: 'app-toast-emergency',
  imports: [],
  templateUrl: './toast-emergency.html',
  styleUrl: './toast-emergency.css',
})
export class ToastEmergency {
  private realtimeSensors = inject(RealtimeSensorsService);

  room = this.realtimeSensors.emergencyInRoom;
}
