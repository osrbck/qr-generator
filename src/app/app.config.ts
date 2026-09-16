import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideTaiga } from '@taiga-ui/core';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideTaiga(), NG_EVENT_PLUGINS],
};
