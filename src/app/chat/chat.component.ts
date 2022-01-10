import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit{
  newMessage: string | undefined;
  messageList: string[] = [];
  showMessage: Boolean=false;

  constructor(private chatService: SocketService){

  }

  ngOnInit(){
    this.messageList = [];
    this.chatService.getActiveUsers().subscribe((users: string) => {
      console.log(users);
      this.messageList.push(users);
    });
    this.chatService.getNewMessage().subscribe((message: string) => {
      console.log(message);
      this.messageList.push(message);
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  joinChat(){
    let userName = localStorage.getItem('uname');
    if (userName) {
      console.log(userName)
      this.chatService.addUser(userName);
    }
    this.chatService.activeUsers();
    this.showMessage=true;
  }

  ngOnDestroy() {
    this.showMessage=false;
    this.messageList = [];
    this.chatService.destroyEmit();
  }

}