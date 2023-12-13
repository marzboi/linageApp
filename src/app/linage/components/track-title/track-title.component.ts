import { Component, Input } from '@angular/core';

@Component({
  selector: 'linage-track-title',
  templateUrl: './track-title.component.html',
  styleUrls: ['./track-title.component.scss'],
})
export class TrackTitleComponent {
  @Input({ required: true }) title?: string;
  @Input({ required: true }) number?: string;
}
