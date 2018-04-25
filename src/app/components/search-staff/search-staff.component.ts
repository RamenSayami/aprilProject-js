import { Component, OnInit } from '@angular/core';
import { Designation } from '../../model/designation';
import { StaffService } from '../../services/staff.service';
import { DesignationService } from '../../services/designation.service';
import { Staff } from '../../model/staff';

@Component({
  selector: 'app-search-staff',
  templateUrl: './search-staff.component.html',
  styleUrls: ['./search-staff.component.css']
})
export class SearchStaffComponent implements OnInit {

  designations: Designation[];
  designatedStaffs: Staff[];
  errorMessage: String;
  isError: Boolean;
  selectedDesignation: Designation;

  constructor(public designationServ: DesignationService ) { }

  ngOnInit() {
    this.isError = false;

    this.designationServ.getAllDesignations()
      .then( (res) => {
          this.designationServ.designations = res; },
          (err) => {
            this.isError = true;
            this.errorMessage = 'Server Error!';
          }
      );
  }

  findStaffsWithDesignation() {
    if (this.selectedDesignation == null) {
      this.errorMessage = 'ERROR! select a designation first!';
      this.isError = true;
      return;
    }

    this.isError = false;

    this.designationServ.getDesignatedStaffs(this.selectedDesignation).then( (res) => {
      this.designatedStaffs = res;
    }, (err) => {
      this.errorMessage = 'Server cannot respond to the request';
    });
  }

}
