import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//Basicamente esse arquivo diz pro angular como ele deve fazer a renderização da nossa aplicação

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }), // detecta mudanças em meu código e renderiza novamente
    provideRouter(routes) // rotas configuradas no app.routes
  ]
};
