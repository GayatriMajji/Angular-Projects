import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeService } from './services/Employee.service';
import { ProductComponent } from './product/product.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HeaderComponent } from './header/header.component';
import { AddNewComponent } from './add-new/add-new.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ChangeTextDirective } from './directives/change-text.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { UserDataComponent } from './user-data/user-data.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [AppComponent, ProductComponent, VehicleComponent, HeaderComponent, AddNewComponent, 
    EmployeeListComponent, EmployeeDetailComponent, HighlightDirective, ChangeTextDirective, FilterPipe, SearchPipe, UserDataComponent, UserDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  exports:[FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
