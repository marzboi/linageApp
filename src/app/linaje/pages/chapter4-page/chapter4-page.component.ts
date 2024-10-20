import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'linaje-chapter4-page',
  templateUrl: './chapter4-page.component.html',
  styleUrls: ['./chapter4-page.component.scss'],
})
export class Chapter4PageComponent {
  localeService = inject(LocaleService);
  private pageIndex: number = 4;

  get title() {
    return this.localeService.localeContent().chapterFour.title;
  }

  get subtitle() {
    return this.localeService.localeContent().chapterFour.subtitle;
  }

  get audioTitle() {
    return this.localeService.audioTracks()[this.pageIndex].title;
  }

  changeTrack() {
    this.localeService.changeTrack(this.pageIndex);
  }
}
