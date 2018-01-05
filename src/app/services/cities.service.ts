import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CitiesService {

  constructor(private http: HttpClient) { }

  public getCities() {
    return this.http.get<any>('https://api.smog.info.pl/cities');
  }

  public getStations(cityId) {
    return this.http.get<any>(`https://api.smog.info.pl/cities/${cityId}/stations`);
  }

}
