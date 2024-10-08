import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linaje-chapter2-page',
  templateUrl: './chapter2-page.component.html',
  styleUrls: ['./chapter2-page.styles.scss'],
})
export class Chapter2PageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 2;

  handleEmit() {
    this.onTrackChange.emit(this.pageIndex);
  }
}
