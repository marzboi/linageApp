import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linage-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.styles.scss'],
})
export class ContentPageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  showAudioController = false;
  private pageIndex: number = 0;

  onElementInView(isInView: boolean): void {
    this.showAudioController = isInView;
    if (isInView) {
      this.showAudioController = true;
      this.onTrackChange.emit(this.pageIndex);
    }
  }
}
