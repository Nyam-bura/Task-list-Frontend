import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DataServiceService } from '../data-service.service';





interface itemInterface{
  icon: string; text: string; color: string ;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 
isAddMode: any;
count: any;


  constructor(public dialog: MatDialog , private api : DataServiceService) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  class: any;
  displayParameters: any;
  displayParameter: any;
  idx: any;
options: any;


ngOnInit() {

  
  localStorage.setItem('myCat', 'Tom2');
  console.log(localStorage.getItem("myCat"));
  }

  // getAllTask().subscribe()

    triggerResize() {
    throw new Error('Method not implemented.');
  }

  value = 'Clear me';
  items = Array.from({ length: 10 }).map((_, i) => `Item #${i}`);
  searchTerm: any;

  default_icon:string ="radio_button_checked";
  // default_text:string= "First Task";
  default_color:string = "black";


  default_icon1:string ="radio_button_checked";
  default_text1:string= "Second Task";
  default_color1:string = "black";
  default_fontsize:string="bold"

  menuitem_array: any = [
    {
      icon: 'radio_button_checked',
      text: 'OPEN',
      color: 'grey',
    },
    {
      icon: 'radio_button_checked',
      text: 'PENDING',
      color: 'orange',
    },
    {
      icon: 'radio_button_checked',
      text: 'IN PROGRESS',
      color: 'red',
    },
    {
      icon: 'radio_button_checked',
      text: 'COMPLETE',
      color: 'black',
    },
    {
      icon: 'radio_button_checked',
      text: 'IN REVIEW',
      color: 'orange',
    },
    {
      icon: 'radio_button_checked',
      text: 'ACCEPTED',
      color: 'red',
      hover:'aqua'
    },
    {
      icon: 'radio_button_checked',
      text: 'REJECTED',
      color: 'pink',
    },
    {
      icon: 'radio_button_checked',
      text: 'BLOCKED',
      color: 'purple',
    },
    {
      icon: 'radio_button_checked',
      text: 'CLOSED',
      color: 'green',
    },
  ];

  menuitem_array1: any = [
    {
      icon1: 'radio_button_checked',
      text1: 'OPEN',
      color1: 'grey',
    },
    {
      icon: 'radio_button_checked',
      text: 'PENDING',
      color: 'orange',
    },
    {
      icon: 'radio_button_checked',
      text: 'IN PROGRESS',
      color: 'red',
    },
    {
      icon: 'radio_button_checked',
      text: 'IN REVIEW',
      color: 'orange',
    },
    {
      icon: 'radio_button_checked',
      text: 'ACCEPTED',
      color: 'red',
      hover:'aqua'
    },
    {
      icon: 'radio_button_checked',
      text: 'REJECTED',
      color: 'pink',
    },
    {
      icon: 'radio_button_checked',
      text: 'BLOCKED',
      color: 'purple',
    },
    {
      icon: 'radio_button_checked',
      text: 'CLOSED',
      color: 'green',
    },
  ];

  passItems(item  : any){
    this.default_color =item.color;
    this.default_icon =item.icon;
    
  }


  passItems1(item  : any){
    this.default_color1 =item.color;
    this.default_icon1=item.icon;
    
  }
  }
  



