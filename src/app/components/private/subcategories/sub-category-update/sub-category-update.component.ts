import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategory } from 'src/app/models/sub-category';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-sub-category-update',
  templateUrl: './sub-category-update.component.html',
  styleUrls: ['./sub-category-update.component.css']
})
export class SubCategoryUpdateComponent implements OnInit {

  public categoriesList: any[] = []
  public updateSubCategoryForm!: FormGroup

  constructor(private fb: FormBuilder, private subCatgeoryService: SubCategoryService, private categoriesService: CategoryService, private router: Router, private route: ActivatedRoute) {

    this.updateSubCategoryForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
      ]),
      idCategory: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']

    this.subCatgeoryService.getSubCategoryById(id).subscribe({
      next: (result) => { this.updateSubCategoryForm.patchValue({ name: result.name, idCategory: result.idCategory }) },
      error: (err) => { console.log(err) }
    })

    this.categoriesService.getAllCategories().subscribe({
      next: (result) => { this.categoriesList = result },
      error: (err) => { console.log(err) }
    })
  }

  get name() { return this.updateSubCategoryForm.get('name') }
  get idCategory() { return this.updateSubCategoryForm.get('idCategory') }

  updateSubCategory() {
    let data = this.updateSubCategoryForm.value
    let id = this.route.snapshot.params['id']

    let subCategory = new SubCategory(id, data.name, data.idCategory)

    this.subCatgeoryService.updateSubCategory(subCategory).subscribe(
      {
        next: (result) => {
          this.router.navigateByUrl("/sub-categories/list")
        },
        error: (err) => { console.log(err) }
      }
    )
  }

}
