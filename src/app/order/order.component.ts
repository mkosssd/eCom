import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { CartDataService } from '../shared/cart-data.service';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  orderForm: FormGroup;
  constructor(
    private cartData: CartDataService,
    private userData: UserDataService
  ) { }

  productId = '';
  product: any;
  numRegex = /\d+$/;
  totalItems = 0;
  objOrderData = [];
  totalAmount = 0;
  ngOnInit(): void {
    let user = localStorage.getItem('currentUser');
    let ObjUser = JSON.parse(user);
    let orderData = localStorage.getItem('cart') || '';
    this.objOrderData = JSON.parse(orderData);
    this.objOrderData.map(
      (res) => (this.totalAmount += res.price * res.amount)
    );
    this.orderForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),

      house_number: new FormControl('', Validators.required),
      area_sector: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      pincode: new FormControl(null, [Validators.required, Validators.pattern(this.numRegex)]),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      contact: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.numRegex),
      ]),
    });
    this.orderForm.patchValue({
      name: `${ObjUser[0].firstName} ${ObjUser[0].lastName}`,
      email: `${ObjUser[0].email}`,
    });
    this.totalItems = this.cartData.cartdata.length;
  }
  formHandler() {
    let cartItems = this.cartData.cartdata;
    let totalAmount = 0;
    cartItems.map((item) => {
      totalAmount += item.amount * item.price;
    });
    let orderData = {
      cartItems,
      deliveryDetail: this.orderForm.value,
      totalAmount,
    };
    this.userData.saveOrderData(orderData);
    cartItems.map((item) => {
      console.log(item.id);
      this.cartData.handleOrder(item.id, item.amount, item.stock);
    });
    console.log(this.orderForm.value);

  }

  stateJson = {
    "AN": "Andaman and Nicobar Islands",
    "AP": "Andhra Pradesh",
    "AR": "Arunachal Pradesh",
    "AS": "Assam",
    "BR": "Bihar",
    "CG": "Chandigarh",
    "CH": "Chhattisgarh",
    "DN": "Dadra and Nagar Haveli",
    "DD": "Daman and Diu",
    "DL": "Delhi",
    "GA": "Goa",
    "GJ": "Gujarat",
    "HR": "Haryana",
    "HP": "Himachal Pradesh",
    "JK": "Jammu and Kashmir",
    "JH": "Jharkhand",
    "KA": "Karnataka",
    "KL": "Kerala",
    "LA": "Ladakh",
    "LD": "Lakshadweep",
    "MP": "Madhya Pradesh",
    "MH": "Maharashtra",
    "MN": "Manipur",
    "ML": "Meghalaya",
    "MZ": "Mizoram",
    "NL": "Nagaland",
    "OR": "Odisha",
    "PY": "Puducherry",
    "PB": "Punjab",
    "RJ": "Rajasthan",
    "SK": "Sikkim",
    "TN": "Tamil Nadu",
    "TS": "Telangana",
    "TR": "Tripura",
    "UP": "Uttar Pradesh",
    "UK": "Uttarakhand",
    "WB": "West Bengal"
  }
}
