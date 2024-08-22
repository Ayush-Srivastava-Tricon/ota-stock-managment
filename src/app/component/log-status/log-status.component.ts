import { Component } from '@angular/core';
import { OwnerService } from 'src/app/services/owner.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-log-status',
  templateUrl: './log-status.component.html',
  styleUrls: ['./log-status.component.scss']
})
export class LogStatusComponent {

  loader:boolean=false;
  logStatusData:any=[];

  constructor(private _service:OwnerService,private alert:AlertService){}

  ngOnInit(){
    this.fetchLogData();
  }

  fetchLogData(){
    //your api call...
  }
  
}
