import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {LayoutWithHeaderComponent} from "./layouts/layout-with-header/layout-with-header.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main/schedule',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
  {
    path: 'main/schedule',
    loadChildren: () => import('./pages/schedule/schedule.module').then(m => m.ScheduleModule),
  },
  {
    path: 'main/exercise',
    loadChildren: () => import('./pages/exercise/exercise.module').then(m => m.ExerciseModule)
  },
  {
    path: 'main/progress',
    loadChildren: () => import('./pages/progress/progress.module').then(m => m.ProgressModule)
  },
  {
    path: 'main/profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '**',
    redirectTo: '/main/schedule',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
