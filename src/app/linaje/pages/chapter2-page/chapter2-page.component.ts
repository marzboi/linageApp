import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'linaje-chapter2-page',
  templateUrl: './chapter2-page.component.html',
  styleUrls: ['./chapter2-page.styles.scss'],
})
export class Chapter2PageComponent {
  localeService = inject(LocaleService);
  private pageIndex: number = 2;

  get title() {
    return this.localeService.localeContent().chapterTwo.title;
  }

  get subtitle() {
    return this.localeService.localeContent().chapterTwo.subtitle;
  }

  get audioTitle() {
    return this.localeService.audioTracks()[this.pageIndex].title;
  }

  changeTrack() {
    this.localeService.changeTrack(this.pageIndex);
  }
}
