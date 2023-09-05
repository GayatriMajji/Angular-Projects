export class Employee {
    constructor(employeeID: number, employeeName: string, employeeLocation: string, employeeDomain: string, employeeExperience: number) {
        this.employeeID = employeeID;
        this.employeeName = employeeName;
        this.employeeLocation = employeeLocation;
        this.employeeDomain = employeeDomain;
        this.employeeExperience = employeeExperience;

    }
    employeeID: number;
    employeeName: string;
    employeeLocation: string;
    employeeDomain: string;
    employeeExperience: number;
}