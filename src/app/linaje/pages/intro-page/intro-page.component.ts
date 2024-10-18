import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'linaje-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['intro-page.styles.scss'],
})
export class IntroPageComponent {
  localeService = inject(LocaleService);

  get title() {
    return this.localeService.localeContent().introPage.title;
  }

  get subtitle() {
    return this.localeService.localeContent().introPage.subtitle;
  }
}
