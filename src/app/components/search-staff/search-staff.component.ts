import { Component, OnInit } from '@angular/core';
import { Designation } from '../../model/designation';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-search-staff',
  templateUrl: './search-staff.component.html',
  styleUrls: ['./search-staff.component.css']
})
export class SearchStaffComponent implements OnInit {

  designations: Designation[];

  constructor(public staffListServ: StaffService) { }

  ngOnInit() {
  }

  getAllDesignations() {
    // TODO Make Designation Service and get all Designations
  }
}
