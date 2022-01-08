import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../jwt.service';
import { SocketioService } from '../socketio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
  
// several hooks
// see https://stackoverflow.com/questions/41579709/how-to-implement-multiple-lifecycle-hooks-for-an-angular2-component
export class AdminComponent implements OnInit, OnDestroy {

  messageForm: FormGroup;
  msg: string; // received messages
  sendmsg: string; // message to send
  userName = "";

  constructor(private jwtService: JwtService, private router: Router, private socketService: SocketioService, private formBuilder: FormBuilder) {
    this.msg = "";
  }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      msginput: [],
    });
    this.userName = localStorage.getItem('access_token').split(";")[0];
    // setup connection
    this.socketService.setupSocketConnection();
    // register on message here
    this.socketService.socket.on('message', (mtext: string) => {
      if (mtext) {
        this.msg += mtext + "\n";
      }
    });
    
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  submit() {
    console.log("Emit message: " + this.sendmsg);
    this.socketService.socket.emit('message', this.sendmsg);
  }

  logout() {
    this.jwtService.logout();
    this.router.navigateByUrl('/login');
  }
}
