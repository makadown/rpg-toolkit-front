import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './pages/mainteinances/heroes/heroes.component';
import { HeroComponent } from './pages/mainteinances/heroes/hero.component';
import { MonstersComponent } from './pages/mainteinances/monsters/monsters.component';
import { MonsterComponent } from './pages/mainteinances/monsters/monster.component';
import { AboutComponent } from './pages/about/about.component';

const pagesRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: 'monsters', component: MonstersComponent },
    { path: 'monster/:id', component: MonsterComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NopagefoundComponent }
];

export const PAGES_ROUTES = RouterModule.forRoot(pagesRoutes);
