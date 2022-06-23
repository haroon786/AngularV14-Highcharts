import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[RouterModule,HighchartsChartModule]

})
export class AppComponent {
  title = 'AngularV14-Highcharts';
  Highcharts = Highcharts;
  linechart:any = {
    series: [
      {
        data: [1, 2, 3]
      }
    ],
    chart: {
      type: "line"
    },
    title: {
      text: "linechart"
    }
  };
  barchart = {
    series: [
      {
        data: [1, 2, 3]
      }
    ],
    chart: {
      type: "bar"
    },
    title: {
      text: "barchart"
    }
  };
}
