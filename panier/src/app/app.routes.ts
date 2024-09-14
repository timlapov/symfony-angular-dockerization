import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {ContactComponent} from "./contact/contact.component";
import {LayoutComponent} from "./layout/layout.component";
import {Error404Component} from "./error404/error404.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  { path: '**', component: Error404Component }
];
