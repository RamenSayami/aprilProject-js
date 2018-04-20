import { Injectable } from '@angular/core';

import { Staff } from '../model/staff';
import { Designation } from '../model/designation';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class StaffService {

  private getAllStaffURL = 'http://localhost:8080/aprilProject-web/api/worker/getAllStaffs';
  private addNewStaffURL = 'http://localhost:8080/aprilProject-web/api/worker/add';

  staffs: Staff[];

  constructor( private http: HttpClient) { }


  getAllStaffs() {
    const resp = this.http.get<Staff[]>(this.getAllStaffURL);
    // console.log('getAllStaff: ' + JSON.stringify(response));
    // console.log(response);
    // const jsonRes = response.map(res => res.json());

    // console.log('json conversion of getAllStaffs: ' + JSON.stringify(jsonRes));
    return resp;
  }

  addStaff(newStaff) {
    console.log('Calling post method...');

    const resp = this.http.post<Staff>(this.addNewStaffURL, newStaff);
    console.log('resp');
    console.log(resp);
    return resp;
  }
}
