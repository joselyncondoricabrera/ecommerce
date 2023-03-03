import { Component } from '@angular/core';
import { MenuService } from '../menu/menu.service';


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

  //objeto producto alamcena los datos del form
  product: Product = {
    title: "",
    price:0,
    image: ""
  };


  ngOnInit(){
   
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

          this.product.image=result.info.secure_url
     
        }
      }
    );

  }
   constructor( public menuservice : MenuService){

   }
 
  changeImage(){
    console.log("ho");
    this.myWidget.open();
  }

  saveNewProduct(){
    console.log(this.product);
    this.menuservice.addProduct(this.product).subscribe((res)=>{
      console.log(res);
    });
    
  }
 
  



}
