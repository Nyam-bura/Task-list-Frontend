import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Params, Router } from '@angular/router';
import { Validators } from '@angular/forms';



export interface Section {
  name: string;
}


interface projects {
  name: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  model:any = {};
  getdata: boolean = false;
constructor(private dataService:DataServiceService,private router:Router){}
registerUser(){
  var username = this.model.username;
  var password = this.model.password;

  console.log(username+""+password)

  // this.dataService.getUserDetails(username,password).subscribe((res:boolean)=>{
  //   this.getdata = res;

  //   if(this.getdata == true){
  //     this.router.navigate(["/login/"])
  //   }
  //   else{
  //     alert("Invalid username/password")
  //   }
  // })
}

  

  
  notes: Section[] = [
    {
      name: 'Home',
    },
  ]
  
  projects: Section[] = [
    {
      name: 'Projects',
    },
  ]

   

}
