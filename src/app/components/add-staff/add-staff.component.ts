import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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

  // addStaffGroup: FormGroup;
  // formBuilder: FormBuilder = new FormBuilder();

  designation = new Designation();
  formStaff = new Staff();
  // addedStaff: Staff;

  constructor(private staffService: StaffService,
              public staffListServ: StaffListService) { }

  ngOnInit() {
    this.formStaff.designation = this.designation;
    // this.addStaffGroup = this.formBuilder.group({
    //   firstname: '',
    //   lastname: '',
    //   phonenumber: '',
    //   designation: this.formBuilder.group({
    //     position: '',
    //     salary: ''
    //   })
    // });
  }


  // addStaff() {
  //   const staffInfo = this.addStaffGroup.value;
  //   this.addStaffGroup.reset();

  //   const newStaff: Staff = {
  //     firstName: staffInfo.firstname,
  //     lastName: staffInfo.lastname,
  //     phoneNumber: staffInfo.phonenumber,
  //     designation: staffInfo.designation
  //   };
  //   console.log('Clicked Add button');
  //   console.log( newStaff);

  //   this.staffService.addStaff( newStaff ).subscribe( res => this.staffListServ.staffList.unshift(res) );

  //   console.log('New Added staff ' + this.addedStaff);
  // //  this.staffList.add(this.addedStaff);
  // }

  addStaff() {
    console.log(this.formStaff);
       this.staffService.addStaff( this.formStaff ).subscribe( res => this.staffListServ.staffList.unshift(res) );
  }
}
