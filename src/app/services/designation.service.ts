import { Injectable, OnInit } from '@angular/core';
import { Designation } from '../model/designation';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Staff } from '../model/staff';

@Injectable()
export class DesignationService implements OnInit {

  designations: Designation[];

  private getAllDesignationsURL = 'http://localhost:8080/aprilProject-web/api/worker/getAllJobs';
  private findStaffsURL = 'http://localhost:8080/aprilProject-web/api/worker/getStaff';

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  getAllDesignations(): Promise<Designation[]> {
    console.log('Get all designations method is called...');
    const resp = this.http.get<Designation[]>(this.getAllDesignationsURL);
    console.log(resp);

    // console.log('getAllStaff: ' + JSON.stringify(response));
    // const jsonRes = response.map(res => res.json());
    // console.log('json conversion of getAllStaffs: ' + JSON.stringify(jsonRes));
    return resp.toPromise();
  }

  getDesignatedStaffs(desg: Designation): Promise<Staff[]> {
    console.log('Finding staff with designation...');
    const resp = this.http.post<Staff[]>(this.findStaffsURL, desg);
    console.log(resp);
    return resp.toPromise();
  }
}
