import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsList: any[] = []

  constructor(private productSerivce: ProductService) { }

  ngOnInit(): void {
    /*
    this.productSerivce.getAllProducts().subscribe(
      (result) => { this.productsList = result },
      (err) => { console.log(err) }
    )
*/
    this.productSerivce.getAllProducts().subscribe(
      {
        next: (result) => {
          this.productsList = result
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

}
