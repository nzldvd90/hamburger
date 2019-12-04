import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { HamburgerComponent } from './widgets/hamburger/hamburger.component';

@NgModule({
  declarations: [
    HamburgerComponent,
    RootComponent,
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
