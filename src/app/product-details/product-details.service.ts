import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private firestore: AngularFirestore) {}
  getProduct(id: string) {
    return this.firestore
      .collection('products', (ref) => ref.where('id', '==', id))
      .valueChanges();
  }
  getSimilarProducts(category: string) {
    return this.firestore
      .collection('products', (ref) => ref.where('category', '==', category))
      .valueChanges();
  }
}
