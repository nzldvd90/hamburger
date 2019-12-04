import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HamburgerService } from '../services/hamburger.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {

  get expanded() {
    return this.router.url === '/customize';
  }

  constructor(
    readonly hs: HamburgerService,
    private readonly router: Router,
  ) {
  }
}
