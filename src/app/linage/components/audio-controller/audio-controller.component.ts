import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

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
  @Input() index?: number;
  @ViewChild('audioPlayer') audioPlayerRef?: ElementRef;

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

  currentTrack: AudioTrack = this.tracks[0];

  receiveIndex(index: number) {
    this.currentTrack = this.tracks[index];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['index']) {
      if (this.index != null) {
        this.currentTrack = this.tracks[this.index];
        this.playTrack();
      }
    }
  }

  playTrack() {
    const audio = new Audio(this.currentTrack.url);
    audio.play().catch((error) => console.error('Error playing audio:', error));
  }
}
