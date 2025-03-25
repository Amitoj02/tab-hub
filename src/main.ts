import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {environment} from './environment';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

if(!environment.production) {
    import('webextension-polyfill').then((browser) => {
        (window as any).browser = browser;
    });
}
