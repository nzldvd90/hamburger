import { Component } from '@angular/core';
import { RootComponent } from '../../root/root.component';
import { HamburgerService } from '../../services/hamburger.service';

@Component({
  selector: 'app-customize-page',
  templateUrl: './customize-page.component.html',
  styleUrls: ['./customize-page.component.scss'],
})
export class CustomizePageComponent {

  readonly customizations = [
    {
      label: 'Pane',
      value: 'bread',
      choices: [
        { id: 'classic', label: 'Classico' },
        { id: 'sesame', label: 'Sesamo' },
        { id: 'black', label: 'Nero' },
      ],
    },
    {
      label: 'Carne',
      value: 'meat',
      choices: [
        { id: 'beef-classic', label: 'Manzo' },
        { id: 'beef-overcooked', label: 'Manzo (ben cotta)' },
        { id: 'chicken', label: 'Pollo' },
        { id: 'chicken-crispy', label: 'Crispy pollo' },
      ],
    },
    {
      label: 'Formaggio',
      value: 'cheese',
      choices: [
        { id: 'classic', label: 'Classico' },
        { id: 'cheddar', label: 'Cheddar' },
        { id: 'black', label: 'Nero' },
      ],
    },
    {
      label: 'Aggiunte',
      value: 'addOns',
      options: [
        { id: 'salad', label: 'Insalata' },
        { id: 'onions', label: 'Cipolle' },
        { id: 'pickles', label: 'Cetriolini' },
        { id: 'tomatoes', label: 'Pomodori' },
      ],
    },
    {
      label: 'Salse',
      value: 'sauces',
      options: [
        { id: 'mayonnaise', label: 'Mayonnaise' },
        { id: 'ketchup', label: 'Ketchup' },
        { id: 'senape', label: 'Senape' },
      ],
    },
  ];

  constructor(readonly hs: HamburgerService) {
  }
}
