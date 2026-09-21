import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
// import { providePrimeNG } from 'primeng/config';
// import Lara from '@primeng/themes/lara'
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    // providePrimeNG({
    //   theme: {
    //     preset: Lara,
    //     options: {
    //       darkModeSelector: '.dark-side'
    //     }
    //   }
    // })
  ]
};
