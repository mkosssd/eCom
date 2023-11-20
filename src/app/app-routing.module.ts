import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    // loadChildren: () => import('./products/products.routing.module').then(m => m.ProductsModule)
    component:ProductsComponent
  },

  { path: 'cart', component: CartComponent, loadChildren: () => import('./cart/cart.routing.module').then((m) => m.CartModule)},

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  {
    path: 'product/:id',
    // component: ProductDetailsComponent,
        loadChildren: () => import('./product-details/product-details.routing.module').then(m => m.ProductsModule)

  },
  { path: 'user-profile', loadChildren: () => import('./customer-panel/customer.routing.module').then((m) => m.CustomerModule), canActivate: [AuthGuard] },
  { path: '**', component: ErrorPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
