import { Component } from '@angular/core';
import { RealtimeStatus } from '../../shared/components/realtime-status/realtime-status';

@Component({
  selector: 'app-graphic',
  imports: [RealtimeStatus],
  templateUrl: './graphic.html',
  styleUrl: './graphic.css',
})
export class Graphic {}
