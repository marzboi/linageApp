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

  changeTrack() {
    this.localeService.changeTrack(this.pageIndex);
  }
}
