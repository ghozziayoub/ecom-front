import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  public categoriesList: any[] = []

  constructor(private categoriesService: CategoryService) { }

  ngOnInit(): void {

    this.categoriesService.getAllCategories().subscribe(
      {
        next: (result) => {
          this.categoriesList = result
        },
        error: (err) => { }
      }
    )
  }

}
