import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{

  formData: any;
  firstName: string;
  lastName: string;
  emailAddress: any;
  department: string;

  ngOnInit(): void {
    this.formData = new FormGroup({
        firstName: new FormControl("Gayatri"),
        lastName: new FormControl("Majji"),
        emailAddress: new FormControl("gr@outlook.com"),
        department: new FormControl("IT")
    })
  }

  onSubmit(formData: any) {
    console.log('Form is submitted.', formData);
    this.firstName = formData.firstName
    this.lastName = formData.lastName
    this.emailAddress = formData.emailAddress
    this.department = formData.department
  }

}
