import { LocaleService } from '../../services/locale.service';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ChangeDetectorRef,
  inject,
} from '@angular/core';

interface AudioTrack {
  url: string;
  title?: string;
}

@Component({
  selector: 'linaje-audio-controller',
  templateUrl: './audio-controller.component.html',
  styleUrls: ['./audio-controller.styles.scss'],
})
export class AudioControllerComponent implements OnInit, OnChanges {
  private readonly localeService = inject(LocaleService);
  private readonly cdRef = inject(ChangeDetectorRef);

  @Input() index = 0;
  @ViewChild('audioPlayer')
  private audioPlayerRef?: ElementRef<HTMLAudioElement>;

  audioPlaying = false;
  currentTime = 0;
  duration = 0;
  minimized = false;

  readonly tracks: AudioTrack[] = [
    { url: 'assets/00.mp3' },
    { url: 'assets/01.mp3' },
    { url: 'assets/02.mp3' },
    { url: 'assets/03.mp3' },
    { url: 'assets/04.mp3' },
    { url: 'assets/05.mp3' },
    { url: 'assets/06.mp3' },
  ];
  get next(): string {
    return this.localeService.localeContent().audioController.next;
  }

  get previous(): string {
    return this.localeService.localeContent().audioController.previous;
  }

  currentTrack: AudioTrack = {
    url: 'assets/00.mp3',
  };

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

  toggleMinimized(): void {
    this.minimized = !this.minimized;
  }

  selectTrack(index: number): void {
    if (index >= 0 && index < this.tracks.length) {
      this.currentTrack = this.tracks[index];
      this.index = index;
      this.audioPlaying = false;
    }
  }

  playAudio(): void {
    this.getAudioElement()
      ?.play()
      .then(() => (this.audioPlaying = true))
      .catch(() => (this.audioPlaying = false));
  }

  pauseAudio(): void {
    this.getAudioElement()?.pause();
    this.audioPlaying = false;
  }

  seek(event: MouseEvent): void {
    const progressBar = event.target as HTMLElement;
    const bounds = progressBar.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const percentage = x / bounds.width;
    const time = this.duration * percentage;
    this.seekToTime(time);
  }

  seekToTime(time: number): void {
    const audio = this.getAudioElement();
    if (audio) {
      audio.currentTime = time;
    }
  }

  updateProgress(): void {
    const audio = this.getAudioElement();
    if (audio) {
      this.currentTime = audio.currentTime;
    }
  }

  metadataLoaded(): void {
    const audio = this.getAudioElement();
    if (audio) {
      this.duration = audio.duration;
      this.cdRef.detectChanges();
    }
  }

  audioEnded(): void {
    this.audioPlaying = false;
    this.currentTime = 0;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  getProgress(): number {
    return this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0;
  }

  changeTrack(newIndex: number): void {
    this.selectTrack(newIndex);
  }

  private getAudioElement(): HTMLAudioElement | undefined {
    return this.audioPlayerRef?.nativeElement;
  }

  private padZero(number: number): string {
    return number < 10 ? `0${number}` : number.toString();
  }
}
