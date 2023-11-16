import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  currentUserEmail = JSON.parse(localStorage.getItem('currentUser'))[0][
    'email'
  ];
  constructor(private firebase: AngularFirestore) {}

  saveOrderData(orderDetail: {}) {
    var date = new Date();
    var orderDate = date.toLocaleString();
    let data = {
      ...orderDetail,
      email: this.currentUserEmail,
      id: this.firebase.createId(),
      orderId: Math.round(Math.random() * 10000000000),
      orderTime: orderDate,
    };
    console.log(data);

    this.firebase
      .collection('userData')
      .add(data)
      .then(() => {
        console.log('Order Success!');
      });
  }
  getUserOrderData() {
    return this.firebase
      .collection('userData', (ref) =>
        ref.where('email', '==', this.currentUserEmail)
      )
      .valueChanges();
  }
}
