import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { IonicModule } from '@ionic/angular';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {CoreModule} from "./core/core.module";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HeaderComponent} from "./layouts/main-layout/components/header/header.component";
import {FooterComponent} from "./layouts/main-layout/components/footer/footer.component";
import {LayoutWithHeaderComponent} from "./layouts/layout-with-header/layout-with-header.component";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, HeaderComponent, FooterComponent, LayoutWithHeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
