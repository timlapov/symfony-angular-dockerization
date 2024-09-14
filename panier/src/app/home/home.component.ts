import {Component, inject} from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {DecimalPipe, NgIf} from "@angular/common";
import {CartComponent} from "../cart/cart.component";
import {CartService} from "../../shared/services/cart.service";
import {IProduct} from "../../shared/entities";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DecimalPipe,
    CartComponent,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productService = inject(ProductService);
  cartService = inject(CartService);
  products = this.productService.getAllProducts();


  addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
    console.log(this.cartService.getCart());
  }

  minusQuantity(product: IProduct): void {
    this.cartService.minusQuantity(product);
  }

  plusQuantity(product: IProduct): void {
    this.cartService.plusQuantity(product);
  }
}
