import { Injectable, OnInit } from '@angular/core';

import { Staff } from '../model/staff';
import { Designation } from '../model/designation';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StaffService implements OnInit {

  private getAllStaffURL = 'http://localhost:8080/aprilProject-web/api/worker/getAllStaffs';
  private addNewStaffURL = 'http://localhost:8080/aprilProject-web/api/worker/add';
  private deleteStaffURL = 'http://localhost:8080/aprilProject-web/api/worker/delete/';

  staffList: Staff[];

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getAllStaffs();
  }

  getAllStaffs(): Promise<Staff[]> {
    console.log('Get all staff method is called...');
    const resp = this.http.get<Staff[]>(this.getAllStaffURL);
    console.log(resp);

    // console.log('getAllStaff: ' + JSON.stringify(response));
    // const jsonRes = response.map(res => res.json());
    // console.log('json conversion of getAllStaffs: ' + JSON.stringify(jsonRes));
    return resp.toPromise();
  }

  addStaff(newStaff: Staff): Promise<Staff> {
    console.log('Calling post method...');
    const resp = this.http.post<Staff>(this.addNewStaffURL, newStaff);
    console.log('After Add Staff Post Method is called... ');
    console.log(resp);
    return resp.toPromise();
  }

  deleteStaffWithId(id: Number) {
    const resp = this.http.delete(this.deleteStaffURL + id);
    return resp.toPromise();
  }
}
