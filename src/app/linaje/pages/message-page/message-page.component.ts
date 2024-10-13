import { Component, EventEmitter, Output, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

interface emittedObject {
  pageIndex: number;
  title: string;
}

@Component({
  selector: 'linaje-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['message-page.styles.scss'],
})
export class MessagePageComponent {
  localeService = inject(LocaleService);
  @Output() onTrackChange: EventEmitter<number> = new EventEmitter<number>();
  private pageIndex: number = 0;

  get paragraphOne() {
    return this.localeService.localeContent().messagePage.paragraphOne;
  }

  get paragraphTwo() {
    return this.localeService.localeContent().messagePage.paragraphTwo;
  }

  get audioTitle() {
    return this.localeService.localeContent().messagePage.audioTitle;
  }

  handleEmit() {
    this.onTrackChange.emit(this.pageIndex);
  }
}
