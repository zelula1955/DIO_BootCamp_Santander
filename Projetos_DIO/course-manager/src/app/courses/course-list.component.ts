import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
          {
            id: 1,
            name: 'Angular: Forms',
            imageUrl: '/assets/images/forms.png',
            price: 99.99,
            code: 'XPS-8976',
            duration: 120,
            releaseDate: 'September, 7, 2021',
            rating: 7.5
          },
          {
            id: 2,
            name: 'Angular: HTPP',
            imageUrl: '/assets/images/http.png',
            price: 45.99,
            code: 'XPS-6676',
            duration: 90,
            releaseDate: 'September, 8, 2021',
            rating: 6.5,
          }
        ]
    }

}
