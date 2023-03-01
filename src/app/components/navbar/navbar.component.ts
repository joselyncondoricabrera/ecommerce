import { Component } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  qty_cart : number = this.menuservice.qty;
  
  constructor( public menuservice : MenuService){

  }

  updateCart(){
   let productList = JSON.parse(sessionStorage.getItem("producto") || '[]');
   let total_qty = 0;
   productList.forEach((pro:any)=>{
    total_qty= total_qty + pro.quantity;
   });
   console.log(total_qty);
   
  }

}
