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
});
