import { Component } from '@angular/core';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {
  public products : any =[];

  constructor( public menuservice:MenuService){
    this.menuservice.getProducts().subscribe((res)=>{
      console.log(res);
      this.products = res;
    });

  }

}
