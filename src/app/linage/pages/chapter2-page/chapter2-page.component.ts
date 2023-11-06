import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linage-chapter2-page',
  templateUrl: './chapter2-page.component.html',
  styleUrls: ['./chapter2-page.styles.scss'],
})
export class Chapter2PageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 2;
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
