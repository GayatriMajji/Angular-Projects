import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../services/beverages.service'; 
import { IBeverage } from '../interfaces/iBeverage';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss']
})

export class BeveragesComponent implements OnInit{

  beverages: IBeverage[] = [];

  constructor( private _beverageService: BeverageService) {

  }

  ngOnInit(): void {
    
    this._beverageService.getBeveragesFromHTTP().subscribe(data => this.beverages = data);
    
  }

}
