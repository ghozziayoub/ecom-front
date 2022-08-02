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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent,
    CategoriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
