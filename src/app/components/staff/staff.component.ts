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

}
