import { Component } from '@angular/core';

@Component({
  selector: 'app-remote-tab',
  templateUrl: './remote-tab.component.html',
  styleUrls: ['./remote-tab.component.css']
})
export class RemoteTabComponent {

REC_ID: any = '12302';
CMD_Executive_Date: string = "21/10/2020";
User_Name: string  = "XYZA";
DCU_Command: string = "stop";
CMD_Executive_Reason: string = "None";
Target_DCU : number = 32007;
Near_By_DCU : number = 32008;
SLA_Start_Date : string = "01/02/2020";
SLA_Violate_Date: string = "10/03/2020";
Days_Since_Open: any = '102';

  constructor() { }

}
