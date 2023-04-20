import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWithHeaderComponent } from './layout-with-header.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: ':id',
    component: LayoutWithHeaderComponent,
    children: [],
  },
];

@NgModule({
  declarations: [LayoutWithHeaderComponent],
  imports: [CommonModule, IonicModule.forRoot(), RouterModule.forChild(routes)],
})
export class LayoutWithHeaderModule {}
