export class Order {

    constructor(OrderId: number, CustomerName: string, BeverageName: string) {
            this.OrderId = OrderId;
            this.CustomerName = CustomerName;
            this.BeverageName = BeverageName;
    }

    OrderId : number;
    CustomerName : string;
    BeverageName : string;

}

