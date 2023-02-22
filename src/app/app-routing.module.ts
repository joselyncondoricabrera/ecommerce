import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CartComponent} from './components/cart/cart.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path:'', component: MenuComponent },
  {path:'menu', component: MenuComponent },
  {path:'cart' , component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
