import { Injectable } from '@angular/core';
import {Observable, ObservedValuesFromArray} from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string,
  quantity: number,
}

interface User {
  username: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    private api_url = "https://localhost:7063/api/Product";
    private url_auth = "https://localhost:7063/api/usuario/login";

  
    //api fake
    // private api_url = "https://fakestoreapi.com/products";
    //private url_auth = 'https://fakestoreapi.com/auth/login';

    arrayProducts: any[] =[];


  constructor( public http: HttpClient) {
  }

//mostrar productos
  getProducts() : Observable<any>{
    return this.http.get(this.api_url);
  }

 //autenticar al usuario
  authUsers(user:User) : Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body = JSON.stringify(user);
    return this.http.post(this.url_auth,body,{'headers':headers});
  }


 // mostrar cantidad de productos
  
 



//  //agregar productos al carrito
//   addProducts(productselect : any) {
//     this.arrayProducts.push(productselect);

//   // trae productos diferentes
//     this.arrayProducts = this.arrayProducts.filter((pro,index)=>{
//       return  this.arrayProducts.indexOf(pro) === index;
//     });

//   }

}
