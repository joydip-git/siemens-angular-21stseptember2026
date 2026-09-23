import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/modules/root/app';
import { appConfig } from './app/config/app.config';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
