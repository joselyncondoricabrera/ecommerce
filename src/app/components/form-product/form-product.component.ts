import { Component } from '@angular/core';
import { RequestHttpService} from '../../requestHttp.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


interface Product {
  title:string,
  price: number,
  image:string
}
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  //configuración del cloudinary
  cloudName = "dntbtu6w4";
  uploadPreset = "angular_cloudinary";
  myWidget : any;

  //imagen producto
  url_img = "../../../assets/producto.jpg";

  //objeto producto alamcena los datos del form
  product: Product = {
    title: "",
    price:0,
    image: ""
  };


  ngOnInit(){
    //inicializar  el cloudinary
    this.myWidget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: this.cloudName,
        uploadPreset: this.uploadPreset

      },
      (error:any, result:any) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          //trae la url de la imagen
          // console.log(result.info.secure_url);
          this.product.image=result.info.secure_url;
          this.url_img = result.info.secure_url;

        }
      }
    );

  }

   constructor( public requesthttp : RequestHttpService, public router: Router){

   }

  changeImage(){
    console.log("ho");
    this.myWidget.open();
  }

  saveNewProduct(){

    // mostrar modal de confirmacion
    Swal.fire({
      title: 'Agregar este producto?',
      text: "",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, agregar',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto guardado',
          showConfirmButton: false,
          timer: 1500
        })

        //guardar en el servidor
        console.log(this.product);
        this.requesthttp.addProduct(this.product).subscribe((res)=>{
          console.log(res);
         this.router.navigate(['./MenuAdmin']);
        });

        
      }
    })



    // this.requesthttp.addProduct(this.product).subscribe((res)=>{
    //   this.router.navigate(['./MenuAdmin']);
    //  });

     
     



   

  }





}
