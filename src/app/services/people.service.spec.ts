import { TestBed, inject } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PeopleService,
        HttpClient
      ],
      imports: [
      HttpClientModule
    ],
    });
  });

  it('should be created', inject([PeopleService], (service: PeopleService) => {
    expect(service).toBeTruthy();
  }));
});
