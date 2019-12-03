import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Race } from '../models/race.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroRaceService {

  totalHeroRaces = 0;

  race: Race;

  constructor(public http: HttpClient ) {
  }

  /**
   * This observable loads all hero races.
   * @returns races: Race[]
   */
  loadHeroRaces(desde: number = 0  ) {
    const url = URL_SERVICIOS + '/races';
    return this.http.get( url ).pipe(
              map( (resp: any) => {
                this.totalHeroRaces = resp.raceCount;
                return resp.races;
              }));
  }

  loadRace(	id:	string ) {
    const url = URL_SERVICIOS + '/races/' + id;
    return this.http.get(url).pipe(
              map( (resp: any) => resp.race ));
  }


}
