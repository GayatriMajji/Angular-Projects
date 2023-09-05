import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeveragesComponent } from './beverages/beverages.component';
import { QueueComponent } from './queue/queue.component';

const routes: Routes = [
  {path: 'beverages', component: BeveragesComponent},
  {path: 'queue', component: QueueComponent},
  {path: '',  component: BeveragesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
