import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { TabbarComponent } from './tabbar/tabbar.component';

@NgModule({
  declarations: [TitleComponent, TabbarComponent],
  imports: [CommonModule],
  exports: [TitleComponent, TabbarComponent],
})
export class SharedModule {}
