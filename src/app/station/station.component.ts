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
  options;


  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.options = {
      title : { text : 'Wykres dobowy' },
      series: [{
        name:'pm 2.5',
        data: [0],
      }]
    };
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
      let x = this.prepareData(d._embedded.records);
      this.options = {
        title : { text : 'Wykres dobowy' },
        series: [{
          name:'pm 2.5',
          data: x,
        }]
      };
    });
  }

  prepareData(array) {
    let result = array.map(a => a.pm25).map(a => a === undefined ? 0 : a);
    return result;
  }

}
