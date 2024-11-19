import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product A', price: 100, quantity: 10, checked: true },
    { id: 2, name: 'Product B', price: 200, quantity: 5, checked: false }
  ];

  private productSubject = new BehaviorSubject<Product[]>(this.products);
  products$ = this.productSubject.asObservable();

  addProduct(product: Product) {
    this.products.push(product);
    this.productSubject.next([...this.products]);
  }
}