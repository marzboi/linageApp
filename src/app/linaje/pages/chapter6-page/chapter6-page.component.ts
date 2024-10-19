import { Component, inject } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'linaje-chapter6-page',
  templateUrl: './chapter6-page.component.html',
  styleUrls: ['./chapter6-page.component.scss'],
})
export class Chapter6PageComponent {
  localeService = inject(LocaleService);
  private pageIndex: number = 6;

  changeTrack() {
    this.localeService.changeTrack(this.pageIndex);
  }
}
