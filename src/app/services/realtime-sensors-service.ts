import { Injectable, signal } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class RealtimeSensorsService {
  private connection: HubConnection | null = null;

  // Etat de la connexion
  isConnected = signal(false);

  constructor() {
    this.startConnectionAsync();
  }

  async startConnectionAsync() {
    // préparation de la connexion
    this.connection = new HubConnectionBuilder()
      .withUrl('http://localhost:5097/realtime-sensors')
      .build();

    // connexion au serveur
    await this.connection.start();

    if (this.connection.connectionId) {
      // Nous somme connecté!
      console.log('SignalR connectionId: ' + this.connection.connectionId);

      this.connection.on('ReceiveSensorData', (data) => {
        console.log(data);
      });
    }
  }
}
