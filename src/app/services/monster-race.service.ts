import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { MonsterRace } from '../models/monsterrace.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonsterRaceService {

  totalMonsterRaces = 0;
  monsterrace: MonsterRace;

  constructor(public http: HttpClient ) {
  }

  /**
   * This observable loads all monsterraces.
   * @returns monsterraces: MonsterRace[]
   */
  loadMonsterRaces(desde: number = 0  ) {
    const url = URL_SERVICIOS + '/monsterraces';
    return this.http.get( url ).pipe(
              map( (resp: any) => {
                this.totalMonsterRaces = resp.monsterraceCount;
                return resp.monsterraces;
              }));
  }

  loadMonsterRace(	id:	string ) {
    const url = URL_SERVICIOS + '/monsterraces/' + id;
    return this.http.get(url).pipe(
              map( (resp: any) => resp.monsterrace ));
  }

}
