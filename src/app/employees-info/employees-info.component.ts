import { Component, OnInit } from '@angular/core';
import { EmployeesRecordService } from '../employees-record.service';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrl: './employees-info.component.css',
  providers: [EmployeesRecordService],
})
export class EmployeesInfoComponent 
{
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

 

  getInfoFromService1()
  {
    this.infoReceived1 = this.reservice.getInfo1();
  }

  getInfoFromService2()
  {
    this.infoReceived2 = this.reservice.getInfo2();
  }
  getInfoFromService3()
  {
    this.infoReceived3 = this.reservice.getInfo3();
  }
  constructor(private reservice: EmployeesRecordService)
  {}
  
  ngOnInit(): void{

  }

  updateInfo(frm: any)
  {
    this.reservice.addInfo(frm.value.location)
  }
}
