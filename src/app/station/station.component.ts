import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CitiesService } from './../services/cities.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit, OnChanges {
  @Input() selectedCity;
  @Input() selectedStation;
  data = {};

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.selectedStation) {
      this.data = {};
    }
    if (this.selectedStation && this.selectedCity) {
      this.showData();
    }
  }

  showData() {
    this.citiesService.getStationData(this.selectedCity, this.selectedStation).subscribe(d => {
      this.data = d._embedded.records[0];
    });
  }

}
