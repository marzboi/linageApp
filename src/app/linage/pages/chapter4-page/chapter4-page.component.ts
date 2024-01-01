import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linage-chapter4-page',
  templateUrl: './chapter4-page.component.html',
  styleUrls: ['./chapter4-page.component.scss'],
})
export class Chapter4PageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 4;

  handleEmit() {
    this.onTrackChange.emit(this.pageIndex);
  }
}
