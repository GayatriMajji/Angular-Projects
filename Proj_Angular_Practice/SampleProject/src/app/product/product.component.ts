import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { Product } from '../classes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  // products: Product[] = [
  //   {
  //     "productName": "gadget",
  //     "productPrice": "120"
  //   }
  // ];

  products: Product[] = [];

  @Input() addNewProduct: any;

  constructor() {
  }

  ngOnChanges(changes:SimpleChange) {
    console.log(this.addNewProduct);
    //console.log(changes)
    //this.products.push({ productName: this.addNewProduct.productName, productPrice: this.addNewProduct.productPrice });
    //console.log(this.products)
  }
  
  ngOnInit(): void {
    console.log(this.addNewProduct);
  }

  ngAfterViewInit(): void {
    console.log(this.addNewProduct)
  }

}

