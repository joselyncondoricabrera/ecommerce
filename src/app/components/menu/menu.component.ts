import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';

interface Product {
  name: string,
  descrip: string,
  price: number
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit{
  public products : Product[] = [];
  

constructor( public menuservice: MenuService){
 
}
ngOnInit(){
  this.menuservice.getProducts().subscribe((res)=>{
    console.log(res);
    this.products = [...this.products,{
      name: res.title,
      descrip: res.description,
      price: res.price,
    }];
    // console.log(this.products);
  });
  
}


  addProduct(){
    console.log("producto");
  }

}
