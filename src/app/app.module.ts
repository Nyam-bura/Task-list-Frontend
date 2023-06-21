import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogComponent } from './dialog/dialog.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CardsComponent } from './cards/cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

import { ToastrModule } from 'ngx-toastr';
import { ApiListComponent } from './api-list/api-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    HomeComponent,
    TaskComponent,
    DialogComponent,
    CardsComponent,
    ApiListComponent,
  ],

  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    BrowserModule,
    MatIconModule,
    MatMenuModule,
    MatTreeModule,
    FlexLayoutModule,
    MatRadioModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    DragDropModule,
    MatGridListModule,
    MatAutocompleteModule,
    ScrollingModule,
    MatDatepickerModule,
    TextFieldModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatSnackBarModule,
    ToastrModule.forRoot(),
  ],

  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent],
})
export class AppModule {}
