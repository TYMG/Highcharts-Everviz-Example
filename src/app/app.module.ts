import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HighchartsChartModule,
  HighchartsChartComponent,
} from 'highcharts-angular';
import { AppComponent } from './app.component';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    MatDividerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
