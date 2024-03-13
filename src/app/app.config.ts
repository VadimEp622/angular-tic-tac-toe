import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LayoutService } from './services/layout.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), LayoutService]
};
