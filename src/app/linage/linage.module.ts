import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { LinageRoutingModule } from './linage-routing.module';

@NgModule({
  declarations: [IntroPageComponent],
  imports: [CommonModule, LinageRoutingModule],
})
export class LinageModule {}
