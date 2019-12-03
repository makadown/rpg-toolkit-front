import { Component, OnInit } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterService } from '../../services/monster.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  monsters: Monster[] = [];
  loading = false;

  constructor(public _monsterService: MonsterService) {
    }

  ngOnInit() {
    this.loadMonsters();
  }

  loadMonsters() {
    this.loading = true;
    this._monsterService.loadMonsters()
              .subscribe( monsters => {
                this.monsters = monsters;
                this.loading = false;
                console.log(this.monsters);
          });
  }

  deleteMonster(monster: Monster) {
    swal({
      title: 'Are you sure?',
      text: 'You are about to delete ' + monster.name,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then((result) => {
      if (result.value) {
        this._monsterService.deleteMonster(monster._id)
                .subscribe( () => {
                  this.loadMonsters();
                });
      }
    });
  }

}
