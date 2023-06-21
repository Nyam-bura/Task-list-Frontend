import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class ApiListComponent implements OnInit{
  apiList:any;
  httpClient: any;

  url = 'http://127.0.0.1:8000/api/task/';
 
  constructor(private dataService:DataServiceService){}

  ngOnInit(){
    this.dataService.getdata().subscribe((data)=>{
      console.log(data);
      this.apiList=data;
    })
  }
}
    


