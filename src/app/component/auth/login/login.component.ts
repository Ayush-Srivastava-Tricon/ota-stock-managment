import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user:any={};
  loginConfig:any={};
  constructor(private router:Router){}

  ngOnInit(){
    this.user = JSON.parse(<any>localStorage.getItem("user"));
  }

  login() {
    if (this.user.email == this.loginConfig.email && this.user.password == this.loginConfig.password) {
      this.router.navigate(['/network_setting']);
    } else {
      alert('Invalid email or password.');
    }
  }
}
