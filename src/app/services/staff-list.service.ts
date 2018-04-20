import { Injectable } from '@angular/core';
import { Staff } from '../model/staff';
import { StaffService } from './staff.service';

@Injectable()
export class StaffListService {

  staffList: Staff[];

  constructor(public staffService: StaffService) { }


}
