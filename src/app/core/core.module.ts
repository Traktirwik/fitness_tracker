import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicStorageModule} from "@ionic/storage-angular";
import {StorageService} from "./services/storage.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [StorageService],
})
export class CoreModule {
}
