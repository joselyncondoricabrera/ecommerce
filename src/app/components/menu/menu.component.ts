import { Component} from '@angular/core';
import { RequestHttpService } from '../../requestHttp.service';

import {CloudinaryImage} from '@cloudinary/url-gen';
import {fill} from '@cloudinary/url-gen/actions/resize';

interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string,
  quantity: number,
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent{
  //muestra en el menu los cards de productos
  public products : Product[] = [];

  //almacena productos seleccionados
  public arrayProducts : any[] = [];

  //almacena cantidad de productos seleccionados
  public quantity : number = 0;

  myImage =  new CloudinaryImage('sample', {cloudName: 'dntbtu6w4'}).resize(fill().width(100).height(150));


constructor( public requesthttp: RequestHttpService){

}

ngOnInit(){
  this.requesthttp.getProducts().subscribe((res)=>{

    this.products = res.map((pro: any)=>{
      return {...pro, quantity : 1};
    });

  });

  if(window.sessionStorage.length > 0){
    let productList = JSON.parse(sessionStorage.getItem("producto") || '[]');
    this.arrayProducts = productList;
    console.log(this.arrayProducts);
  }



}

 // método añadir producto
  addProduct(productselect : Product){

    //contabiliza cada click de agregar
    this.quantity = this.quantity +1;
    console.log(this.quantity);


    console.log(productselect);

    if (this.arrayProducts.length === 0) {
      this.arrayProducts.push(productselect);
    } else {

      let value = 0;
      this.arrayProducts.forEach((pro) => {
        if (pro.id === productselect.id) {
          this.arrayProducts = this.arrayProducts.map((pro: any) => {
            if (pro.id === productselect.id) {
              pro.quantity = pro.quantity + 1;
              value = 1;
            }
            return pro;
          });
        } else {

        }
      });
      if (value === 0) {
        this.arrayProducts.push(productselect);
      }


    }
    sessionStorage.setItem("producto",JSON.stringify(this.arrayProducts));
    // window.location.reload();

  }

}
