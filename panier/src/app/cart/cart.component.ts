import {Component, inject} from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import {DecimalPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    JsonPipe,
    DecimalPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartService = inject(CartService);
}
