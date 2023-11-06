import { Component, Input } from '@angular/core';

interface AudioTrack {
  title: string;
  url: string;
}

@Component({
  selector: 'linage-audio-controller',
  templateUrl: './audio-controller.component.html',
  styleUrls: ['./audio-controller.styles.scss'],
})
export class AudioControllerComponent {
  @Input() audioTrack?: number;
  currentTrack = 0;

  tracks: AudioTrack[] = [
    {
      title: 'Track 1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      title: 'Track 2',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
  ];
}
