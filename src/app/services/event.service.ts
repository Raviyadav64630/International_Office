import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient,) { }

  getEvent(){
    return this.http.get("http://localhost:3000/news/getEvent");
  }
}
