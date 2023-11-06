import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { LinageRoutingModule } from './linage-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { Chapter1PageComponent } from './pages/chapter1-page/chapter1-page.component';
import { InViewDirective } from './directives/in-view.directive';
import { AudioControllerComponent } from './components/audio-controller/audio-controller.component';
import { MatIconModule } from '@angular/material/icon';
import { Chapter2PageComponent } from './pages/chapter2-page/chapter2-page.component';

@NgModule({
  declarations: [
    IntroPageComponent,
    LayoutPageComponent,
    MessagePageComponent,
    Chapter1PageComponent,
    InViewDirective,
    AudioControllerComponent,
    Chapter2PageComponent,
  ],
  imports: [CommonModule, LinageRoutingModule, MatIconModule],
  exports: [Chapter1PageComponent],
})
export class LinageModule {}
