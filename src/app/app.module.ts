import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesService } from './services/cities.service';
import { StationsComponent } from './stations/stations.component';
import { StationComponent } from './station/station.component';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    StationsComponent,
    StationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartModule,
  ],
  providers: [CitiesService, HttpClient,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
