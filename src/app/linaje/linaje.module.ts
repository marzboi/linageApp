import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { linajeRoutingModule } from './linaje-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { Chapter1PageComponent } from './pages/chapter1-page/chapter1-page.component';
import { InViewDirective } from './directives/in-view.directive';
import { AudioControllerComponent } from './components/audio-controller/audio-controller.component';
import { MatIconModule } from '@angular/material/icon';
import { Chapter2PageComponent } from './pages/chapter2-page/chapter2-page.component';
import { TrackTitleComponent } from './components/track-title/track-title.component';
import { Chapter3PageComponent } from './pages/chapter3-page/chapter3-page.component';
import { Chapter4PageComponent } from './pages/chapter4-page/chapter4-page.component';
import { Chapter5PageComponent } from './pages/chapter5-page/chapter5-page.component';
import { Chapter6PageComponent } from './pages/chapter6-page/chapter6-page.component';
import { LocaleControllerComponent } from './components/locale-controller/locale-controller.component';

@NgModule({
  declarations: [
    IntroPageComponent,
    LayoutPageComponent,
    MessagePageComponent,
    Chapter1PageComponent,
    InViewDirective,
    AudioControllerComponent,
    Chapter2PageComponent,
    TrackTitleComponent,
    Chapter3PageComponent,
    Chapter4PageComponent,
    Chapter5PageComponent,
    Chapter6PageComponent,
    LocaleControllerComponent,
  ],
  imports: [CommonModule, linajeRoutingModule, MatIconModule],
  exports: [Chapter1PageComponent],
})
export class linajeModule {}
