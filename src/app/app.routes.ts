import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DetailsLayoutComponent } from './layout/details-layout/details-layout.component';

// having <router-outlet> element rendered in the DOM (devtools), is OK!

// this is not good (even if it works)
// Figured this out -> check out "angular-standalone-route-dynamic-layout-lazy" project
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent }
        ]
    },
    {
        path: 'about',
        component: DetailsLayoutComponent,
        children: [
            { path: '', component: AboutComponent }
        ]
    },

    { path: '**', redirectTo: '' }
];

