import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {


  updateCategoryForm!: FormGroup

  constructor(private fb: FormBuilder, private catgeoryService: CategoryService, private router: Router, private route: ActivatedRoute) {

    this.updateCategoryForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
      ])
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']

    this.catgeoryService.getCategoryById(id).subscribe({
      next: (result) => {
        this.updateCategoryForm.patchValue({
          name: result.name
        })
      },
      error: (err) => { console.log(err) }
    })
  }

  get name() { return this.updateCategoryForm.get('name') }

  updateCategory() {
    let data = this.updateCategoryForm.value
    let id = this.route.snapshot.params['id']

    let category = new Category(id, data.name)

    this.catgeoryService.updateCategory(category).subscribe(
      {
        next: (result) => {
          this.router.navigateByUrl("/categories/list")
        },
        error: (err) => { console.log(err) }
      }
    )
  }

}
