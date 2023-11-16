import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-customer-panel',
  templateUrl: './customer-panel.component.html',
  styleUrls: ['./customer-panel.component.scss'],
})
export class CustomerPanelComponent implements OnInit {
  orderDetails: any;
  currentUser = JSON.parse(localStorage.getItem('currentUser'))[0];
  totalAmount = 0;
  constructor(private userData: UserDataService) { }
  ngOnInit(): void {
    this.userData.getUserOrderData().subscribe((res) => {
      this.orderDetails = res;
      console.log(res);
    });
  }

}
