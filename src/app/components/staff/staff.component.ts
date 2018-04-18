import { Component, OnInit } from '@angular/core';
import { Staff } from '../../model/staff';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staffs: Staff[];

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.staffService.getAllStaffs().subscribe(staffs => this.staffs = staffs);
  }

}
