import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExerciseComponent} from "./components/exercise/exercise.component";
import {RouterModule, Routes} from "@angular/router";
import {LayoutWithHeaderComponent} from "../../layouts/layout-with-header/layout-with-header.component";
import {SingleExerciseComponent} from "./components/single-exercise/single-exercise.component";
import {IonicModule} from "@ionic/angular";
import {SharedModule} from "../../shared/shared.module";
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: ExerciseComponent
      }
    ]
  },
  {
    path: ':id',
    component: LayoutWithHeaderComponent,
    children: [
      {
        path: '',
        component: SingleExerciseComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ExerciseComponent, SingleExerciseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule.forRoot(),
    SharedModule,
  ]
})
export class ExerciseModule {
}
