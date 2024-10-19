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

  changeTrack() {
    this.localeService.changeTrack(this.pageIndex);
  }
}
