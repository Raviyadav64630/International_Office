import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private event: EventService) { }
  articles = [] as any[];
  userObj = null;

  ngOnInit(): void {

    this.event.getEvent().subscribe(data => {
      let res = JSON.parse(JSON.stringify(data));
      this.articles = res['event'];
    });
  }

}
