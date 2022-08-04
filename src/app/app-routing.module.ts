import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/private/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/private/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/category-update/category-update.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
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
    path: "categories-list",
    component: CategoriesListComponent
  },
  {
    path: "category-add",
    component: CategoryAddComponent
  },
  {
    path: "category-update/:id",
    component: CategoryUpdateComponent
  },
  {
    path: "products-list",
    component: ProductsListComponent
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
