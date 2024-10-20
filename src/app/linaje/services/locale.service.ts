import { Injectable, signal, computed } from '@angular/core';
import { en } from './englishLocale';
import { es } from './spanishLocale';
import { State } from './state.type';
import { getAudioTracks } from './audioTracks';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private initialLocale: 'es' = 'es';
  private index = signal<number>(0);

  #state = signal<State>({
    currentLocale: this.initialLocale,
    localeContent: es,
    audioTracks: getAudioTracks(this.initialLocale),
    track: getAudioTracks(this.initialLocale)[this.index()],
  });

  public currentLocale = computed(() => this.#state().currentLocale);
  public localeContent = computed(() => this.#state().localeContent);
  public audioTracks = computed(() => this.#state().audioTracks);
  public currentTrack = computed(() => this.#state().track);
  public currentIndex = computed(() => this.index());

  public changeLocale() {
    const newLocale = this.currentLocale() === 'es' ? 'en' : 'es';
    this.#state.set({
      currentLocale: newLocale,
      localeContent: newLocale === 'es' ? es : en,
      audioTracks: getAudioTracks(newLocale),
      track: getAudioTracks(newLocale)[this.index()],
    });
  }

  public changeTrack(index: number) {
    this.index.set(index);
    this.#state.set({
      ...this.#state(),
      track: this.audioTracks()[index],
    });
  }
}
