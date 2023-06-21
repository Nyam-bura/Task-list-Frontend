import { FormBuilder, FormControl } from '@angular/forms';
// import {};
import { TaskComponent } from '../task/task.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DataServiceService } from '../data-service.service';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { IDropBaseEventArgs } from 'igniteui-angular';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  value = '';

  // define a variable to hold the background color
  bgColor = '';

  // method to update the background color on mouse enter
  onMouseEnter() {
    this.bgColor = '#FFA500';
  }

  // method to update the background color on mouse leave
  onMouseLeave() {
    this.bgColor = '';
  }

  // kkkkk
  todo1_count: number = 0;
  complete_count: number = 2;
  inprogress_count: number = 0;

  selected = 'Board View';
  search: String = '';
  disableSelect = new FormControl(false);
  item: any;
  task: any;
  tasks: any;
  x: any;
  y: any;
  done: any;
  all: any;
  ListData: any;

  ngOnInit() {
    //get count of open tasks
    this.todo1_count = this.todo1.filter(
      (item: any) => item.status === 'todo1'
    ).length;
    console.log(this.todo1);

    //get number of tasks in progress
    this.inprogress_count = this.inprogress.filter(
      (item: any) => item.status === 'inprogress'
    ).length;

    this.complete_count = this.complete.filter(
      (item: any) => item.status === 'complete').length;

    console.log(this.todo1);
    // this.Done_count = this.Complete_count.filter()
  }

  onDragover(event: DragEvent) {}
  onDragout(event: DragEvent) {}

  constructor(
    public dialog: MatDialog,
    private renderer: Renderer2,
    private _snackBar: MatSnackBar,
    private toastr: ToastrService
  ) {}

  open_task_form(): void {
    const dialogRef = this.dialog.open(TaskComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  open_task_dialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
      height: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  topping = new FormControl('');

  toppingList: string[] = [];

  toppingsList: string[] = [
    'Any',
    'Today',
    'Yesterday',
    'This week',
    'This Month',
    'Custom',
  ];

  public onStateContainerEnter(event: any) {
    this.renderer.addClass(event.owner.element.nativeElement, 'active');
  }
  onStateContainerLeave(event: Event) {
    console.log(event);
  }
  onItemDropped(event: Event) {
    console.log(event);
  }

  //
  dragStartHandler($event: Event) {}
  dragEndHandler($event: Event) {
    console.log('Landed');
  }
  onItemEnter($event: Event) {}
  onItemLeave($event: Event) {}
  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this._snackBar.open('Card dragged successfully!', 'OK', {
        duration: 3000,
      });
      //       const message= `Moved ${event.item.data} to ${event.container.id}`;
      //   this._snackBar.open(message, 'Dismiss', { duration: 9000 });
      // this.toastr.success(message);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  hover = false;

  hovering = false;

  todo1 = [
    'Eleventh Task Date:"17/03/2023"Title Assigned:Abdulmanan Ahmed Status: Inprogress',
    'Twelveth Task Date:"17/03/2023"Title Assigned:Abdulmanan Ahmed Status: Inprogress',
    'Thirteenth Task Date:"17/03/2023"Title Assigned:Abdulmanan Ahmed Status: Inprogress ',
  ];
  inprogress = [
    'Fourteenth Task Date:"17/03/2023"Title Assigned:Abdulmanan Ahmed Status: Inprogress',
    'Fifteenth Task Date:"17/03/2023"Title Assigned:Abdulmaman Ahmed Status: Inprogress',
    'Sixteenth Task Date:"17/03/2023"Title Assigned:Abdulmanan Ahmed Status: Inprogresss'
  
  ]
  // inprogress = [
  //   'Fourteenth Task Date:"17/03/2023"Title Assigned:Abdulmanan Ahmed Status: Inprogress',
  //   'Fifteenth Task Date:"17/03/2023"Title Assigned:Abdulmanan Ahmed Status: Inprogress',
  //   'Sixteenth Task Date:"17/03/2023"Title Assigned:Abdulmanan Ahmed Status: Inprogress',
  // ];
  complete = [
    'Seventeenth Task Date:"17/03/2023"Title Assigned:Abdulmanan Ahmed Status: Inprogress',
    'Eighteenth Task Date:"17/03/2023"Title Assigned:Abdulmanan Ahmed Status: Inprogress',
    'Nineteenth Task Date:"17/03/2023"Title Assigned:Abdulmanan Ahmed Status: Inprogress',
  ];
  
}
