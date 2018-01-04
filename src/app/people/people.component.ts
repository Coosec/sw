import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  maxPage;
  currentPage = 1;
  people = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople(this.currentPage).subscribe((people) => {
      this.maxPage = Math.ceil(people.count / 10);
      this.people = people.results;
    });
  }

  switchPage(change) {
    let page;
    if ( this.currentPage + change < 1 || this.currentPage + change > this.maxPage) {
      return ;
    }
    page = this.currentPage + change;
    this.currentPage = page;
    this.peopleService.getPeople(page).subscribe((people) => {
      this.people = people.results;
    });
  }

}
