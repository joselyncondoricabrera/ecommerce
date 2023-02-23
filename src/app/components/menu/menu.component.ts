import { Component} from '@angular/core';
import { MenuService } from '../menu/menu.service';

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
  

constructor( public menuservice: MenuService){
   
}

ngOnInit(){
  this.menuservice.getProducts().subscribe((res)=>{
   
    this.products = res.map((pro: any)=>{
      return {...pro, quantity : 1};
    });
   
  });

  if(window.localStorage.length > 0){
    let productList = JSON.parse(localStorage.getItem("producto") || '[]');
    this.arrayProducts = productList;
    console.log(this.arrayProducts);
  }


 
}

 // método añadir producto 
  addProduct(productselect : Product){
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
    localStorage.setItem("producto",JSON.stringify(this.arrayProducts));
    






    // // si localstorage esta vacio
    // if(window.localStorage.length === 0){
    //   if(this.arrayProducts.length === 0){
    //     this.arrayProducts.push(productselect);
    //   } else{
    //     if( this.arrayProducts.includes(productselect)=== true){
    //       console.log("repetido");
    //       this. arrayProducts =this.arrayProducts.map((pro:any)=>{
    //         if(pro.id === productselect.id){
    //           pro.quantity = pro.quantity + 1;
    //         }
    //         return pro;
    //       });
  
    //     } else{
    //       this.arrayProducts.push(productselect);
    //     }
        
    //   }
                                                   
    //   localStorage.setItem("producto",JSON.stringify(this.arrayProducts));

    // } else { // cuando 
    //   console.log("aqui")
    //   let value = 0;
    //   this.arrayProducts.forEach((pro)=>{
    //     if(pro.id  === productselect.id ){
    //       this. arrayProducts =this.arrayProducts.map((pro:any)=>{
    //             if(pro.id === productselect.id){
    //               pro.quantity = pro.quantity + 1;
    //               value = 1;
    //             }
    //             return pro;
    //           });
    //     } else{

    //     }
    //   });
    //   if(value === 1){
    //     this.arrayProducts.push(productselect);
    //   }

    //   localStorage.setItem("producto",JSON.stringify(this.arrayProducts));


    // }
    
    
  
  }

}
