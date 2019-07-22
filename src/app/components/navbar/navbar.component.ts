import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapse: boolean = false;
  cartLength: number = 0;
  constructor(private cart: CartService) {
}

ngOnInit() {
    this.cart.currentCartLengthChanged.subscribe(
    res => this.cartLength = res );
  }

}
