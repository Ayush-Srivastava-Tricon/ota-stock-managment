import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {


  signUpConfig:any={
    name:'',
    email:'',
    password:'',
    mobile:''
  };


  constructor(){}

  signUp(){
    localStorage.setItem("user",JSON.stringify(this.signUpConfig));
  }
}


