import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StaffComponent } from './components/staff/staff.component';
import { StaffService } from './services/staff.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { StaffListService } from './services/staff-list.service';
// import { StaffListService } from './services/staff-list.service';


@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    AddStaffComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StaffService, StaffListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
