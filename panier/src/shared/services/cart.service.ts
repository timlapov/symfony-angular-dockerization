import { Injectable } from '@angular/core';
import {ICart, IProduct} from "../entities";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: ICart[] = [];

  addToCart(product: IProduct) {
    this.cart.push({product: product, quantity: 1});
  }

  plusQuantity(product: IProduct) {
    let index = this.cart.findIndex(item => item.product.id === product.id);
    this.cart[index].quantity++;
  }

  minusQuantity(product: IProduct) {
    let index = this.cart.findIndex(item => item.product.id === product.id);
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
    } else {
      this.cart.splice(index, 1);
    }
  }

  getCart() {
    return this.cart;
  }

  isEmpty() {
    return this.cart.length === 0;
  }

  itemInCart(product: IProduct) {
    return this.cart.findIndex(item => item.product.id === product.id) !== -1;
  }

  totalPriceHT() {
    let total = 0;
    this.cart.forEach(item => {
      total += item.quantity * item.product.price
    });
    return total;
  }

  totalPriceTTC() {
    return this.totalPriceHT() * 1.2;
  }

  getItemQuantity(product: IProduct): number {
    let index = this.cart.findIndex(item => item.product.id === product.id);
    return this.cart[index].quantity;
  }

  removeFromCart(productId: number) {
    this.cart.splice(this.cart.findIndex(item => item.product.id === productId), 1);
  }

  emptyCart() {
    this.cart = [];
  }
}
