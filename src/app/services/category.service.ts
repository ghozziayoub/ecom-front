import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseCategoriesUrl = BaseService.baseUrl + "/categories"

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<any>(this.baseCategoriesUrl)
  }


}
