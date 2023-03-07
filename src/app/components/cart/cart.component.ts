import { Component } from '@angular/core';
import { RequestHttpService } from 'src/app/requestHttp.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products : Array<any> =[];
  mountTotal : number = 0;

  constructor( public requesthttp : RequestHttpService){
    this.showProducts();
    this.calculateTotal();
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

    //actualiza el monto total
    this.calculateTotal();

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
      //actualiza el monto total
       this.calculateTotal();

    }

  }

  showProducts(){
    const productos  = JSON.parse(sessionStorage.getItem("producto") || '[]' );

    this.products = productos;

  }

  deleteItemProduct(productId : number){
    console.log("elimando item");
    console.log(productId);

    const productsList = JSON.parse(sessionStorage.getItem("producto") || '[]')
    let newproductsList = productsList.filter((prod : any) => prod.id !== productId);
    sessionStorage.setItem("producto",JSON.stringify(newproductsList));

    // volver a cargar la data de productos
    this.showProducts();
    //actualiza el monto total
    this.calculateTotal();

  }

  //calcular total
  calculateTotal(){
    let productsList = JSON.parse(sessionStorage.getItem("producto") || '[]');
    let total = 0;
    console.log(productsList);
    productsList.forEach( (pro: any) => {
      total = total + (pro.quantity * pro.price);
    });

    this.mountTotal = total;
    console.log(this.mountTotal);

  }


}
