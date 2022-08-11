import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  public categoriesList: any[] = []
  public subCategoriesList: any[] = []
  public updateProductForm!: FormGroup

  constructor(private fb: FormBuilder, private categoryServicce: CategoryService, private subCategoriesService: SubCategoryService, private productService: ProductService, private router: Router, private route: ActivatedRoute) {
    this.updateProductForm = this.fb.group({
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
    let id = this.route.snapshot.params['id']

    this.productService.getProductById(id).subscribe({
      next: result => {
        this.updateProductForm.patchValue({
          name: result.name,
          image: result.image,
          price: result.price,
          description: result.description,
          idCategory: result.idCategory,
          idSubCategory: result.idSubCategory,
        })
      },
      error: err => { console.log(err) }
    })

    this.categoryServicce.getAllCategories().subscribe({
      next: result => { this.categoriesList = result },
      error: err => { console.log(err) }
    })

    this.subCategoriesService.getAllSubCategories().subscribe({
      next: (result) => { this.subCategoriesList = result },
      error: (err) => { console.log(err) }
    })
  }

  updateProduct() {
    let data = this.updateProductForm.value
    let id = this.route.snapshot.params['id']

    let product = new Product(id, data.name, data.price, data.image, data.description, data.idCategory, data.idSubCategory)

    this.productService.updateProduct(product).subscribe({
      next: (result) => { this.router.navigateByUrl("/products/list") },
      error: (err) => { console.log(err) }
    })
  }


}
