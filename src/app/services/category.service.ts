import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from "@angular/common/http"
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseCategoriesUrl = BaseService.baseUrl + "/categories"

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get<any>(this.baseCategoriesUrl)
  }

  deleteCategory(id: string) {
    return this.http.delete<any>("http://localhost:3001/categories/" + id)
  }

  addcategory(category: Category) {
    return this.http.post<any>(this.baseCategoriesUrl, category)
  }


}
