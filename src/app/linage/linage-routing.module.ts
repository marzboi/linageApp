import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'intro', component: LayoutPageComponent },
      { path: '**', redirectTo: 'intro' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinageRoutingModule {}
