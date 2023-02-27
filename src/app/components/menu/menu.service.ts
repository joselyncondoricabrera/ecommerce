import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string,
  quantity: number,
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    private api_url = "https://localhost:7063/api/Product";

    //api fake
    // private api_url = "'https://fakestoreapi.com/products";

    arrayProducts: any[] =[];


  constructor( public http: HttpClient) {
  }

  getProducts() : Observable<any>{
    return this.http.get(this.api_url);
  }

  addProducts(productselect : any) {
    this.arrayProducts.push(productselect);

  // trae productos diferentes
    this.arrayProducts = this.arrayProducts.filter((pro,index)=>{
      return  this.arrayProducts.indexOf(pro) === index;
    });

  }

}