import { Component, OnInit } from '@angular/core';
//import * as moment from 'moment';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private news: NewsService) { }
  articles = [] as any[];
  userObj = null;


  ngOnInit(): void {
    this.news.getNews().subscribe(data => {
      let res = JSON.parse(JSON.stringify(data));
      this.articles = res['news'];
    });

  }

}
