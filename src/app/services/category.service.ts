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

  getCategoryById(id: string) {
    return this.http.get<any>(`${this.baseCategoriesUrl}/${id}`)
  }

  deleteCategory(id: string) {
    return this.http.delete<any>(`${this.baseCategoriesUrl}/${id}`)
  }

  addCategory(category: Category) {
    return this.http.post<any>(this.baseCategoriesUrl, category)
  }

  updateCategory(category: Category) {
    return this.http.patch<any>(`${this.baseCategoriesUrl}/${category._id}`, category)
  }


}
