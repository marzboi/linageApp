import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linaje-chapter6-page',
  templateUrl: './chapter6-page.component.html',
  styleUrls: ['./chapter6-page.component.scss'],
})
export class Chapter6PageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 6;

  handleEmit() {
    this.onTrackChange.emit(this.pageIndex);
  }
}
