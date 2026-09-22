import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePathValueProvider, providePersonFactoryProvider, providePersonProvider, providePersonValueProvider } from './config/constants';
import { PersonService } from './services/person-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePathValueProvider(),
    // providePersonValueProvider()
    //providePersonFactoryProvider()
    providePersonProvider()
    //PersonService //{provide: PersonService, useClass: PersonService}
  ]
};
