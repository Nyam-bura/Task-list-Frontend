import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';



export interface User {
  name: string;
}

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  value = 'Clear me';

  notFound: any;
  list:any[]=[]

  form = new FormGroup({
    title: new FormControl('',Validators.required),
    status: new FormControl(''),
  });

  DataNew: any;
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
  @ViewChild('autosize')
  autosize!: CdkTextareaAutosize;
  triggerResize() {}

  // ============================Auto Complete=============================
  myControl = new FormControl('');
  options: string[] = ['Samuel', 'Abdul', 'Kelvin', 'Nalenyi', 'Jane'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  container: any[] = [0];
  keyValue: String = '';
  textValue: String = '';
  newArray: any = [];

  addContainer() {
    this.newArray.push({ key: this.keyValue, values: this.textValue });
    console.log(this.newArray);

    this.container.push(this.container.length);
    console.log(this.container);
  }

  save() {
    console.log(this.form.value);
  }
  search(
    _t101: HTMLInputElement,
    _t103: HTMLInputElement,
    _t105: HTMLInputElement,
    _t107: HTMLInputElement,
    _t109: HTMLInputElement
  ) {
    throw new Error('Method not implemented.');
  }
  changes(e:any){
    console.log(e.value)
    let data ={
      title:e.value
    }
    this.list.push(data)
    console.log(this.list)


  }
  submit(){
    console.log(this.list);
  }
  disableSelect = new FormControl(false);



}
