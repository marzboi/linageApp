import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linaje-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['message-page.styles.scss'],
})
export class MessagePageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 0;

  handleEmit() {
    this.onTrackChange.emit(this.pageIndex);
  }
}
