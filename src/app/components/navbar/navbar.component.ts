import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  qty : number = 0;

  constructor( ){

    // ejecutado menos de un segundo la función getQuantity()
    setInterval(() => {
      this.qty= this.getQuantity()
    }, 10);

  }

  updateCart(){
   let productList = JSON.parse(sessionStorage.getItem("producto") || '[]');
   let total_qty = 0;
   productList.forEach((pro:any)=>{
    total_qty= total_qty + pro.quantity;
   });
   console.log(total_qty);

  }

  getQuantity (): number {
    let listProduct = JSON.parse(sessionStorage.getItem("producto") || '[]');
    let qty= 0;
    listProduct.forEach((pro:any) => {
      qty = qty + pro.quantity;
    });
    return qty;
  }

}
