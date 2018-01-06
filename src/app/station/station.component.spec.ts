import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationComponent } from './station.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CitiesService } from './../services/cities.service';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

describe('StationComponent', () => {
  let component: StationComponent;
  let fixture: ComponentFixture<StationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationComponent ],
      providers: [
        CitiesService,
        HttpClient,
        {
          provide: HighchartsStatic,
          useFactory: highchartsFactory
        }
      ],
      imports: [
        HttpClientModule,
        ChartModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('prepare data method should works propperly', () => {
    const arrIn = [{pm25: 10}, {pm25: 15}];
    const x = component.prepareData(arrIn);
    const arrOut = [10, 15];
    expect(x).toEqual(arrOut);
  });

});
