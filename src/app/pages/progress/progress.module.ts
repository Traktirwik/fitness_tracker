import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressComponent} from "./components/progress/progress.component";
import {RouterModule, Routes} from "@angular/router";
import {CalendarModule} from 'ion2-calendar';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import {LayoutWithHeaderComponent} from "../../layouts/layout-with-header/layout-with-header.component";
import {SingleExerciseComponent} from "../exercise/components/single-exercise/single-exercise.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: ProgressComponent
      }
    ]
  },

]
@NgModule({
  declarations: [ProgressComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule,
    IonicModule.forRoot(),
    FormsModule,
  ]
})
export class ProgressModule {
}
