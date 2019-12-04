import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';
import { CustomizePageComponent } from './pages/customize-page/customize-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { RootComponent } from './root/root.component';
import { HamburgerComponent } from './widgets/hamburger/hamburger.component';

@NgModule({
  declarations: [
    CompletePageComponent,
    CustomizePageComponent,
    HamburgerComponent,
    RootComponent,
    WelcomePageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {
}
