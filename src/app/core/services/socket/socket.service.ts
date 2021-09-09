import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { AuthenticationService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket:any;
  constructor(private auth:AuthenticationService) {

   }
   connction(){
    this.socket = io("http://localhost:3001",{path: '/kiven/anonymous',query:{auth:(<any>this.auth.user).token}});
    this.socket.on("connect", (socket) => {
      
    });
   }
   
}
