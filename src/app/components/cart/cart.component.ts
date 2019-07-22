import { Doctor } from './../../domain/doctor';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  data: Doctor[];
  totalAmount = 0;

  constructor(private service: CartService) { }

  ngOnInit() {
    this.data = this.service.getCartDoctors();
    this.totalAmount = this.service.getCartTotalAmount();
    console.log('ngOnInit ds cartcomponents.ts , taille: ' + this.totalAmount);
  }

order() {
  console.log('new appointment has been processed..')
}

}
