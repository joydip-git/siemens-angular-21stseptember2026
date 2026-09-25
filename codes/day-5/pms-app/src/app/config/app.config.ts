import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from '../routes/app.routes';
import { provideProductService } from './app-providers';
import { HttpFeature, HttpFeatureKind, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from '../modules/shared/interceptors/token-interceptor';

const interceptorFeature: HttpFeature<HttpFeatureKind.Interceptors> = withInterceptors([TokenInterceptor])

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideProductService(),
    provideHttpClient(interceptorFeature)
  ]
};
