import { Randomizer } from './../models/randomizer.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {

  constructor() { }

  randomNumber( min: number , max: number) {
       return Math.floor((Math.random() * max) + min);
  }

  generateRandomRoll( min: number, max: number ) {
    const randomRoll = [ { 'value': this.randomNumber(1, 6), 'bold': true },
    { 'value': this.randomNumber(1, 6), 'bold': true },
    { 'value': this.randomNumber(1, 6), 'bold': true },
    { 'value': this.randomNumber(1, 6), 'bold': true }];

    let masChico = -1;
    randomRoll.forEach(element => {
      if ( masChico >= element.value  || masChico === -1 ) {
        masChico = element.value;
      }
    });

    for (let index = 0; index < randomRoll.length; index++) {
      const element = randomRoll[index];
      if ( masChico === element.value  ) {
        randomRoll[index].bold = false;
        break;
      }
    }

    return randomRoll;
  }

  generateInnerHTML( randomizer: Randomizer[] ) {
    let html = '';
    randomizer.forEach(element => {
         if ( element.bold ) {
           html += '[';
         } else {
          html += '<i>';
         }

         html += element.value ;
         if ( element.bold ) {
          html += ']';
         } else {
          html += '</i>';
         }

         html += '&nbsp;';
    });
    return html;
  }
}
