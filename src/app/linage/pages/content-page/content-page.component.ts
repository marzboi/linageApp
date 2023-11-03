import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'linage-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.styles.scss'],
})
export class ContentPageComponent {
  title = 'test';
  audioSrc = 'assets/test.mp3';
  showAudioController = false;

  onElementInView(isInView: boolean): void {
    this.showAudioController = isInView;
    if (isInView) {
      this.showAudioController = true;
    }
  }
}
