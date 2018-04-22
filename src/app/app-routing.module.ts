import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { StaffComponent } from './components/staff/staff.component';

const routes: Routes = [
  { path: 'addStaff', component: AddStaffComponent },
  { path: 'staffs', component: StaffComponent },
  { path: '', redirectTo: '/staffs', pathMatch: 'full' },


];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
