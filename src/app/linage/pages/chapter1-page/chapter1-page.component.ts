import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'linage-chapter1-page',
  templateUrl: './chapter1-page.component.html',
  styleUrls: ['./chapter1-page.styles.scss'],
})
export class Chapter1PageComponent {
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 1;

  handleEmit() {
    this.onTrackChange.emit(this.pageIndex);
  }

  public images = [
    {
      url: 'assets/image1.png',
      title: 'Image 1',
    },
    {
      url: 'assets/image2.png',
      title: 'Image 2',
    },
    {
      url: 'assets/image3.png',
      title: 'Image 3',
    },
    {
      url: 'assets/image4.png',
      title: 'Image 4',
    },
    {
      url: 'assets/image5.png',
      title: 'Image 5',
    },
  ];
}
