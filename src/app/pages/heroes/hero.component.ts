import { RandomizerService } from './../../services/randomizer.service';

import { WeaponService } from './../../services/weapon.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../../models/hero.model';
import { Race } from '../../models/race.model';
import { Class } from '../../models/class.model';
import { Randomizer } from '../../models/randomizer.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroRaceService } from '../../services/hero-race.service';
import { HeroService } from '../../services/hero.service';
import { HeroClassService } from '../../services/hero-class.service';
import { Weapon } from '../../models/weapon.model';

import { faDice } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  faDice = faDice;

  races: Race[] = [];
  classes: Class[] = [];
  weapons: Weapon[] = [];

  race: Race = new Race('');
  weapon: Weapon = new Weapon('');
  class: Class = new Class('');
  hero: Hero = new Hero('');

  randomStr: Randomizer[] = [ { 'value': 0, 'bold': true },
  { 'value': 0, 'bold': true },
  { 'value': 0, 'bold': true },
  { 'value': 0, 'bold': false }
];
  randomInt: Randomizer[] = [ { 'value': 0, 'bold': true },
  { 'value': 0, 'bold': true },
  { 'value': 0, 'bold': true },
  { 'value': 0, 'bold': false }
];
  randomDex: Randomizer[] = [ { 'value': 0, 'bold': true },
  { 'value': 0, 'bold': true },
  { 'value': 0, 'bold': true },
  { 'value': 0, 'bold': false }
];

  str = 0;
  int = 0;
  dex = 0;

  htmlStr = '';
  htmlInt = '';
  htmlDex = '';

  constructor(
    public _raceService: HeroRaceService,
    public _heroService: HeroService,
    public _heroClassService: HeroClassService,
    public _weaponService: WeaponService,
    public _randomizerService: RandomizerService,
    public router: Router,
    public activatedRoute: ActivatedRoute) {

      this.hero.str = this.str;
      this.hero.int = this.int;
      this.hero.dex = this.dex;

     activatedRoute.params.subscribe(params => {

          const id = params['id'];
          if ( id !== 'create' ) {
              this.loadHero(id);
          }
      });

     }

  ngOnInit() {

    this._raceService.loadHeroRaces()
               .subscribe( races => this.races = races );
    this._heroClassService.loadHeroClasses()
              .subscribe( heroClasses => this.classes = heroClasses);
    this._weaponService.loadWeapons()
              .subscribe( weapons => this.weapons = weapons );
  }

  loadHero(id: string) {
    this._heroService.loadHero(id)
        .subscribe( heroe => {
          this.hero = heroe;
          this.str = this.hero.str;
          this.int = this.hero.int;
          this.dex = this.hero.dex;
          this.changeClass( heroe.class._id);
          this.changeRace( heroe.race._id );
          this.changeWeapon( heroe.weapon._id );
        } );
  }

  saveHero(f: NgForm) {

    if (f.invalid) {
      return;
    }

    this.hero.str = this.str;
    this.hero.int = this.int;
    this.hero.dex = this.dex;
    this.hero.race = this.race._id;
    this.hero.$class = this.class._id;
    this.hero.weapon = this.weapon._id;

    this._heroService.saveHero( this.hero )
        .subscribe( hero => {
                this.router.navigate(['/heroes']);
        });
  }

  /**
   * For changing heros race when necessary.
  */
  changeRace( id: string ) {
    if (id) {
        // comes from $event.target.value
         this._raceService.loadRace(id)
                     .subscribe( race => this.race = race );
    }
  }

  changeClass( id: string ) {
    if (id) {
        // comes from $event.target.value
         this._heroClassService.loadClass(id)
                     .subscribe( heroClass => this.class = heroClass );
    }
   }

   changeWeapon( id: string ) {
    if (id) {
        // comes from $event.target.value
         this._weaponService.loadWeapon(id)
                     .subscribe( weapon => this.weapon = weapon );
    }
   }

   generateStr() {
    this.randomStr = this._randomizerService.generateRandomRoll(1, 6);
    this.str = 0;
    this.randomStr.forEach(element => {
       if ( element.bold ) {
         this.str += element.value;
       }
    });

    this.htmlStr = this._randomizerService.generateInnerHTML( this.randomStr );
    document.getElementById('strHTML').innerHTML = this.htmlStr + '<br/>';

    return false;
   }

   generateInt() {
    this.randomInt = this._randomizerService.generateRandomRoll(1, 6);
    this.int = 0;
    this.randomInt.forEach(element => {
       if ( element.bold ) {
         this.int += element.value;
       }
    });
    this.htmlInt = this._randomizerService.generateInnerHTML( this.randomInt );
    document.getElementById('intHTML').innerHTML = this.htmlInt + '<br/>';
    return false;
  }

  generateDex() {
    this.randomDex = this._randomizerService.generateRandomRoll(1, 6);
    this.dex = 0;
    this.randomDex.forEach(element => {
       if ( element.bold ) {
         this.dex += element.value;
       }
    });
    this.htmlDex = this._randomizerService.generateInnerHTML( this.randomDex );
    document.getElementById('dexHTML').innerHTML = this.htmlDex + '<br/>';
    return false;
  }

  /**
   * Generate random heroe values
   */
  randomize() {
    
  }
}
