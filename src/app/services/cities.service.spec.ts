import { TestBed, inject } from '@angular/core/testing';

import { CitiesService } from './cities.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CitiesService,
        HttpClient
      ],
      imports: [
      HttpClientModule
    ],
    });
  });

  it('should be created', inject([CitiesService], (service: CitiesService) => {
    expect(service).toBeTruthy();
  }));
});
