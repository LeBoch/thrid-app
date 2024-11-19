import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  name: string = '';
  price: number = 0;
  quantity: number = 0;
  checked: boolean = false;

  constructor(private productService: ProductService) {}

  addProduct() {
    const newProduct: Product = {
      id: Date.now(),
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      checked: this.checked
    };
    this.productService.addProduct(newProduct);

    // Reset form
    this.name = '';
    this.price = 0;
    this.quantity = 0;
    this.checked = false;
  }
}