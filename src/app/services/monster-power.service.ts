import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { MonsterPower } from '../models/monsterpower.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonsterPowerService {

  totalMonsterPowers = 0;
  monsterpower: MonsterPower;

  constructor(public http: HttpClient ) {
  }

  /**
   * This observable loads all monsterpowers.
   * @returns monsterpowers: MonsterPower[]
   */
  loadMonsterPowers(desde: number = 0  ) {
    const url = URL_SERVICIOS + '/monsterpowers';
    return this.http.get( url ).pipe(
              map( (resp: any) => {
                this.totalMonsterPowers = resp.monsterpowerCount;
                return resp.monsterpowers;
              }));
  }

  loadMonsterPower(	id:	string ) {
    const url = URL_SERVICIOS + '/monsterpowers/' + id;
    return this.http.get(url).pipe(
              map( (resp: any) => resp.monsterpower ));
  }

}
