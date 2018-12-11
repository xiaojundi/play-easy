import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { MainComponent } from './features/main/main.component';

const routes: Routes = [
  { path: '', component: HomepageComponent , pathMatch: 'full' },
  { path: 'users', component: MainComponent, children:[
    { 
      path:'', 
      loadChildren: 'src/app/features/users/users.module#UsersModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
