import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'linaje-chapter5-page',
  templateUrl: './chapter5-page.component.html',
  styleUrls: ['./chapter5-page.component.scss'],
})
export class Chapter5PageComponent {
  localeService = inject(LocaleService);
  private pageIndex: number = 5;

  get title() {
    return this.localeService.localeContent().chapterOne.title;
  }

  get audioTitle() {
    return this.localeService.audioTracks()[this.pageIndex].title;
  }

  changeTrack() {
    this.localeService.changeTrack(this.pageIndex);
  }
}
