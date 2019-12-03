import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { Hero } from '../models/hero.model';
import swal from 'sweetalert2';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  totalHeros = 0;

  hero: Hero;

  constructor(public http: HttpClient) { }

   /** This observable returns all heroes
   * @returns heroes: Hero[ ] */
  loadHeroes( ) {

    const url = URL_SERVICIOS + '/heroes';

    return this.http.get(url).pipe(
              map((resp: any) => {
                // this.totalHeros = resp.heroeCount;
                this.totalHeros = resp.heroes.length;
                return resp.heroes;
              })
    );
  }

  /** This observable return 1 hero given its id
   * @returns heroes: Hero
  */
  loadHero(	id:	string ) {
    const url = URL_SERVICIOS + '/heroes/' + id;

    return this.http.get(url).pipe(
              map( (resp: any) => resp.heroe ));
  }

  /** This observable softdelete a heroes by id.
   * The pipe( map ) returns an answeer in JSON format
   * @returns resp = { ok: boolean,
            heroes: Hero }
   */
  deleteHero(	id:	string	) {

    const url = URL_SERVICIOS + '/heroes/' + id ;
    // TODO: Tratar de poner todos los swals en los componentes y no en los servicios.
    return this.http.delete(url).pipe(
                    map( (resp: any) => {
                      swal('Success', 'Hero deleted', 'success');
                      return resp;
                    } ));
  }

  /** This observable creates o update a hero
   * @returns heroes: Hero
  */
  saveHero( heroe: Hero ) {

    let url = URL_SERVICIOS + '/heroes';

    if ( heroe._id ) {
      // update
      url += '/' + heroe._id;

      return this.http.put( url, heroe ).pipe(
                map( (resp: any) => {
                  swal('Hero updated', heroe.firstname, 'success');
                  return resp.heroe;

                }));

    } else {
      // creating
      return this.http.post( url, heroe ).pipe(
              map( (resp: any) => {
                swal('Hero created', heroe.firstname, 'success');
                return resp.heroe;
              }));
    }
  }

}
