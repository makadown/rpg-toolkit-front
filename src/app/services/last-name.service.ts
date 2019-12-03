import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { LastName } from '../models/lastname.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LastNameService {

  totalHeroLastNames = 0;
  lastname: LastName;

  constructor(public http: HttpClient ) {
  }

  /**
   * This observable loads all hero lastnames.  (only to use when randomizing)
   * @returns lastnames: LastName[]
   */
  loadHeroLastNames(desde: number = 0  ) {
    const url = URL_SERVICIOS + '/lastnames';
    return this.http.get( url ).pipe(
              map( (resp: any) => {
                this.totalHeroLastNames = resp.lastnameCount;
                return resp.lastnames;
              }));
  }

  loadLastName(	id:	string ) {
    const url = URL_SERVICIOS + '/lastnames/' + id;
    return this.http.get(url).pipe(
              map( (resp: any) => resp.lastname ));
  }

}
