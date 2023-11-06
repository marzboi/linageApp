import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout-page.component.html',
  styles: [],
})
export class LayoutPageComponent {
  showAudioController = false;
  currentTrackIndex?: number;

  onElementInView(isInView: boolean): void {
    this.showAudioController = isInView;
  }

  setCurrentTrackIndex(index: number): void {
    this.currentTrackIndex = index;
    console.log('currentTrackIndex', this.currentTrackIndex);
  }
}
