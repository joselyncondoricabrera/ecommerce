import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { RequestHttpService } from '../../requestHttp.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})

export class MenuAdminComponent {
  public products : any =[];

  constructor( public requesthttp:RequestHttpService, public router : Router){
    

  }
  ngOnInit(){
    console.log("aqui");
    this.requesthttp.getProducts().subscribe((res)=>{
      console.log(res);
      this.products = res;
      
    });

  }


  deleteProduct(id:number){

    // mostrar modal de confirmación
    Swal.fire({
      title: 'Eliminar este producto?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar !',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto eliminado!',
          showConfirmButton: false,
          timer: 1500
        })
        // eliminar data en el servidor
        this.requesthttp.deletedProduct(id).subscribe((res)=> {
          console.log(res);
          //volviendo a mostrar la data
          this.requesthttp.getProducts().subscribe((res)=>{
            console.log(res);
            this.products = res;
          });
    
        });


      }
    })

  }

  //agregar nuevo producto
  addNewProduct(){
    this.router.navigate(['/formProduct']);
  }

  updateProduct(id:number){

    //recibe el id del producto seleccionado
    this.requesthttp.getId(id);

    this.router.navigate(['./updateFormProduct']);

  }

}
