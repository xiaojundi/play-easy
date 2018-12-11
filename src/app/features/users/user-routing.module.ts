import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const Routes: Routes = [
    {path: 'dashboard', component: DashboardComponent}
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(Routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class UserRoutingModule { 
  }