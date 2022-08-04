import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/private/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/private/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/category-update/category-update.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { ProductAddComponent } from './components/private/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/product-update/product-update.component';
import { ProductsListComponent } from './components/private/products-list/products-list.component';
import { HomeComponent } from './components/public/home/home.component';
import { Page404Component } from './components/public/page404/page404.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "categories",
    children: [
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
      },
      {
        path: "list",
        component: CategoriesListComponent
      },
      {
        path: "add",
        component: CategoryAddComponent
      },
      {
        path: "update/:id",
        component: CategoryUpdateComponent
      },
    ]
  },
  {
    path: "products",
    children: [
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
      },
      {
        path: "list",
        component: ProductsListComponent
      },
      {
        path: "add",
        component: ProductAddComponent
      },
      {
        path: "update/:id",
        component: ProductUpdateComponent
      },
    ]
  },
  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
