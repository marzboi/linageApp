import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'linaje-chapter1-page',
  templateUrl: './chapter1-page.component.html',
  styleUrls: ['./chapter1-page.styles.scss'],
})
export class Chapter1PageComponent {
  localeService = inject(LocaleService);
  private pageIndex: number = 1;

  get title() {
    return this.localeService.localeContent().chapterOne.title;
  }

  get subtitle() {
    return this.localeService.localeContent().chapterOne.subtitle;
  }

  get audioTitle() {
    const track = this.localeService.audioTracks()[this.pageIndex];
    return `Audio ${track.number} ${track.title}`;
  }

  changeTrack() {
    this.localeService.changeTrack(this.pageIndex);
  }
}
