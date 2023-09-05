import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/Employee.service';
import { Employee } from '../classes/employee';
import { IEmployee } from '../interfaces/IEmployee';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit{

  employees: Employee[] = [];

  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    //this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployeesFromHTTP().subscribe(data => this.employees = data);
   
  }

}
