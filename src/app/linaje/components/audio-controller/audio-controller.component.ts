import { LocaleService } from '../../services/locale.service';
import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
  ChangeDetectorRef,
  inject,
  signal,
  effect,
  computed,
} from '@angular/core';

interface AudioTrack {
  number: string;
  title: string;
  url: string;
}

@Component({
  selector: 'linaje-audio-controller',
  templateUrl: './audio-controller.component.html',
  styleUrls: ['./audio-controller.styles.scss'],
})
export class AudioControllerComponent {
  LocaleService = inject(LocaleService);
  cdRef = inject(ChangeDetectorRef);

  @Input() index: number = 0;
  @ViewChild('audioPlayer') audioPlayerRef?: ElementRef;

  audioPlaying: boolean = false;
  currentTime: number = 0;
  duration: number = 0;
  minimized: boolean = false;

  private currentIndex = signal(0);

  currentTrack = computed(() => {
    const tracks = this.LocaleService.audioTracks();
    return tracks[this.currentIndex()];
  });

  get trackTitle(): string {
    return this.LocaleService.localeContent().audioController.trackTitle;
  }

  get next(): string {
    return this.LocaleService.localeContent().audioController.next;
  }

  get previous(): string {
    return this.LocaleService.localeContent().audioController.previous;
  }

  get tracks(): AudioTrack[] {
    return this.LocaleService.audioTracks();
  }

  toggleMinimized(): void {
    this.minimized = !this.minimized;
  }

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
    if (index >= 0 && index < this.tracks.length) {
      this.currentIndex.set(index);
      this.audioPlaying = false;
      this.cdRef.detectChanges();
    }
  }

  changeTrack(index: number): void {
    this.selectTrack(index);
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
      const duration = this.audioPlayerRef.nativeElement.duration;

      if (isFinite(duration)) {
        return duration;
      }
    }
    return 0;
  }

  metadataLoaded(): void {
    if (this.audioPlayerRef && this.audioPlayerRef.nativeElement) {
      this.duration = this.audioPlayerRef.nativeElement.duration;
      this.cdRef.detectChanges();
    }
  }

  seek(event: MouseEvent): void {
    const progressBar: HTMLElement = event.target as HTMLElement;
    const bounds = progressBar.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const percentage = x / bounds.width;
    const time = this.duration * percentage;
    this.seekToTime(time);
  }

  seekToTime(time: number): void {
    if (this.audioPlayerRef && this.audioPlayerRef.nativeElement) {
      const audio: HTMLAudioElement = this.audioPlayerRef.nativeElement;
      audio.currentTime = time;
    }
  }

  updateProgress(): void {
    if (this.audioPlayerRef && this.audioPlayerRef.nativeElement) {
      this.currentTime = this.audioPlayerRef.nativeElement.currentTime;
    }
  }

  formatTime(time: number): string {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = Math.floor(time % 60);
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(number: number): string {
    return number < 10 ? `0${number}` : number.toString();
  }

  getProgress(): number {
    if (this.duration > 0) {
      return (this.currentTime / this.duration) * 100;
    }
    return 0;
  }

  audioEnded(): void {
    this.audioPlaying = false;
    this.currentTime = 0;
  }
}
