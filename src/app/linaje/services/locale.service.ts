import { Injectable, signal, computed } from '@angular/core';

interface State {
  currentLocale: 'es' | 'en';
  localeContent: {
    introPage: {
      title: string;
      subtitle: string;
    };
  };
}

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  private initialLocale: 'es' = 'es';

  private spanishLocale = {
    introPage: {
      title: 'Linaje',
      subtitle: 'Una exposición digital visual y sonora',
    },
  };

  private englishLocale = {
    introPage: {
      title: 'Lineage',
      subtitle: 'A digital visual and sound exhibition',
    },
  };

  #state = signal<State>({
    currentLocale: this.initialLocale,
    localeContent: this.spanishLocale,
  });

  public currentLocale = computed(() => this.#state().currentLocale);
  public localeContent = computed(() => this.#state().localeContent);

  public changeLocale() {
    this.#state.set({
      currentLocale: this.currentLocale() === 'es' ? 'en' : 'es',
      localeContent:
        this.currentLocale() === 'es' ? this.englishLocale : this.spanishLocale,
    });
  }
}
