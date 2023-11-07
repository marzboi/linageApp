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
  currentTime: number = 0;

  tracks: AudioTrack[] = [
    {
      number: '00',
      title: 'Intro',
      url: 'assets/01.mp3',
    },
    {
      number: '01',
      title: 'La Cristiandad en mi familia',
      url: 'assets/02.mp3',
    },
    {
      number: '02',
      title: 'This is track 3',
      url: 'assets/03.mp3',
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
      this.audioPlaying = false;
    }
  }

  selectTrack(index: number): void {
    this.currentTrack = this.tracks[index];
  }

  playAudio(): void {
    if (this.audioPlayerRef && this.audioPlayerRef.nativeElement) {
      const audio: HTMLAudioElement = this.audioPlayerRef.nativeElement;
      audio
        .play()
        .then(() => (this.audioPlaying = true))
        .catch(() => (this.audioPlaying = false));
    }
  }

  pauseAudio(): void {
    if (this.audioPlayerRef && this.audioPlayerRef.nativeElement) {
      const audio: HTMLAudioElement = this.audioPlayerRef.nativeElement;
      audio.pause();
      this.audioPlaying = false;
    }
  }

  get currentTimes(): number {
    if (this.audioPlayerRef && this.audioPlayerRef.nativeElement) {
      return this.audioPlayerRef.nativeElement.currentTime;
    }
    return 0;
  }

  getDuration(): number {
    if (this.audioPlayerRef && this.audioPlayerRef.nativeElement) {
      return this.audioPlayerRef.nativeElement.duration;
    }
    return 0;
  }

  seekTo(event: Event): void {
    const target = event.target as HTMLInputElement;
    const time = Number(target.value);
    if (this.audioPlayerRef && this.audioPlayerRef.nativeElement) {
      const audio: HTMLAudioElement = this.audioPlayerRef.nativeElement;
      audio.currentTime = time;
      if (!this.audioPlaying) {
        this.playAudio();
      }
    }
  }

  updateProgress(): void {
    if (this.audioPlayerRef && this.audioPlayerRef.nativeElement) {
      this.currentTime = this.audioPlayerRef.nativeElement.currentTime;
    }
  }
}
