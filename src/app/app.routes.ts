import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DynamicLayoutComponent } from './layout/dynamic-layout/dynamic-layout.component';

// having <router-outlet> element rendered in the DOM (devtools), is OK!
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DynamicLayoutComponent,
        children: [
            { path: '', component: HomeComponent }
        ]
    },
    {
        path: 'about',
        component: DynamicLayoutComponent,
        children: [
            { path: '', component: AboutComponent }
        ]
    },

    { path: '**', redirectTo: '' }
];

