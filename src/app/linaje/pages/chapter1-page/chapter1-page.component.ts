import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linaje-chapter1-page',
  templateUrl: './chapter1-page.component.html',
  styleUrls: ['./chapter1-page.styles.scss'],
})
export class Chapter1PageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 1;

  handleEmit() {
    this.onTrackChange.emit(this.pageIndex);
  }
}
