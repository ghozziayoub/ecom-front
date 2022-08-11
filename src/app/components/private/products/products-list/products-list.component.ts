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

  deleteProduct(product: any, index: any) {
    this.productsList.splice(index, 1)

    this.productSerivce.deleteProduct(product._id).subscribe(
      {
        next: (result) => { console.log(result) },
        error: (err) => { console.log(err) }
      }
    )

  }

}
