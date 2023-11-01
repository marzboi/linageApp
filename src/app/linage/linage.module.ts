import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { LinageRoutingModule } from './linage-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';

@NgModule({
  declarations: [IntroPageComponent, LayoutPageComponent, MessagePageComponent],
  imports: [CommonModule, LinageRoutingModule],
})
export class LinageModule {}
