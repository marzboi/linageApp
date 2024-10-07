import { Component, Input } from '@angular/core';

@Component({
  selector: 'linaje-track-title',
  templateUrl: './track-title.component.html',
  styleUrls: ['./track-title.component.scss'],
})
export class TrackTitleComponent {
  @Input({ required: true }) title?: string;
  @Input({ required: true }) number?: string;
  @Input() public whiteBackground: boolean = false;
  @Input() public audioString: string = 'Audio';
}
