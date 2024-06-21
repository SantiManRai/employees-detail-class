import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesRecordService {

  info1: string[] = ["John Mathew", 'E3575', 'jm@AbortController.net' ]
  info2: string[] = ["Rob Wilson", 'E3350', 'rw@AbortController.net' ]
  info3: string[] = ["Rose Adams", 'E3489', 'ra@AbortController.net' ]
  getInfo1(): string[]
  {
    return this.info1;
  }

  getInfo2(): string[]
  {
    return this.info2;
  }

  getInfo3(): string[]
  {
    return this.info3;
  }
  
   
  addInfo (info: string):string[]
  {
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }
  constructor() { }
}
