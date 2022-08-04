import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  addCategoryForm!: FormGroup

  constructor(private fb: FormBuilder, private catgeoryService: CategoryService, private router: Router) {

    this.addCategoryForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
      ])
    })
  }

  ngOnInit(): void {
  }

  get name() { return this.addCategoryForm.get('name') }

  addCategory() {
    let data = this.addCategoryForm.value
    let category = new Category(undefined, data.name)

    this.catgeoryService.addcategory(category).subscribe(
      {
        next: (result) => {
          this.router.navigateByUrl("/categories/list")
        },
        error: (err) => { console.log(err) }
      }
    )
  }

}
