import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CartDataService, Product } from '../shared/cart-data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private cart: CartDataService, private auth: AuthService) { }
  items = this.cart.cartdata.length;
  isAuth = false;
  headerCart = [];
  cartData = localStorage.getItem('cart');
  objCart: Product[] = JSON.parse(this.cartData);
  totalAmount = 0;
  dataSource;
  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
      if (user) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });

    this.cart.cart$.subscribe((res) => {
      this.items = res.length;
      this.dataSource = res;
      this.totalAmount = 0;
      res.map((product) => {
        this.totalAmount += product.price * product.amount;
      });
      if (res.length > 3) {
        this.headerCart = res.slice(0, 3);
      } else {
        this.headerCart = res;
      }
      console.log(this.totalAmount);
    });
  }
  logout() {
    this.auth.logout();
  }
  productCart(index: number, method: string) {
    this.cart.data(this.dataSource[index], method);
    this.ngOnInit();
  }
  // buttonToggle(){
  //   document.getElementById('btn').classList.remove('popover  ')
  // }
}
