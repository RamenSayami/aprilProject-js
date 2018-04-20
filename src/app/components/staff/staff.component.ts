import { Component, OnInit } from '@angular/core';
import { Staff } from '../../model/staff';
import { StaffService } from '../../services/staff.service';
import { StaffListService } from '../../services/staff-list.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor ( public staffService: StaffService,
                public staffListServ: StaffListService) { }

  ngOnInit() {
    this.staffService.getAllStaffs().subscribe(res => this.staffListServ.staffList = res);
  }

  clicked() {
  }

}
