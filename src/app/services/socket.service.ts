import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root',
})
export class SocketService {

  public users$: BehaviorSubject<string> = new BehaviorSubject('');
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io('http://localhost:3000');

  public sendMessage(message: any) {
    this.socket.emit('message', message);
  }

  public addUser(user: string) {
    this.socket.emit("new user", user);
  }

  public activeUsers = () => {
    this.socket.emit('active users');
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };

  public getActiveUsers = () => {
    this.socket.on('active users', (userList) =>{
      this.users$.next(userList);
    });
    
    return this.users$.asObservable();
  }

}