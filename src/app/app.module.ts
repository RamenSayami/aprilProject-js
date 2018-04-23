import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StaffComponent } from './components/staff/staff.component';
import { StaffService } from './services/staff.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AddStaffComponent } from './components/add-staff/add-staff.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchStaffComponent } from './components/search-staff/search-staff.component';
import { DesignationService } from './services/designation.service';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    AddStaffComponent,
    SearchStaffComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [StaffService, DesignationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
