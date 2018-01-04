import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeopleService {
  peopleEndpoint = `https://swapi.co/api/people/?page=`;

  constructor(private http: HttpClient) { }

  public getPeople(page) {
    return this.http.get<any>(this.peopleEndpoint + page);
  }

}
