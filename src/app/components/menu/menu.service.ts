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
    private api_url = "https://fakestoreapi.com/products";
    arrayProducts: Product[] =[];


  constructor( public http: HttpClient) { 
  }

  getProducts() : Observable<any>{
    return this.http.get(this.api_url);
  }

  addProducts(productselect : any) {

    console.log(productselect.rating.count);
    productselect.quantity = 1 ;
    //  console.log(productselect);

    if(this.arrayProducts.length === 0){
      this.arrayProducts.push(productselect);
    } else{
      this.arrayProducts.forEach((pro)=>{
        if(pro.id === productselect.id){
          this.arrayProducts = this.arrayProducts.map((prod)=>{
            if(prod.id === productselect.id){
              pro.quantity =pro.quantity +1;
            }
            return pro;

          });

        }
      });
    }
    
   
  // console.log(this.arrayProducts)
  //   productselect.quantity = 1 ;
  // console.log(this.arrayProducts)


  //   if(this.arrayProducts.length === 0){
  //     this.arrayProducts.push(productselect);
  //   } else{
  //     if(this.arrayProducts.indexOf(productselect) === 0){
  //       console.log("producto repetido");

  //       this.arrayProducts = this.arrayProducts.map( (pro) => {
  //         if(pro.title === productselect.title){           
  //            pro.quantity +=1;
  //           return pro;
  //         } 
  //         return pro;
  //       }); 
     

        
  //      console.log(this.arrayProducts);
   

      
  //     } 
  //     else if (this.arrayProducts.indexOf(productselect) !== 0) {
  //       this.arrayProducts.push(productselect);
  //     }
  //   }

  }
}


   
