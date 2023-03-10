import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RevenueComponent } from './revenue/revenue.component';
import { EarningsProductsComponent } from './earnings-products/earnings-products.component';

@NgModule({
  declarations: [
    AppComponent,
    RevenueComponent,
    EarningsProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
