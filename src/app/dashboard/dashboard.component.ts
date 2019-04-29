import { Component, OnInit } from '@angular/core';
import { DashboardData } from '../model/dashboarddata';
import { DashboardService } from '../dashboardservice/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 dashboardData: DashboardData[];
 displayDashboardData: boolean;
  constructor(private dashboardService: DashboardService) {
      this.displayDashboardData = false;
   }

   getDashboardData(){
        this.dashboardData = this.dashboardService.getDashboardData();
        this.displayDashboardData = true;

   }  ngOnInit() {
  }



}
