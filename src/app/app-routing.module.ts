import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';
import { CustomizePageComponent } from './pages/customize-page/customize-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'customize', component: CustomizePageComponent },
  { path: 'complete', component: CompletePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
