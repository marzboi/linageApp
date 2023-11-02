import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { LinageRoutingModule } from './linage-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { InViewDirective } from './directive/in-view.directive';

@NgModule({
  declarations: [
    IntroPageComponent,
    LayoutPageComponent,
    MessagePageComponent,
    ContentPageComponent,
    InViewDirective,
  ],
  imports: [CommonModule, LinageRoutingModule],
  exports: [ContentPageComponent],
})
export class LinageModule {}
