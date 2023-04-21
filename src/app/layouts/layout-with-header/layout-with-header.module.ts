import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWithHeaderComponent } from './layout-with-header.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SingleExerciseComponent } from '../../pages/single-exercise/single-exercise.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutWithHeaderComponent,
    children: [
      {
        path: ':id',
        component: SingleExerciseComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [LayoutWithHeaderComponent, SingleExerciseComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class LayoutWithHeaderModule {}
