import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatFormField } from '@angular/material/form-field';
// import { MatInput } from '@angular/material/input';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { User } from '../user';
import { JwtService } from '../jwt.service';

// for RegisterDialog
export interface DialogData {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private jwtService: JwtService, private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog) { }

  loginForm: FormGroup;
  isSubmitted = false;
  // form element values
  username: string;
  email: string;
  password: string;

  // Data from register form
  rUsername: string;
  rEmail: string;
  rPassword: string;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '350px',
      // input data empty at first
      // data: { username: "", email: "", password: ""}
      data: { username: this.username, email: this.email, password: this.password }
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log("dialogRef.afterClosed data: ");
      console.log(data);
      console.log("dialogRef.componentInstance.data");
      console.log(dialogRef.componentInstance.data);
      
      this.username = dialogRef.componentInstance.data.username;
      this.email = dialogRef.componentInstance.data.email;
      this.password = dialogRef.componentInstance.data.password;

      //this.jwtService.register(this.loginForm.value); // ???
      this.jwtService.register(data); 
      console.log('The register dialog was closed');
      
      
      this.router.navigateByUrl('/admin');
    });
  }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.jwtService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }
}

@Component({
  selector: 'register-dialog',
  templateUrl: 'register-dialog.html',
})

export class RegisterDialog {
  constructor( // private injector: Injector
    public dialogRef: MatDialogRef<RegisterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData

  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
