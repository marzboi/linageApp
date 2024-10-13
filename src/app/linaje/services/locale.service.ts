import { Injectable, signal, computed } from '@angular/core';
import { en } from './englishLocale';
import { es } from './spanishLocale';
import { State } from './state.type';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private initialLocale: 'es' = 'es';

  #state = signal<State>({
    currentLocale: this.initialLocale,
    localeContent: es,
  });

  public currentLocale = computed(() => this.#state().currentLocale);
  public localeContent = computed(() => this.#state().localeContent);

  public changeLocale() {
    this.#state.set({
      currentLocale: this.currentLocale() === 'es' ? 'en' : 'es',
      localeContent: this.currentLocale() === 'es' ? es : en,
    });
  }
}
