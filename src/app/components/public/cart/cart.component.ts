import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public productsList: any[] = []
  public totalTag: string = ""

  constructor() { }

  ngOnInit(): void {
    this.displayProducts()
  }

  displayProducts() {

    let products = JSON.parse(localStorage.getItem('cart')!)
    let totalPrice = 0
    if (products != null && products.length > 0) {

      for (let i = 0; i < products.length; i++) {
        this.productsList = products
        totalPrice += products[i].price * products[i].qte
      }

    }

    this.totalTag = totalPrice + " DT"

  }

}
