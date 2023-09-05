import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {

  submit(signup: any) {
    console.log('Form is submitted.', signup);
  }

}
