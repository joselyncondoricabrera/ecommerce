import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  routeLink : string = "";
  nameUser : string ="";
  password: string="";

  constructor(public menuservice : MenuService, private router : Router){

  }

  singIn( ){
    let user = {
      "username":"",
      "password" :"",
    };
    user.username = this.nameUser;
    user.password = this.password

    console.log(user);

    this.menuservice.authUsers(user).subscribe((res) => {
      
      console.log(res);
        this.router.navigate(["/menu"]);
    },
    (error)=>{
      console.log(error);
      this.router.navigate(["/cart"]);
    });
  }

}
