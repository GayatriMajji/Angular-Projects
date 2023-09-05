import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../classes/product';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})

export class AddNewComponent implements OnInit{
  newName: string = '';
  newPrice: any = null;
  childData:any;
  newProduct:Product = new Product(this.newName, this.newPrice);
  

  //@Output() productChange:EventEmitter<Product> =new EventEmitter<Product>();

  constructor() {
  }

 ngOnInit(): void {
  }

  addNewProductEvent(data:any) {
    this.childData = data;
    
    //this.productChange.emit(this.newProduct);

  }

}
