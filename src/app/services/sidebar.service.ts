import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [];
  constructor() { }

  cargarMenu() {
    this.menu = [{
            titulo: 'Principal',
            icono: 'mdi mdi-shield-outline',
            submenu: [
                { titulo: 'Dashboard', url: '/dashboard' },
                { titulo: 'About', url: '/about' }
            ]
        },
        {
            titulo: 'Manteinances',
            icono: 'mdi mdi-sword',
            submenu: [
                { titulo: 'Heroes', url: '/heroes' },
                { titulo: 'Monsters', url: '/monsters' }
            ]
        }
        ];
  }
}
