import { Injectable } from '@angular/core';

const dashboarddata = [
    {id: 1,
    name: 'salesCount',
    type: 'linegraph',
},
 {id: 2,
    name: 'repairCount',
    type: 'bargraph',
}
];

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    private dashdata;
  constructor() { 
    this.dashdata = dashboarddata;
  }

  getDashboardData() 
  { 
      console.log("From the service");
      return this.dashdata;
  }



}
