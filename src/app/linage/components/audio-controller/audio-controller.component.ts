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
      title: 'This is track 1',
      url: 'assets/track1.mp3',
    },
    {
      title: 'this is now track 2',
      url: 'track2',
    },
  ];

  currentTrack?: AudioTrack;

  ngOnInit(): void {
    if (this.index === undefined && this.tracks.length > 0) {
      this.selectTrack(0);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['index'] && changes['index'].currentValue !== undefined) {
      this.selectTrack(changes['index'].currentValue);
    }
  }

  selectTrack(index: number): void {
    this.currentTrack = this.tracks[index];
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
