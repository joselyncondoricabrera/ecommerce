import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nameUser : string ="";
  password: string="";

  singIn( ){
    console.log(this.nameUser);
    console.log(this.password);
  }

}
