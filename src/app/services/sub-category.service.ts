import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategory } from '../models/sub-category';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  private baseSubCategoriesUrl = BaseService.baseUrl + "/subcategories"

  constructor(private http: HttpClient) { }

  getAllSubCategories() {
    return this.http.get<any>(this.baseSubCategoriesUrl)
  }

  getSubCategoryById(id: string) {
    return this.http.get<any>(`${this.baseSubCategoriesUrl}/${id}`)
  }

  deleteSubCategory(id: string) {
    return this.http.delete<any>(`${this.baseSubCategoriesUrl}/${id}`)
  }

  addSubCategory(subCategory: SubCategory) {
    return this.http.post<any>(this.baseSubCategoriesUrl, subCategory)
  }

  updateSubCategory(subCategory: SubCategory) {
    return this.http.patch<any>(`${this.baseSubCategoriesUrl}/${subCategory._id}`, subCategory)
  }

}
