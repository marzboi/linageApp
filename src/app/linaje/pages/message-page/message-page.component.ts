import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'linaje-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['message-page.styles.scss'],
})
export class MessagePageComponent {
  localeService = inject(LocaleService);
  private pageIndex: number = 0;

  get paragraphOne() {
    return this.localeService.localeContent().messagePage.paragraphOne;
  }

  get paragraphTwo() {
    return this.localeService.localeContent().messagePage.paragraphTwo;
  }

  get audioTitle() {
    const track = this.localeService.audioTracks()[this.pageIndex];
    return `Audio ${track.number} ${track.title}`;
  }

  changeTrack() {
    this.localeService.changeTrack(this.pageIndex);
  }
}
