import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { DashboardData } from '../model/dashboarddata';

import { DashboardService } from '../dashboardservice/dashboard.service';

import * as Highcharts from 'highcharts';


@Component({

  selector: 'app-dashboard',

  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent implements OnInit {

 @ViewChild('charts') public chartEl: ElementRef;

 dashboardData: DashboardData[];

 displayDashboardData: boolean;
 
 myOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      title: {
        text: 'Sales of specific cars'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
   /* series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
    }]*/
	series: []
  };


  constructor(private dashboardService: DashboardService) {

      this.displayDashboardData = false;

   }



   getDashboardData(){

        this.dashboardData = this.dashboardService.getDashboardData().subscribe(
		dd => 
			{	this.dashboardData = dd;
				
				for(let dat of this.dashboardData)
				{
					if(this.myOptions.xAxis.categories.indexOf(dat.year) < 0)
					{
						this.myOptions.xAxis.categories.push(dat.year);
					}
				}
				
				for(let dat of this.dashboardData)
				{
					let i = 0;
					for(let ser of this.myOptions.series)
					{
						if(dat.model == ser.name)
						{
							ser.data.push(dat.sales);
							i = 1;
						}
					}
					if(i == 0)
					{
						this.myOptions.series.push({name: dat.model, data: [dat.sales]});
					}
				}
				
				this.displayDashboardData = true;
				
				console.log(this.myOptions.series);

				Highcharts.chart(this.chartEl.nativeElement, this.myOptions);
			}
		);

        

   }  ngOnInit() {

  }







}