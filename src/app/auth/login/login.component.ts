import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl(null, {validators:[Validators.required, Validators.email]}),
      password: new FormControl(null, {validators:[Validators.required, Validators.minLength(6)]})
    });
  }
onSubmi(){
  if(this.loginForm.invalid){
    return;
  }
}
}
