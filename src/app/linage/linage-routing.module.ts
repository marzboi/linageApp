import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'intro', component: IntroPageComponent },
      { path: '**', redirectTo: 'intro' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinageRoutingModule {}
