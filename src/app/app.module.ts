import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { Page404Component } from './components/public/page404/page404.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { CategoriesListComponent } from './components/private/categories-list/categories-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './components/private/products-list/products-list.component';
import { CategoryAddComponent } from './components/private/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/category-update/category-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './components/private/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/product-update/product-update.component';

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
