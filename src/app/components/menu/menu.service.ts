import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    private api_url = "https://fakestoreapi.com/products";

  constructor( public http: HttpClient) { 
  }

  getProducts() : Observable<any>{
    return this.http.get(this.api_url);
  }
}