import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Monster } from '../models/monster.model';
import { map, catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  totalMonsters = 0;

  monster: Monster;

  constructor(public http: HttpClient) { }

   /** This observable returns all monsters
   * @returns monsters: Monster[ ] */
  loadMonsters( ) {

    const url = URL_SERVICIOS + '/monsters';

    return this.http.get(url).pipe(
              map((resp: any) => {
                this.totalMonsters = resp.monsterCount;
                return resp.monsters;
              })
    );
  }

  /** This observable return 1 monster given its id
   * @returns monsters: Monster
  */
  loadMonster(	id:	string ) {
    const url = URL_SERVICIOS + '/monsters/' + id;

    return this.http.get(url).pipe(
              map( (resp: any) => resp.monster ));
  }

  /** This observable softdelete a monsters by id.
   * The pipe( map ) returns an answeer in JSON format
   * @returns resp = { ok: boolean,
            monsters: Monster }
   */
  deleteMonster(	id:	string	) {

    const url = URL_SERVICIOS + '/monsters/' + id ;
    // TODO: Tratar de poner todos los swals en los componentes y no en los servicios.
    return this.http.delete(url).pipe(
                    map( (resp: any) => {
                      swal('Success', 'Monster deleted', 'success');
                      return resp;
                    } ));
  }

  /** This observable creates o update a monster
   * @returns monsters: Monster
  */
  saveMonster( monsters: Monster ) {

    let url = URL_SERVICIOS + '/monsters';

    if ( monsters._id ) {
      // update
      url += '/' + monsters._id;

      return this.http.put( url, monsters ).pipe(
                map( (resp: any) => {
                  swal('Monster updated', monsters.name, 'success');
                  return resp.monsters;

                }));

    } else {
      // creating
      return this.http.post( url, monsters ).pipe(
              map( (resp: any) => {
                swal('Monster created', monsters.name, 'success');
                return resp.monsters;
              }));
    }
  }

}
