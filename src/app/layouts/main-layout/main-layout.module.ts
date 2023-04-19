import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'exercise',
        loadChildren: () =>
          import('../../pages/exercise/exercise.module').then(
            (m) => m.ExerciseModule
          ),
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('../../pages/schedule/schedule.module').then(
            (m) => m.ScheduleModule
          ),
      },
      {
        path: 'progress',
        loadChildren: () =>
          import('../../pages/progress/progress.module').then(
            (m) => m.ProgressModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../../pages/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [MainLayoutComponent, FooterComponent, HeaderComponent],

  imports: [CommonModule, IonicModule.forRoot(), RouterModule.forChild(routes)],
})
export class MainLayoutModule {}
