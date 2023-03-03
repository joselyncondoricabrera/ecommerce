import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu/menu.service';




@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})

export class MenuAdminComponent {
  public products : any =[];
 
  

  constructor( public menuservice:MenuService, public router : Router){
    this.menuservice.getProducts().subscribe((res)=>{
      console.log(res);
      this.products = res;
    });

  }
  

  deleteProduct(id:number){
    if(confirm("Desea eliminar este producto?")){
       
    this.menuservice.deletedProduct(id).subscribe((res)=> {
      console.log(res);
      //volviendo a mostrar la data
      this.menuservice.getProducts().subscribe((res)=>{
        console.log(res);
        this.products = res;
      });

    });

    }
  }
  addNewProduct(){
    this.router.navigate(['/formProduct']);

  }

  updateProduct(id:number){

  }

}
