import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../services/beverages.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IOrder } from '../interfaces/IOrder';
import { IBeverage } from '../interfaces/iBeverage';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr/public_api';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  beverages: IBeverage[] = [];
  orders: IOrder[] = [];
  OrdersList: any;

  orderForm = new FormGroup({

    CustomerName: new FormControl(''),
    BeverageName: new FormControl('')

  })

  constructor(private _beverageService: BeverageService, private _toaster: ToastrService) {

  }

  ngOnInit(): void {
    this._beverageService.getBeveragesFromHTTP().subscribe(data => this.beverages = data);
  }

  addCustomerOrder() {
    if (this.orderForm.value.BeverageName && this.orderForm.value.CustomerName) {
      this.OrdersList = localStorage.getItem("OrdersList");
      if (this.OrdersList) {
        this.orders = JSON.parse(this.OrdersList);
      }
      this.orders.push({
        "OrderId": this.orders.length + 1,
        "CustomerName": this.orderForm.value.CustomerName!,
        "BeverageName": this.orderForm.value.BeverageName!,
        "StageId": 1
      });
      localStorage.setItem("OrdersList", JSON.stringify(this.orders))
      this._toaster.success('Order Placed', 'Success');

      this.orderForm.controls.BeverageName.setValue('');
      this.orderForm.controls.CustomerName.setValue(null);
    }
  }
}
