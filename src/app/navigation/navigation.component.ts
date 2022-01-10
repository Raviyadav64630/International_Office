import { Component, OnInit } from '@angular/core';
import {Course} from "../model/course";
import { CourseService } from '../services/courses.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  courses: Course[] = [];
  selectedcourse?: Course;
  title = 'All course locator';
  lat: number = 0;
  lon: number = 0;

  constructor(private courselist : CourseService){};

  ngOnInit(): void {
      this.courselist.getCourses().subscribe(data => {
        let res = JSON.parse(JSON.stringify(data));
           this.courses = res['courses'];
           console.log(this.courses);
      });
  }

  onSelect(course: Course): void {
    this.selectedcourse = course;
    this.lat = course['lat'];
    this.lon = course['lon'];
  }

}
