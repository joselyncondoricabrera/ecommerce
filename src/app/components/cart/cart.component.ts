import { Component } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products : Array<any> =[];

  constructor(public menuService : MenuService){
    // console.log(this.products);
    // this.products = menuService.arrayProducts;
    // console.log(this.products);


    // const pro = localStorage.getItem("producto");
    // console.log(JSON.parse(pro || '{}') );

    // this.showProducts(JSON.parse(pro || '{}'));

    this.showProducts();

  }

  incrementCant( cant : number){
    console.log("incrementando");
    console.log(cant);


  }

  showProducts(){
    const productos  = JSON.parse(localStorage.getItem("producto") || '[]' );
    
    console.log(productos);

    this.products = productos;

  }


}
