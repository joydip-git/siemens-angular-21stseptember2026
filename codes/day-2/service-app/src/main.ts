import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Master } from './app/master/master';

bootstrapApplication(Master, appConfig)
  .catch((err) => console.error(err));
