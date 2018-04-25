import { Component, OnInit } from '@angular/core';
// import { Validator, FormsModule} from '@angular/forms';
import { Staff } from '../../model/staff';
import { StaffService } from '../../services/staff.service';
import { StaffComponent } from '../staff/staff.component';
import { NgForm } from '@angular/forms';
import { Designation } from '../../model/designation';
import { Address } from '../../model/address';
import { COUNTRIES } from '../../model/countries';
import { Country } from '../../model/country';

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

  countries: Country[] = COUNTRIES;

  constructor(private staffService: StaffService) { }

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
        .then( (res: Staff) => { this.staffService.staffList.unshift(  res); },
          (err) => {
            this.showError = true;
          });
      stfFom.reset();
  }

}
