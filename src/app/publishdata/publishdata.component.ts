import { Component, OnInit } from '@angular/core';
import { PublishdataService } from '../publishdataservice/publishdata.service';

@Component({
  selector: 'app-publishdata',
  templateUrl: './publishdata.component.html',
  styleUrls: ['./publishdata.component.css']
})
export class PublishdataComponent implements OnInit {

  constructor(private service1: PublishdataService) { }

  ngOnInit() {
  }

  triggerDataToKafka(){
      console.log("in comp");
      this.service1.triggerDataToKafka();
  }


}
