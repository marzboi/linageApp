import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linage-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.styles.scss'],
})
export class ContentPageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 0;

  sendPageIndex(isInView: boolean) {
    if (isInView) {
      this.onTrackChange.emit(this.pageIndex);
    }
  }
}
