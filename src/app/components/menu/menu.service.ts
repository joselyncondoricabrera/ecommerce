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

  //eliminar un producto
  deletedProduct(id : number): Observable<any>{
    return this.http.delete(`https://localhost:7063/api/Product/${id}`);
  }
 
}
