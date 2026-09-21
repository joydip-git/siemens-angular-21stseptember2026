import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ApplicationRef } from '@angular/core';

const p: Promise<ApplicationRef> = bootstrapApplication(
  App,
  appConfig);
  
p.catch((err) => console.error(err));
