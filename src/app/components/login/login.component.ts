import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu/menu.service';
import jwt_decode from 'jwt-decode';



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

    let token = ""

    this.menuservice.authUsers(user).subscribe({
      next: (res) => {
        console.log(res.result);
        token= res.result;

        //decodificar token
        console.log(this.getDecodedAccessToken(token).rol);
        //obtener el rol
        const rol = this.getDecodedAccessToken(token).rol;

        
        if(rol == "administrador"){
          console.log("tabla de productos");
          // this.router.navigate(["/menu"]);

        } else {
          console.log("autenciación correcta");
          this.router.navigate(["/menu"]);
        }

      },
      error: (err) =>{
        console.log("cuenta incorrecta");
      }

    });
  }

  //decodificar token
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }



}

