import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// INFO: if you use @Injectable({ providedIn: 'root' }),
//  you do not need to import the service in the app.module.ts or any other module's providers array.
//  Angular handles the service registration for you.
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private layout: string = 'main-layout';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateLayout();
    });
  }

  private updateLayout() {
    const url = this.router.url;
    if (url === '/about') {
      this.layout = 'details-layout';
    } else {
      this.layout = 'main-layout';
    }
  }

  getLayout() {
    return this.layout;
  }
}
