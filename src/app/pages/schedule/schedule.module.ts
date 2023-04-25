import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleComponent} from "./components/schedule/schedule.component";
import {RouterModule, Routes} from "@angular/router";
import {CalendarModule} from 'ion2-calendar';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {ProgressCircleComponent} from "./components/progress-circle/progress-circle.component";
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: ScheduleComponent
      }
    ]
  },
]

@NgModule({
  declarations: [ScheduleComponent,
    ProgressCircleComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forChild(routes),
    CalendarModule,
    FormsModule,
  ]
})
export class ScheduleModule {
}
