import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HamburgerService {
  bread = 'sesame';

  meat = 'beef-classic';

  cheese = 'cheddar';

  sauces = {
    ketchup: true,
    mayonnaise: false,
    senape: false,
  };

  addOns = {
    salad: true,
    onions: true,
    tomatoes: true,
    pickles: true,
  };

  get ingredients() {
    let sauces = Object.entries(this.sauces).filter(([_, activated]) => activated).map(([s]) => `sauce-${s}`);
    let addOns = Object.entries(this.addOns).filter(([_, activated]) => activated).map(([a]) => a);

    return [
      ...sauces,

      ...this.addOns.salad ? ['salad'] : [],

      ...[`meat-${ this.meat }`],

      ...[`cheese-${ this.cheese }`],

      ...addOns,

      ...sauces,
    ];
  }
}
