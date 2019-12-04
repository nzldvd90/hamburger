import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizePageComponent } from './pages/customize-page/customize-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'customize', component: CustomizePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
