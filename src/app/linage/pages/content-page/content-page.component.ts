import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'linage-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.styles.scss'],
})
export class ContentPageComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  consoleLogger() {
    console.log('I am on view, so now I can play audio');
  }
}
