import { Injectable } from '@angular/core';
import {mockProducts} from "../mockProducts";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAllProducts() {
    return mockProducts;
  }
}
