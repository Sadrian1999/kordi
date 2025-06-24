import { Routes } from '@angular/router';
import { RovancsBase } from './rovancs-base/rovancs-base';
import { Lepedo } from './lepedo/lepedo';
import { Calculations } from './calculations/calculations';
import { ExpiringList } from './expiring-list/expiring-list';
import { Olvado } from './olvado/olvado';

export const routes: Routes = [
  {
    path: '',
    title: "Kordifaszos app",
    component: RovancsBase,
  },
  {
    path:'lepedo',
    title: "Lepedő",
    component: Lepedo,
  },
  {
    path:'szamitas',
    title: "Számítás",
    component: Calculations,
  },
  {
    path: 'szef',
    title: "Széf",
    component: RovancsBase,
  },
  {
    path: 'expiring-list',
    title: "Lejáratok Lista",
    component: ExpiringList,
  },
  {
    path: 'olvado',
    title: "Olvadó számítsa",
    component: Olvado,
  }
];
