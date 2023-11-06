import { Component } from '@angular/core';

@Component({
  selector: 'linage-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.styles.scss'],
})
export class ContentPageComponent {
  showAudioController = false;

  onElementInView(isInView: boolean): void {
    this.showAudioController = isInView;
    if (isInView) {
      this.showAudioController = true;
    }
  }
}
