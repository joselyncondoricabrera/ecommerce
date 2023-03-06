import { Component } from '@angular/core';
import { RequestHttpService } from '../../requestHttp.service';

interface Product {
  title:string,
  price:number,
  image:string,
}

@Component({
  selector: 'app-update-form-product',
  templateUrl: './update-form-product.component.html',
  styleUrls: ['./update-form-product.component.css']
})
export class UpdateFormProductComponent {

   public product :Product ={
    title:"",
    price:0,
    image:  ""
   };

  constructor(public requesthttp : RequestHttpService){

    const  id = this.requesthttp.idProduct;

    this.requesthttp.searchById(id).subscribe((res:any)=>{
      console.log(res);

      this.product.title = res.title;
      this.product.price = res.price;
      this.product.image = res.image;
    });




  }
  changeImage(){

  }


  updateProduct(){
    // obteniendo id del producto a modificar


  }

}
