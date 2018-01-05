import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CitiesService } from './../services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  @Output() selectedId = new EventEmitter();
  cities = [];

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.citiesService.getCities().subscribe((cities) => {
      this.cities = cities._embedded.records;
    });
  }

  showStations(cityId) {
    this.selectedId.emit(cityId);
  }

}
