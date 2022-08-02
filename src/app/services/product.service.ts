import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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


}
