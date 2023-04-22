import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MainLayoutModule } from './layouts/main-layout/main-layout.module';
import { LayoutWithHeaderModule } from './layouts/layout-with-header/layout-with-header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    MainLayoutModule,
    LayoutWithHeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
