import { Component, OnInit } from '@angular/core';
import { Staff } from '../../model/staff';
import { StaffService } from '../../services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor ( public staffService: StaffService) { }

  isError: Boolean = false;
  errorMessage: String = 'ERROR! Problem with the local server';
  ngOnInit() {
    document.getElementById('err').style.display = 'none';
    this.getAllStaffs();
  }

  getAllStaffs() {
    this.staffService.getAllStaffs()
    .then((res) => {
      this.staffService.staffList = res;
    },
    (err) => {
      this.isError = true;
      console.log(err);
      document.getElementById('err').style.display = 'inline';
    });
  }

  deleteStaff(staff: Staff) {
    console.log('to delete');
    console.log(staff);
    this.staffService.deleteStaffWithId(staff.id)
      .then( (res: boolean) => {
        if (res = true) {
          this.errorMessage = '1 staff deleted!';
          this.getAllStaffs();
        } else {
          this.errorMessage = 'Error deleting staff';
        }
      });
  }

}
