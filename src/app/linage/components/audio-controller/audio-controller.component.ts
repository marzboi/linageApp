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
      url: 'assets/goofyy.mp3',
    },
    {
      title: 'Track 2',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
  ];

  currentTrack?: AudioTrack;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['index'] && changes['index'].currentValue !== undefined) {
      setTimeout(() => {
        this.selectTrack(changes['index'].currentValue);
      }, 500);
    }
  }

  selectTrack(index: number): void {
    this.currentTrack = this.tracks[index];
    this.playAudio();
  }

  playAudio(): void {
    if (this.audioPlayerRef && this.audioPlayerRef.nativeElement) {
      const audio: HTMLAudioElement = this.audioPlayerRef.nativeElement;
      audio.load();
      audio.play().catch((e) => {
        console.error('Error when trying to play audio:', e);
      });
    }
  }
}
