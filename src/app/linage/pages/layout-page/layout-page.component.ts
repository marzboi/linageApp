import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout-page.component.html',
  styles: [],
})
export class LayoutPageComponent {
  showAudioController = false;
  onElementInView(isInView: boolean): void {
    this.showAudioController = isInView;
    if (isInView) {
      this.showAudioController = true;
    }
  }
}
