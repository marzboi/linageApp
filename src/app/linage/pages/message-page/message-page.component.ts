import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linage-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['message-page.styles.scss'],
})
export class MessagePageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 0;
  emitted: boolean = false;

  sendPageIndex(isInView: boolean) {
    if (isInView && !this.emitted) {
      this.onTrackChange.emit(this.pageIndex);
      this.emitted = true;
    }
  }

  handleEmit() {
    this.onTrackChange.emit(this.pageIndex);
  }
}
