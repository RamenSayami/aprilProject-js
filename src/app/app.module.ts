import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StaffComponent } from './components/staff/staff.component';
import { StaffService } from './services/staff.service';
import { HttpModule } from '@angular/http';
import { AddStaffComponent } from './components/add-staff/add-staff.component';


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
    ReactiveFormsModule
  ],
  providers: [StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
