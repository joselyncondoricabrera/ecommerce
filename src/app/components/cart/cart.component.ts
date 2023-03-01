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


    // const pro = sessionStorage.getItem("producto");
    // console.log(JSON.parse(pro || '{}') );

    // this.showProducts(JSON.parse(pro || '{}'));

    this.showProducts();

  }
 
  incrementCant( cant : number, productId : number){
    console.log("incrementando");
  
    let productList = JSON.parse(sessionStorage.getItem("producto") || '[]');

    productList= productList.map((pro: any)=>{
      if(pro.id === productId){
        pro.quantity = pro.quantity + 1;
      }
      return pro;
    });

    sessionStorage.setItem("producto", JSON.stringify(productList)),
    this.products = productList;

    console.log(productList);
  }

  decrementCant(cant:  number , productId : number){ 
    if(cant > 1){
      let productList = JSON.parse(sessionStorage.getItem("producto") || '[]');

      productList= productList.map((pro: any)=>{
        if(pro.id === productId){
          pro.quantity = pro.quantity - 1;
        }
        return pro;
      });
  
      sessionStorage.setItem("producto", JSON.stringify(productList)),
      this.products = productList;
  
      console.log(productList);

    }
    
  }

  showProducts(){
    const productos  = JSON.parse(sessionStorage.getItem("producto") || '[]' );
    
    console.log(productos);

    this.products = productos;

  }

  deleteItemProduct(productId : number){
    console.log("elimando item");
    console.log(productId);

    const productsList = JSON.parse(sessionStorage.getItem("producto") || '[]')
    let newproductsList = productsList.filter((prod : any) => prod.id !== productId);
    sessionStorage.setItem("producto",JSON.stringify(newproductsList));
    window.location.reload();
  }


}
