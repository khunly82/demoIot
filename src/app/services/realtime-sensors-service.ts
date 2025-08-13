import { Injectable, signal } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Data } from '../../@types/data';

@Injectable({
  providedIn: 'root',
})
export class RealtimeSensorsService {
  private connection: HubConnection | null = null;

  // Etat de la connexion
  isConnected = signal(false);

  // Dernière donnée reçue
  incoming = signal<Data | null>(null);

  constructor() {
    this.startConnectionAsync();
  }

  async startConnectionAsync() {
    // préparation de la connexion
    this.connection = new HubConnectionBuilder()
      .withUrl('http://localhost:5097/realtime-sensors')
      .build();

    // connexion au serveur
    try {
      await this.connection.start();
    } catch (e) {
      this.isConnected.set(false);
      console.log('connexion websocket échouée');
      console.warn(e);

      setTimeout(() => {
        this.startConnectionAsync();
      }, 3000);
    }

    if (this.connection.connectionId) {
      // Nous somme connecté!
      console.log('SignalR connectionId: ' + this.connection.connectionId);
      this.isConnected.set(true);

      this.connection.on('ReceiveSensorData', (receivedData) => {
        console.log(receivedData);
        this.incoming.set(receivedData);
      });

      this.connection.onclose(async () => {
        console.log('connexion perdue :(');
        this.isConnected.set(false);

        // rappeler startConnectionAsync
        await this.connection?.stop();

        setTimeout(() => {
          this.startConnectionAsync();
        }, 3000);
      });
    }
  }
}
