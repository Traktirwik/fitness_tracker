import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressComponent} from "./components/progress/progress.component";
import {RouterModule, Routes} from "@angular/router";
import {CalendarModule} from 'ion2-calendar';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

const routes: Routes = [{path: '', component: ProgressComponent}]

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
