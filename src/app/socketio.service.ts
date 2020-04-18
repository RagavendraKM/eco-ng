import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from '../environments/environment'

import { Headers, RequestOptions, ResponseType, ResponseContentType } from '@angular/http';
import { Observable, Observer } from 'rxjs';
import { Http, Response } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;

  constructor(private http: Http) { }

  setupSocketConnection() {
    console.log("coming here")
    this.socket = io(environment.SOCKET_ENDPOINT);

    return Observable.create((observer: Observer<any>) => {
      this.socket.on('data', response => {
        observer.next(response);
         console.log(response);
      });
    });
  }
}
