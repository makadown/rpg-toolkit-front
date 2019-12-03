import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Weapon } from '../models/weapon.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  totalWeapons = 0;
  weapon: Weapon;

  constructor(public http: HttpClient ) {
  }

  /**
   * This observable loads all weapons.
   * @returns weapons: Weapon[]
   */
  loadWeapons(desde: number = 0  ) {
    const url = URL_SERVICIOS + '/weapons';
    return this.http.get( url ).pipe(
              map( (resp: any) => {
                this.totalWeapons = resp.weaponCount;
                return resp.weapons;
              }));
  }

  loadWeapon(	id:	string ) {
    const url = URL_SERVICIOS + '/weapons/' + id;
    return this.http.get(url).pipe(
              map( (resp: any) => resp.weapon ));
  }

}
