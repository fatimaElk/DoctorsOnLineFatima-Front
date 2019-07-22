import { Doctor } from './../domain/doctor';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData: Doctor[] = [];
  private messageSource = new BehaviorSubject(0);
  currentCartLengthChanged = this.messageSource.asObservable();

  constructor() { }

  addToCart(doctor: Doctor): void {
    // Test if the product is already in the cart
    if (this.cartData.indexOf(doctor) === -1) {
      this.cartData.push(doctor);
      this.messageSource.next(this.cartData.length);
    }
  }
  getCartDoctors(): Doctor[] {
    return this.cartData;
  }
  getCartLength(): number {
    return this.cartData.length;
  }
  getCartTotalAmount(): number {
    let total = 0;
    this.cartData.forEach(record => total += 1);
    return total;
  }
  resetCart(): void {
    this.cartData = [];
  }




}
