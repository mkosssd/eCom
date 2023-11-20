import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartDataService, Product } from '../shared/cart-data.service';
import { ProductDetailsService } from './product-details.service';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productService: ProductDetailsService,
    private actRoute: ActivatedRoute,
    private cartServ: CartDataService
  ) {}
  productId: string;
  similarCategory: Product[];
  productData: Product;
  ngOnInit(): void {
    this.actRoute.params.subscribe(() => {
      this.getProductData();
    });
    this.getProductData();
  }
  prods: any;
  cartData: any;
  isAdd = false;
  getProductData() {
    this.actRoute.params.subscribe((res) => {
      this.productId = res['id'];
    });
    this.productService
      .getProduct(this.productId)
      .subscribe((res: Product[]) => {
        this.productData = res[0];

        this.productService
          .getSimilarProducts(res[0]['category'])
          .subscribe((res: Product[]) => {
            if (res.length > 4) {
              this.similarCategory = res.splice(0, 4);
            } else {
              this.similarCategory = res;
            }
          });
        let storedPro = localStorage.getItem('cart') || '[]';
        this.prods = JSON.parse(storedPro);

        let index = this.prods.findIndex(
          ({ id }) => id === this.productData.id
        );

        if (index >= 0) {
          this.isAdd = true;
          this.cartData = this.prods[index];

          this.cartData = this.prods[index];
        } else {
          this.isAdd = false;
          this.cartData = this.productData;
        }
      });
  }
  productCart(method: string) {
    this.cartServ.data(this.productData, method);
    this.getProductData();
  }
  toggleCart() {
    this.productCart('add');
    this.productData.isAdd = !this.productData.isAdd;
    this.getProductData();
  }
}
