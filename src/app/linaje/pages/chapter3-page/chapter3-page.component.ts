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

  changeTrack() {
    this.localeService.changeTrack(this.pageIndex);
  }
}
