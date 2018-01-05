import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsComponent } from './stations.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CitiesService } from './../services/cities.service';

describe('StationsComponent', () => {
  let component: StationsComponent;
  let fixture: ComponentFixture<StationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsComponent ],
      providers: [
        CitiesService,
        HttpClient
      ],
      imports: [
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
