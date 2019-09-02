import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { AboutComponent } from './about/about.component';
import { BarchartComponent } from './components/charts/barchart/barchart.component';
import { DoughnutchartComponent } from './components/charts/doughnutchart/doughnutchart.component';
import { RadarchartComponent } from './components/charts/radarchart/radarchart.component';
import { PiechartComponent } from './components/charts/piechart/piechart.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    CustomersComponent,
    AboutComponent,
    BarchartComponent,
    DoughnutchartComponent,
    RadarchartComponent,
    PiechartComponent,
    NotificationsComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    DragDropModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
