import { Routes } from '@angular/router';
import { DynamicLayoutComponent } from './layout/dynamic-layout/dynamic-layout.component';

// INFO: Having <router-outlet></router-outlet> element rendered in the DOM (devtools), is OK!
//  It is intended behavior.
//  Additionally, you must take styling (flex/grid) into account, since an extra element is actually rendered into the DOM.
export const routes: Routes = [
    {
        path: '',
        title: 'home',
        pathMatch: 'full',
        component: DynamicLayoutComponent,
        loadChildren: () => import('./pages/home/home.routes').then(m => m.routes)
    },
    {
        path: 'game',
        title: 'game',
        component: DynamicLayoutComponent,
        loadChildren: () => import('./pages/game/game.routes').then(m => m.routes)
    },
    {
        path: 'about',
        title: 'about',
        component: DynamicLayoutComponent,
        loadChildren: () => import('./pages/about/about.routes').then(m => m.routes)
    },

    { 
        path: '**', 
        title:'error',
        component: DynamicLayoutComponent,
        loadChildren: () => import('./pages/error/error.routes').then(m => m.routes)
    }
];

