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
    // menuService.productsSelection;
    // console.log(menuService.productsSelection);
    this.products = menuService.productsSelection;
    console.log(this.products);
  }



}
