import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

// interface Product {
//   id: number,
//   title: string,
//   description: string,
//   price: number,
//   image: string,
//   quantity: number,
// }

interface User {
  username: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class RequestHttpService {
    private api_url = "https://localhost:7063/api/Product";
    private url_auth = "https://localhost:7063/api/Usuario/login";
    // private url_addProduct = "https://localhost:7063/api/Product";

    //obtener id
    public idProduct : number = 0;


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

  //eliminar un producto
  deletedProduct(id : number): Observable<any>{
    return this.http.delete(`https://localhost:7063/api/Product/${id}`);
  }

  // agregar producto
  addProduct(producto: object):Observable<any>{
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(producto);
    return this.http.post(this.api_url,body,{'headers': header});
  }

  //modificar producto
  updateProduct( product: Product):Observable<any>{
    const header = {'content-type': 'application/json'};
    const body = JSON.stringify(product);
    return this.http.put(`${this.api_url}/${product.id}`,body,{'headers':header});
  }

  // mandar id
  getId (id:number){
    this.idProduct = id;
  }

  //buscar producto por id
  searchById(id: number){
    return this.http.get(`${this.api_url}/${id}`);
  }
}
