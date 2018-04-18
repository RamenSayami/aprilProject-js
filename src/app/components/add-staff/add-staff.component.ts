import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Staff } from '../../model/staff';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {

  addStaffGroup: FormGroup;
  formBuilder: FormBuilder = new FormBuilder();
  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.addStaffGroup = this.formBuilder.group({
      firstname: '',
      lastname: '',
      phonenumber: '',
      designation: this.formBuilder.group({
        position: '',
        salary: ''
      })
    });
  }

  addStaff(){
    const staffInfo = this.addStaffGroup.value;

    const newStaff: Staff = {
      firstName: staffInfo.firstname,
      lastName: staffInfo.lastname,
      phoneNumber: staffInfo.phonenumber,
      designation: staffInfo.designation
    };

    //TODO send staff using post
  }
}
