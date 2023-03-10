import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';

import {HttpClientModule} from '@angular/common/http';
import {RequestHttpService} from './requestHttp.service';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { LoginComponent } from './components/login/login.component';
import { FormProductComponent } from './components/form-product/form-product.component';

import {CloudinaryModule} from '@cloudinary/ng';
import { UpdateFormProductComponent } from './components/update-form-product/update-form-product.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    CartComponent,
    MenuAdminComponent,
    LoginComponent,
    FormProductComponent,
    UpdateFormProductComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CloudinaryModule,
    CommonModule
  ],
  providers: [
    RequestHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
