import { Component, OnInit } from '@angular/core';
import { Staff } from '../../model/staff';
import { StaffService } from '../../services/staff.service';
import { StaffComponent } from '../staff/staff.component';
import { StaffListService } from '../../services/staff-list.service';
import { NgForm } from '@angular/forms';
import { Designation } from '../../model/designation';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  designation = new Designation();
  formStaff = new Staff();

  constructor(private staffService: StaffService,
              public staffListServ: StaffListService) { }

  ngOnInit() {
    this.formStaff.designation = this.designation;
  }

  addStaff(stfFom: NgForm) {
      console.log('Staff details to add in DB: ');
      console.log(this.formStaff);
      this.staffService.addStaff( this.formStaff ).subscribe( res => this.staffListServ.staffList.unshift(res) );
      stfFom.reset();

  }
}
