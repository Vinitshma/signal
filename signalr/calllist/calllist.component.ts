import { Component, OnInit } from '@angular/core';
import { CalllistService } from '../Service/calllist.service';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-calllist',
  templateUrl: './calllist.component.html',
  styleUrls: ['./calllist.component.css']
})
export class CalllistComponent implements OnInit {

  private _hubConnection!: HubConnection;
  notificationTRes:any;
  
  message!:string;
  userType:string="";

  constructor(private serve:CalllistService) { }

  ngOnInit(): void {
    this._hubConnection = new HubConnectionBuilder()
    .withUrl('https://localhost:7287/notify', {
      skipNegotiation:true,
      transport:signalR.HttpTransportType.WebSockets
    }).build();

    this._hubConnection.on('ReceivedMessage', (message) => {
      console.log(message);
      this.notificationTRes = message;
    });

    this._hubConnection.start()
    .then(() => console.log('connection started'))
    .catch((err) => console.log('error while establishing signalr connection: ' + err));
  }

  public sendMessage(): void { 
    let method = "SendMessageToAll";
    if(this.userType == "Myself"){
       method = "SendMessageToCaller";
    }
    
    console.log(method, this.message);
    this._hubConnection.invoke(method, this.message)
      .catch((error: any) => {
        console.log('sending message error -> ' + error);
      });
      this.message= "";
  }

  // private onMessageReceived(serverMessage: string) {
  //   this.notificationTRes = serverMessage;
  //   console.log('New message received from Server: ' + serverMessage);
  // }
}
