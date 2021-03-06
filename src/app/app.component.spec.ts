import { StationComponent } from './station/station.component';
import { StationsComponent } from './stations/stations.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesService } from './services/cities.service';
import { ChartModule } from 'angular2-highcharts';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CitiesComponent,
        StationsComponent,
        StationComponent
      ],
      providers: [
        CitiesService,
        HttpClient
      ],
      imports: [
        HttpClientModule,
        ChartModule.forRoot(require('highcharts'))
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Zanieczyszczenia powietrza');
  }));
});
