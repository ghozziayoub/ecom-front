import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubCategory } from 'src/app/models/sub-category';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-sub-category-add',
  templateUrl: './sub-category-add.component.html',
  styleUrls: ['./sub-category-add.component.css']
})
export class SubCategoryAddComponent implements OnInit {

  public categoriesList: any[] = []
  public addSubCategoryForm!: FormGroup

  constructor(private fb: FormBuilder, private subCatgeoryService: SubCategoryService, private categoriesService: CategoryService, private router: Router) {

    this.addSubCategoryForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
      ]),
      idCategory: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (result) => { this.categoriesList = result },
      error: (err) => { console.log(err) }
    })
  }

  get name() { return this.addSubCategoryForm.get('name') }
  get idCategory() { return this.addSubCategoryForm.get('idCategory') }

  addSubCategory() {
    let data = this.addSubCategoryForm.value
    let subCategory = new SubCategory(undefined, data.name, data.idCategory)

    this.subCatgeoryService.addSubCategory(subCategory).subscribe(
      {
        next: (result) => {
          this.router.navigateByUrl("/sub-categories/list")
        },
        error: (err) => { console.log(err) }
      }
    )
  }

}
