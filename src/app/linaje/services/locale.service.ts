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

  #state = signal<State>({
    currentLocale: this.initialLocale,
    localeContent: es,
    audioTracks: getAudioTracks(this.initialLocale),
  });

  public currentLocale = computed(() => this.#state().currentLocale);
  public localeContent = computed(() => this.#state().localeContent);
  public audioTracks = computed(() => this.#state().audioTracks);

  public changeLocale() {
    const newLocale = this.currentLocale() === 'es' ? 'en' : 'es';
    this.#state.set({
      currentLocale: newLocale,
      localeContent: newLocale === 'es' ? es : en,
      audioTracks: getAudioTracks(newLocale),
    });
  }
}
