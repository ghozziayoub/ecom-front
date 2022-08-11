import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { Page404Component } from './components/public/page404/page404.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { CategoriesListComponent } from './components/private/categories/categories-list/categories-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './components/private/products/products-list/products-list.component';
import { CategoryAddComponent } from './components/private/categories/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/categories/category-update/category-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './components/private/products/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/products/product-update/product-update.component';
import { LoginComponent } from './components/public/login/login.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { RegisterComponent } from './components/public/register/register.component';
import { SubCategoriesListComponent } from './components/private/subcategories/sub-categories-list/sub-categories-list.component';
import { SubCategoryAddComponent } from './components/private/subcategories/sub-category-add/sub-category-add.component';
import { SubCategoryUpdateComponent } from './components/private/subcategories/sub-category-update/sub-category-update.component';
import { CartComponent } from './components/public/cart/cart.component';
import { OrdersListComponent } from './components/private/orders/orders-list/orders-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    CategoriesListComponent,
    ProductsListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    SubCategoriesListComponent,
    SubCategoryAddComponent,
    SubCategoryUpdateComponent,
    CartComponent,
    OrdersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
