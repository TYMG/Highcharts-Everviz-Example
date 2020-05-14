import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';

HC_exporting(Highcharts);
HC_exportData(Highcharts);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Highcharts = Highcharts;

  title = 'Highcharts-Everviz';
  options = {
    title: { text: 'US Music Industry Revenue 2018', align: 'left', x: 10 },
    subtitle: { text: 'Source: RIAA', align: 'left', x: 10 },
    plotOptions: {
      series: {
        allowPointSelect: true,
        states: {
          select: { color: '#EFFFEF', borderColor: 'black', dashStyle: 'dot' },
        },
        marker: { enabled: false },
        lineWidth: 3,
        animation: false,
        events: {},
      },
    },
    exporting: {},
    credits: { text: 'everviz.com', href: 'https://everviz.com' },
    data: {},
    colors: [
      '#235A61',
      '#DD495E',
      '#2A2383',
      '#F2C60E',
      '#24CBE5',
      '#64E572',
      '#FF9655',
      '#FFF263',
      '#6AF9C4',
    ],
    legend: {
      align: 'left',
      verticalAlign: 'top',
      itemMarginBottom: 10,
      x: 0,
      symbolRadius: 2,
    },
    chart: { type: 'pie' },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Streaming',
            y: 75,
          },
          {
            name: 'Physical',
            y: 12,
          },
          {
            name: 'Digital Downloads',
            y: 10,
          },
          {
            name: 'Sync',
            y: 3,
          },
        ],
      },
    ],
    tooltip: { valueSuffix: '%' },
    annotations: [],
    stockTools: {
      gui: {
        buttons: ['simpleShapes', 'lines', 'crookedLines'],
        enabled: false,
      },
    },
    navigation: { events: {}, bindingsClassName: 'tools-container' },
  };

  iframe: SafeResourceUrl;
  constructor(private sanitzer: DomSanitizer) {}

  ngOnInit() {
    this.iframe = this.sanitzer.bypassSecurityTrustResourceUrl(
      'https://app.everviz.com/embed/ohcLpE5mM/'
    );
  }
}
