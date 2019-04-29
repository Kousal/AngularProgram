import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardData } from '../model/dashboarddata';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublishdataService {

  constructor(private http:HttpClient) { }

  triggerDataToKafka(){
    console.log("Going to hit url to publish");
    this.http.post<any>("http://my-json-server.typicode.com/kousal/MyMockRestApis/posts",{}).subscribe();
    console.log("Publish is done successfully");
  }
}
