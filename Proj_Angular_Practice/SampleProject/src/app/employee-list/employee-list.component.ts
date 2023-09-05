import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/Employee.service';
import { Employee } from '../classes/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] = [];

  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployeesFromHTTP().subscribe(data => this.employees = data);
  }

}
