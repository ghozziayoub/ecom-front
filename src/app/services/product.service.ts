import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseProductsUrl = BaseService.baseUrl + "/products"

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>(this.baseProductsUrl)
  }

  getProductById(id: string) {
    return this.http.get<any>(`${this.baseProductsUrl}/${id}`)
  }

  deleteProduct(id: string) {
    return this.http.delete<any>(`${this.baseProductsUrl}/${id}`)
  }

  addProduct(product: Product) {
    return this.http.post<any>(this.baseProductsUrl, product)
  }

  updateProduct(product: Product) {
    return this.http.patch<any>(`${this.baseProductsUrl}/${product._id}`, product)
  }


}
