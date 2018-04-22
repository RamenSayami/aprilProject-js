import { Component, OnInit } from '@angular/core';
import { Staff } from '../../model/staff';
import { StaffService } from '../../services/staff.service';
import { StaffComponent } from '../staff/staff.component';
import { StaffListService } from '../../services/staff-list.service';
import { NgForm } from '@angular/forms';
import { Designation } from '../../model/designation';
import { Address } from '../../model/address';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  designation = new Designation();
  formStaff = new Staff();
  address = new Address();

  serverError: String = 'Server Error! Try again later';
  showError: Boolean;

  constructor(private staffService: StaffService,
              public staffListServ: StaffListService) { }

  ngOnInit() {
    this.formStaff.designation = this.designation;
    this.formStaff.address = this.address;
    this.showError = false;
  }

  addStaff(stfFom: NgForm) {
      console.log('Staff details from public var: ');
      console.log(this.formStaff);

      console.log('Staff details from ngForm var: ');
      console.log(stfFom.value);
      this.staffService.addStaff( this.formStaff )
        .then( (res: Staff) => { this.staffListServ.staffList.unshift(  res); },
          (err) => {
            this.showError = true;
          });
      stfFom.reset();

  }
}
