import { Component, OnInit } from '@angular/core';
import { IPeople } from 'src/app/interfaces/people';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  constructor(private api: ApiService) {}

  people: IPeople[] = [];

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(){
    this.api.getPeople().subscribe({
      next: response => {
        this.people = response;
      }
    });
  }
}
