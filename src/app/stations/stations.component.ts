import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CitiesService } from './../services/cities.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit, OnChanges {

  @Input() selectedCity;
  stations = [];

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selectedCity) {
      this.showStations();
    }
  }

  showStations() {
    this.citiesService.getStations(this.selectedCity).subscribe(s => {
      this.stations = s._embedded.records;
    });
  }

}
