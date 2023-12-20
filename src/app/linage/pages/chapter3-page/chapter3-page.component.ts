import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linage-chapter3-page',
  templateUrl: './chapter3-page.component.html',
  styleUrls: ['./chapter3-page.component.scss'],
})
export class Chapter3PageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 3;

  handleEmit() {
    this.onTrackChange.emit(this.pageIndex);
  }
}
