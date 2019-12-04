import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent {
  @Input() ingredients: string[] = [];
  @Input() bread = 'classic';
  @Input() expanded = true;
}
