import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DashboardComponent,
  ProductsComponent ,
  OrdersComponent,
  CustomersComponent,
  NotificationsComponent
} from './pages';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'notifications', component: NotificationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
