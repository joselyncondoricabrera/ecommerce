import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Product {
  title: string,
  description: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    private api_url = "https://fakestoreapi.com/products";
    productsSelection: Product[] =[];

  constructor( public http: HttpClient) { 
  }

  getProducts() : Observable<any>{
    return this.http.get(this.api_url);
  }

  addProducts(productselect : Product) {
    console.log(this.productsSelection);
    return this.productsSelection.push(productselect);
  }
}