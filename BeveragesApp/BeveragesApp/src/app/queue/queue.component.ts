import { Component, OnInit } from '@angular/core';
import { IOrder } from '../interfaces/IOrder';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})

export class QueueComponent implements OnInit {

  Orders: IOrder[] = [];
  OrdersJson: any;

  InQueueId = 1;
  InMakingId = 2;
  InReadyToCollectId = 3;
  CanRemoveOrder = 0;

  ngOnInit(): void {
    this.OrdersJson = localStorage.getItem("OrdersList");
    if (this.OrdersJson) {
      this.Orders = JSON.parse(this.OrdersJson);
    }
  }

  changeStage(orderId: any, stageId: any, changeToStageId: any) {
    if (changeToStageId != 0) {
      this.Orders.forEach(element => {
        if (element.OrderId == orderId)
          element.StageId = changeToStageId;
      });
    }
    else {
      this.removeOrder(orderId);
    }
  }

  removeOrder(orderId: any) {
    var index = this.Orders.findIndex(x => x.OrderId == orderId);
     this.Orders.splice(index,1)
    localStorage.setItem("OrdersList", JSON.stringify(this.Orders));
  }

}
