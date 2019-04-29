import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publishdataresult',
  templateUrl: './publishdataresult.component.html',
  styleUrls: ['./publishdataresult.component.css']
})
export class PublishdataresultComponent implements OnInit {

    @Input() result: boolean;

  constructor() { }

  ngOnInit() {
  }

}
