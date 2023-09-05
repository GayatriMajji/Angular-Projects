import { Component, OnInit } from '@angular/core';
import vehicleJson from '../../assets/vehicle.json';
import { Vehicle } from '../classes/vehicle';
import { FilterPipe } from '../pipes/filter.pipe';
import { SearchPipe } from '../pipes/search.pipe';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  vehicleData: Vehicle[] = vehicleJson;
  addNewVehicle: Vehicle = { vehicleName: '', vehiclePrice: null };
  vObj: any;
  searchTerm: any; 
  key1: any;
  key2: any; 

  constructor() {
  }

  ngOnInit(): void {
    this.vObj = localStorage.getItem("vehicleObject");
    if (this.vObj) {
      this.vehicleData = JSON.parse(this.vObj);
    }
  }

  addVehicle() {
    if (this.addNewVehicle != null) {
        this.vehicleData.push({ "vehicleName": this.addNewVehicle.vehicleName, "vehiclePrice": this.addNewVehicle.vehiclePrice });
        localStorage.setItem("vehicleObject", JSON.stringify(this.vehicleData));
        console.log(this.vehicleData)
    }
  }
}
