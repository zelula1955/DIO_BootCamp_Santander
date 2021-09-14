import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ReplacePipe } from '../shared/pipe/replace.pipe';
import { StarComponent } from '../shared/component/star/star.component';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';

@NgModule({
    declarations: [
      CourseListComponent,
      CourseInfoComponent,
      ReplacePipe,
      StarComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
              path: 'courses', component: CourseListComponent
            },
            {
              path: 'courses/info/:id', component: CourseInfoComponent
            }
        ]),
        CourseModule,
        CoreModule

    ]
})
export class CourseModule {

}
