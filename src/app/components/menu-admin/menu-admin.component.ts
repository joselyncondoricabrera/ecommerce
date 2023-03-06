import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { RequestHttpService } from '../../requestHttp.service';




@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})

export class MenuAdminComponent {
  public products : any =[];



  constructor( public requesthttp:RequestHttpService, public router : Router){
    this.requesthttp.getProducts().subscribe((res)=>{
      // console.log(res);
      this.products = res;
    });

  }


  deleteProduct(id:number){
    if(confirm("Desea eliminar este producto?")){

    this.requesthttp.deletedProduct(id).subscribe((res)=> {
      console.log(res);
      //volviendo a mostrar la data
      this.requesthttp.getProducts().subscribe((res)=>{
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

    //recibe el id del producto seleccionado
    this.requesthttp.getId(id);

    this.router.navigate(['./updateFormProduct']);

  }

}
