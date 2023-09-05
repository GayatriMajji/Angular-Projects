import { Injectable } from "@angular/core";
import { Employee } from "../classes/employee";
import { HttpClient } from '@angular/common/http';
import { IEmployee } from "../interfaces/IEmployee";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    private url: string = "../../assets/employee.json"

    constructor(private http: HttpClient) {

    }
    
    // employees: Employee[] = [new Employee(1, 'EmployeeOne', 'LocationOne', 'DomainOne', 12),
    // new Employee(2, 'EmployeeTwo', 'LocationTwo', 'DomainTwo', 12),
    // new Employee(3, 'EmployeeThree', 'LocationThree', 'DomainThree', 12),
    // new Employee(4, 'EmployeeFour', 'LocationFour', 'DomainFour', 12),
    // new Employee(5, 'EmployeeFive', 'LocationFive', 'DomainFive', 12),
    // new Employee(6, 'EmployeeSix', 'LocationSix', 'DomainSix', 12),
    // new Employee(7, 'EmployeeSeven', 'LocationSeven', 'DomainSeven', 12)];

    // getEmployees() {
    //     return this.employees;
    // }

    getEmployeesFromHTTP(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.url);
    }
    
}


