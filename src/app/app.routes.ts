import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./layout/main/main.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'exercise',
        loadChildren: () => import('./pages/exercise/exercise.module').then(m => m.ExerciseModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule)
      },
      {
        path: 'progress',
        loadChildren: () => import('./pages/progress/progress.module').then(m => m.ProgressModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
