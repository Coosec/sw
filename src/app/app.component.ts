import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  selectedId;
  selectedStationId;

  receiveSelectedId($event) {
    this.selectedId = $event;
  }

  receiveSelectedStationId($event) {
    this.selectedStationId = $event;
  }
}
