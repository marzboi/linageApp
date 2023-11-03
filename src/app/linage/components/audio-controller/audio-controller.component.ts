import { Component, Input } from '@angular/core';

@Component({
  selector: 'linage-audio-controller',
  templateUrl: './audio-controller.component.html',
  styleUrls: ['./audio-controller.styles.scss'],
})
export class AudioControllerComponent {
  @Input() title?: string;
  @Input() audioSrc?: string;
}
