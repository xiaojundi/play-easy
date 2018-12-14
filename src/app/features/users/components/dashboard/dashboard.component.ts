import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(){
    
  }
  ngAfterViewInit() {
    //We loading the player script on after view is loaded
    System.import('./videoConfig.js');
  }

}
