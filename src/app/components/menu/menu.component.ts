import { Component} from '@angular/core';
import { MenuService } from '../menu/menu.service';

interface Product {
  title: string,
  description: string,
  price: number,
  image: string,
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent{
  public products : Product[] = [];
  public productsSelected : Product[] = [];
  

constructor( public menuservice: MenuService){
 
}

ngOnInit(){
  this.menuservice.getProducts().subscribe((res)=>{
    // console.log(res);
  //   this.products = [...this.products, 
  //     {
  //     name: res.title,
  //     descrip: res.description,
  //     price: res.price,
  //     }
  // ];
    this.products = res;
    // console.log(this.products);
  });
  
}


  addProduct(productselect : Product){
    // this.productsSelected.push(productselect);
    // console.log(this.productsSelected);

    this.menuservice.addProducts(productselect);
  }

}
