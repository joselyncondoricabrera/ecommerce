import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {CartComponent} from './components/cart/cart.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { UpdateFormProductComponent } from './components/update-form-product/update-form-product.component';

const routes: Routes = [
  // {path:'', component:MenuComponent},
  {path:'', component: HomeComponent,
   children: [
    {path:'', redirectTo: "/menu", pathMatch: "full"},
    {path:'menu', component: MenuComponent },
    {path:'cart' , component: CartComponent},
   ]},

  {path:'MenuAdmin', component: MenuAdminComponent},
  {path:'login', component: LoginComponent},
  {path:'formProduct', component: FormProductComponent},
  {path:'updateFormProduct', component: UpdateFormProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
