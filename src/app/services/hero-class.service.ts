import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Class } from '../models/class.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroClassService {

  totalHeroClasses = 0;

  class: Class;

  constructor(public http: HttpClient ) {
  }

  /**
   * This observable loads all hero classs.
   * @returns heroClasses: Class[]
   */
  loadHeroClasses(desde: number = 0  ) {
    const url = URL_SERVICIOS + '/heroclasses';
    return this.http.get( url ).pipe(
              map( (resp: any) => {
                this.totalHeroClasses = resp.heroClassCount;
                return resp.heroClasses;
              }));
  }

  loadClass(	id:	string ) {
    const url = URL_SERVICIOS + '/heroclasses/' + id;
    return this.http.get(url).pipe(
              map( (resp: any) => resp.heroClass ));
  }
}
