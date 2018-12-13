import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [

  CommonModule,
      UserRoutingModule,
      FormsModule
    ],
    declarations: [
      DashboardComponent
    ],
    providers: [
    ]
  })
export class UsersModule { }