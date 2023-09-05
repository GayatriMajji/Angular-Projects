import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BeveragesComponent } from './beverages/beverages.component';
import { QueueComponent } from './queue/queue.component';
import { OrderComponent } from './order/order.component';
import { HeaderComponent } from './header/header.component';

import { BeverageService } from './services/beverages.service';

@NgModule({
  declarations: [
    AppComponent,
    BeveragesComponent,
    QueueComponent,
    OrderComponent,
    HeaderComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [BeverageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
