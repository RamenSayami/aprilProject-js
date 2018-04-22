import { Component, OnInit } from '@angular/core';
import { Designation } from '../../model/designation';
import { StaffListService } from '../../services/staff-list.service';

@Component({
  selector: 'app-search-staff',
  templateUrl: './search-staff.component.html',
  styleUrls: ['./search-staff.component.css']
})
export class SearchStaffComponent implements OnInit {

  designations: Designation[];

  constructor(public staffListServ: StaffListService) { }

  ngOnInit() {
  }

  getAllDesignations() {
    // TODO Make Designation Service and get all Designations
  }
}
