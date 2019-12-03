import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { FirstName } from '../models/firstname.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirstNameService {

  totalHeroFirstNames = 0;
  firstname: FirstName;

  constructor(public http: HttpClient ) {
  }

  /**
   * This observable loads all hero posible firstnames. (only to use when randomizing)
   * @returns firstnames: FirstName[]
   */
  loadHeroFirstNames(desde: number = 0  ) {
    const url = URL_SERVICIOS + '/firstnames';
    return this.http.get( url ).pipe(
              map( (resp: any) => {
                this.totalHeroFirstNames = resp.firstnameCount;
                return resp.firstnames;
              }));
  }

  loadFirstName(	id:	string ) {
    const url = URL_SERVICIOS + '/firstnames/' + id;
    return this.http.get(url).pipe(
              map( (resp: any) => resp.firstname ));
  }

}
