import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'linaje-chapter3-page',
  templateUrl: './chapter3-page.component.html',
  styleUrls: ['./chapter3-page.component.scss'],
})
export class Chapter3PageComponent {
  localeService = inject(LocaleService);
  private pageIndex: number = 3;

  get title() {
    return this.localeService.localeContent().chapterThree.title;
  }

  get subtitle() {
    return this.localeService.localeContent().chapterThree.subtitle;
  }

  get audioTitle() {
    return this.localeService.audioTracks()[this.pageIndex].title;
  }

  changeTrack() {
    this.localeService.changeTrack(this.pageIndex);
  }
}
