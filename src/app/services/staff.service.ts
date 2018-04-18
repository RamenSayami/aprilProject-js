import { Injectable } from '@angular/core';

import { Staff } from '../model/staff';
import { Designation } from '../model/designation';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StaffService {

  private getAllStaffURL = 'http://localhost:8080/aprilProject-web/api/worker/getAllStaffs';

  staffs: Staff[];

  constructor( private http: Http) { }

  getAllStaffs() {
    return this.http.get(this.getAllStaffURL).map(res => res.json());
  }
}
