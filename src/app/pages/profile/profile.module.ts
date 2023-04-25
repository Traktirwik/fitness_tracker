import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileComponent} from "./components/profile/profile.component";
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: ProfileComponent
      }
    ]
  },
]

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
