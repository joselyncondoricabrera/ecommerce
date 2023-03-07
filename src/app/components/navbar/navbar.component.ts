import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  qty : number = 0;
  //nombre de estilos
  style_li_menu: string = "";
  style_li_cart:string = "navbar-cart navbar-opcion";
  style_icono_cart:string = "icono_cart";

  constructor( ){
    // ejecutando menos de un segundo la función getQuantity()
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
 

  // metodos para cambiar estilos de los li del navbar
  activeMenu(){
    console.log("click menu");
    this.style_li_menu = "lila";
    this.style_li_cart = "navbar-cart navbar-opcion";
    this.style_icono_cart= "icono_cart";
  }
  activeCart(){
    console.log("click cart");
    this.style_li_cart = "navbar-cart lila";
    this.style_li_menu= "navbar-opcion";
    console.log(this.style_li_menu);
    this.style_icono_cart= "icono_cart_select";
  }

}
