import { Component } from '@angular/core';
import { RequestHttpService } from '../../requestHttp.service';
import { Product } from 'src/app/product';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-form-product',
  templateUrl: './update-form-product.component.html',
  styleUrls: ['./update-form-product.component.css']
})
export class UpdateFormProductComponent {
   // datos de configuracion
   cloudName = "dntbtu6w4";
   uploadPreset = "angular_cloudinary";
   myWidget : any;

   public product :Product = {
    id: 0,
    title:"",
    price : 0,
    image: ""
   };

   ngOnInit(){
    this.myWidget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: this.cloudName,
        uploadPreset: this.uploadPreset
      },
      (error:any, result:any) => {
        if(!error && result && result.event === "success"){
          console.log("Done! Here is the image info: ", result.info);
          
          console.log(result.info.secure_url);
          this.product.image = result.info.secure_url;
        
        } 
        
       

      }
    );
   }

  constructor(public requesthttp : RequestHttpService, public router : Router){
    
    const  id = this.requesthttp.idProduct;

    this.requesthttp.searchById(id).subscribe((res:any)=>{
      console.log(res);

      this.product.id = res.id;
      this.product.title = res.title;
      this.product.price = res.price;
      this.product.image = res.image;
    });




  }
  changeImage(){
    console.log("cambiando");
    //llamando a cloudinary - abrir widget
    this.myWidget.open();

  }


  modifyProduct(){
  
    //mostrar modal de confirmación para actualizar

    Swal.fire({
      title: 'Modificar este producto?',
      text: "No podrás revertir esto!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar !',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto modificado',
          showConfirmButton: false,
          timer: 1500
        })
          // actualizar en el servidor
        this.requesthttp.updateProduct(this.product).subscribe((res)=>{
          console.log(res);

          //mueve la ruta a formulario menuAdmin
           this.router.navigate(['./MenuAdmin'])
        });

        
      }
    });


  }

}
