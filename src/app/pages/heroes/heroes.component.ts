import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';

import swal from 'sweetalert2';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  loading = false;

  constructor(public _heroService: HeroService) {
    }

  ngOnInit() {
    this.loadHeroes();
  }

  loadHeroes() {
    this.loading = true;
    this._heroService.loadHeroes()
              .subscribe( heroes => {
                this.heroes = heroes;
                this.loading = false;
                // console.log(this.heroes);
          });
  }

  deleteHero(hero: Hero) {
    swal({
      title: 'Are you sure?',
      text: 'You are about to delete ' + hero.firstname,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.value) {
        this._heroService.deleteHero(hero._id)
                .subscribe( () => {
                  this.loadHeroes();
                });
      }
    });
  }
}
