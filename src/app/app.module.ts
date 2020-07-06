import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './pages/header/header.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroesComponent } from './pages/mainteinances/heroes/heroes.component';
import { HeroComponent } from './pages/mainteinances/heroes/hero.component';
import { MonstersComponent } from './pages/mainteinances/monsters/monsters.component';
import { MonsterComponent } from './pages/mainteinances/monsters/monster.component';
import { AboutComponent } from './pages/about/about.component';
import { PAGES_ROUTES } from './app.routes';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, HeroesComponent, HeaderComponent, SidebarComponent,
    HeroComponent, MonsterComponent, MonstersComponent, AboutComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PAGES_ROUTES,
    FontAwesomeModule,
    CommonModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
