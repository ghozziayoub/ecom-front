import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public categoriesList: any[] = []
  public subCategoriesList: any[] = []
  public addProductForm!: FormGroup

  constructor(private fb: FormBuilder, private categoryServicce: CategoryService, private subCategoriesService: SubCategoryService, private productService: ProductService, private router: Router) {
    this.addProductForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
      ]),
      image: new FormControl('', [
        Validators.required,
      ]),
      price: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ]),
      idCategory: new FormControl(''),
      idSubCategory: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.categoryServicce.getAllCategories().subscribe({
      next: result => { this.categoriesList = result },
      error: err => { console.log(err) }
    })

    this.subCategoriesService.getAllSubCategories().subscribe({
      next: (result) => { this.subCategoriesList = result },
      error: (err) => { console.log(err) }
    })
  }

  addProduct() {
    let data = this.addProductForm.value
    let product = new Product(undefined, data.name, data.price, data.image, data.description, data.idCategory, data.idSubCategory)

    this.productService.addProduct(product).subscribe({
      next: (result) => { this.router.navigateByUrl("/products/list") },
      error: (err) => { console.log(err) }
    })
  }

}
