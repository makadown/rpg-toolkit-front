import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 title = 'app';
  constructor() { }

  ngOnInit() {
    /* This is needed for the template. Otherwise the app wont load. (Mario Serrano)
       this function is declared @ assets/js/custom.js
    */
    init_plugins();
  }

}
