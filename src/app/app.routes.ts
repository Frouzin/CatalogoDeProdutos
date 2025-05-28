import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'post/:id', component: ProductDetailsComponent  },
  { path: '**', redirectTo: '' }
];
