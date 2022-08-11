import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/private/categories/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/private/categories/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/categories/category-update/category-update.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { OrdersListComponent } from './components/private/orders/orders-list/orders-list.component';
import { ProductAddComponent } from './components/private/products/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/products/product-update/product-update.component';
import { ProductsListComponent } from './components/private/products/products-list/products-list.component';
import { SubCategoriesListComponent } from './components/private/subcategories/sub-categories-list/sub-categories-list.component';
import { SubCategoryAddComponent } from './components/private/subcategories/sub-category-add/sub-category-add.component';
import { SubCategoryUpdateComponent } from './components/private/subcategories/sub-category-update/sub-category-update.component';
import { CartComponent } from './components/public/cart/cart.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { Page404Component } from './components/public/page404/page404.component';
import { RegisterComponent } from './components/public/register/register.component';
import { AuthAdminGuard } from './guards/auth-admin.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthAdminGuard]
  },
  {
    path: "categories",
    canActivateChild: [AuthAdminGuard],
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
    canActivateChild: [AuthAdminGuard],
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
    path: "sub-categories",
    canActivateChild: [AuthAdminGuard],
    children: [
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
      },
      {
        path: "list",
        component: SubCategoriesListComponent
      },
      {
        path: "add",
        component: SubCategoryAddComponent
      },
      {
        path: "update/:id",
        component: SubCategoryUpdateComponent
      }
    ]
  },
  {
    path: "orders",
    canActivateChild: [AuthAdminGuard],
    children: [
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
      },
      {
        path: "list",
        component: OrdersListComponent
      }
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
