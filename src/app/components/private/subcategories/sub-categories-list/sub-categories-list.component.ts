import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-sub-categories-list',
  templateUrl: './sub-categories-list.component.html',
  styleUrls: ['./sub-categories-list.component.css']
})
export class SubCategoriesListComponent implements OnInit {
  public subCategoriesList: any[] = []

  constructor(private subCategoriesService: SubCategoryService) { }

  ngOnInit(): void {
    this.subCategoriesService.getAllSubCategories().subscribe({
      next: (result) => { this.subCategoriesList = result },
      error: (err) => { console.log(err) }
    })
  }

  deleteSubCategory(subCategory: any, index: any) {
    this.subCategoriesList.splice(index, 1)

    this.subCategoriesService.deleteSubCategory(subCategory._id).subscribe(
      {
        next: (result) => { console.log(result) },
        error: (err) => { console.log(err) }
      }
    )

  }

}
