import {CUSTOM_ELEMENTS_SCHEMA, NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routes';
import { IonicModule } from '@ionic/angular';

import {AppComponent} from './app.component';
import {MainComponent} from "./layout/main/main.component";
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from "./layout/footer/footer.component";
import {CommonModule} from "@angular/common";
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
