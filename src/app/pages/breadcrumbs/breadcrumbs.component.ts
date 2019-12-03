
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  label = '';

  constructor( private router: Router,
               public title: Title,
               public meta: Meta ) {

    this.getDataRoute()
    .subscribe( data => {

      this.label = data;
      this.title.setTitle(data);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.label
      };
      this.meta.updateTag(metaTag);

    });
   }

   getDataRoute() {
     return  this.router.events.pipe(
                                   filter( evento => evento instanceof ActivationEnd ),
               map( (evento: ActivationEnd) => evento.snapshot.routeConfig.path )
              );
   }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
