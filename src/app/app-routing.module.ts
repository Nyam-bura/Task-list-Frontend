import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ApiListComponent } from './api-list/api-list.component';

const routes: Routes = [
  {
    path: '',component: SideNavComponent,children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'home', component: HomeComponent},
      {path: 'cards', component: CardsComponent},
      {path: 'api-list', component: ApiListComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
