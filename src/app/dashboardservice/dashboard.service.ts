import { Injectable } from '@angular/core';
import { DashboardData } from '../model/dashboarddata';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
    private dashdata : DashboardData[];
  constructor(private http: HttpClient) { 
    //this.dashdata = dashboarddata;
  }

  getDashboardData() : Observable<DashboardData[]>
  { 
      console.log("From the service");
	  return this.http.get<any>("http://my-json-server.typicode.com/kousal/MyMockRestApis/posts",{});
      //return this.dashdata;
  }



}
