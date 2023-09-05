import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddNewComponent } from './add-new/add-new.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: 'add-new', component: AddNewComponent},
  {path: 'vehicle', component: VehicleComponent},
  {path: 'employee-detail', component: EmployeeDetailComponent},
  {path: 'user-data', component: UserDataComponent},
  {path: 'user-details', component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
