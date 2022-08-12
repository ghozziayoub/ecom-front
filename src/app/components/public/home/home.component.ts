import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categoriesList: any[] = []
  public productsList: any[] = []

  public allProductsList: any[] = []
  public cart: any[] = []


  constructor(private categoriesService: CategoryService, private productSerivce: ProductService) { }

  ngOnInit(): void {
    // fetch all categories
    this.categoriesService.getAllCategories().subscribe({
      next: (result) => { this.categoriesList = result },
      error: (err) => { console.log(err) }
    })

    // fetch all products 
    this.productSerivce.getAllProducts().subscribe({
      next: (result) => {
        this.productsList = result
        this.allProductsList = result
      },
      error: (err) => { console.log(err); }
    })
  }

  filterByCategory(idCategory: String) {
    if (idCategory == "all") {
      this.productsList = this.allProductsList
    } else {
      this.productsList = this.allProductsList.filter(product => product.idCategory == idCategory)
    }
  }

  addToCart(id: string) {
    // add product to local storage
    // get product by serie
    let product = this.allProductsList.find((prod) => { return prod._id == id })

    // add product to 
    let productInCart = this.cart.find((prod) => { return prod._id == id })

    if (productInCart == null) {
      product.qte = 1
      this.cart.push(product)
    } else {
      let index = this.cart.indexOf(productInCart)
      this.cart[index].qte++
    }

    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

}
