import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

export interface task_array{

}

const TASK_ARRAY: task_array[] = [
  {position: 2, assigned_to_name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'ffffffff', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})



export class ApiListComponent implements OnInit{

  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = TASK_ARRAY;


  apiList:any;
  httpClient: any;

  url = 'http://127.0.0.1:8000/api/task/';
  task_array : any []= [];

 
  constructor(private dataService:DataServiceService){}

  ngOnInit(){
    this.get_all_tasks()
    }

    get_all_tasks(){
      this.dataService.getdata().subscribe({
        next:(data : any)=>{
          this.task_array =  data.task;
        },
        error:(error : any)=>{
          console.log("error....",error);
        },
        complete:()=>{
          console.log("completed......");
          
        }
      })
    }
   
  }
 
    


