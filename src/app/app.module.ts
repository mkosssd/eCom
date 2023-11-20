import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { ProductsComponent } from './products/products.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../enviroments/enviroments';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CustomerPanelComponent } from './customer-panel/customer-panel.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgxSliderModule } from 'ngx-slider-v2';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    ProductsComponent,
    CartComponent,
    LoaderComponent,
    LoginComponent,
    SignUpComponent,
    OrderComponent,
    ProductDetailsComponent,
    ErrorPageComponent,
    CustomerPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule,
    NgxSliderModule,
    ReactiveFormsModule,
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
