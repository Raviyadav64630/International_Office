import { Component, OnInit } from '@angular/core';
import {Course} from "../model/course";
import { CourseService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courses : CourseService){}
  bachelorCourses: Course[] = [];

  masterCourses: Course[] = [];

  ngOnInit(): void {

    this.courses.getCourses().subscribe(data => {
      let res = JSON.parse(JSON.stringify(data));
         const courses = res['courses'];
         this.bachelorCourses = courses.filter((course: { category: string; }) => course.category === 'BACHELOR');
         this.masterCourses = courses.filter((course: { category: string; }) => course.category === 'MASTER');
    });

  }

}
