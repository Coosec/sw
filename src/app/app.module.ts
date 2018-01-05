import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesService } from './services/cities.service';
import { StationsComponent } from './stations/stations.component';



@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    StationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [CitiesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
