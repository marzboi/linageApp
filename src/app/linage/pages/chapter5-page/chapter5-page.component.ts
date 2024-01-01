import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linage-chapter5-page',
  templateUrl: './chapter5-page.component.html',
  styleUrls: ['./chapter5-page.component.scss'],
})
export class Chapter5PageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 5;

  handleEmit() {
    this.onTrackChange.emit(this.pageIndex);
  }
}
