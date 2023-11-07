import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

interface AudioTrack {
  number: string;
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
  audioPlaying: boolean = false;

  tracks: AudioTrack[] = [
    {
      number: '00',
      title: 'Intro',
      url: 'assets/01.wav',
    },
    {
      number: '01',
      title: 'La Cristiandad en mi familia',
      url: 'assets/02.wav',
    },
    {
      number: '02',
      title: 'This is track 3',
      url: 'assets/03.wav',
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
      audio
        .play()
        .then(() => (this.audioPlaying = true))
        .catch(() => (this.audioPlaying = false));
    }
  }
}
