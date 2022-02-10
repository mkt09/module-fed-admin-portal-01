import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { getSingleSpaExtraProviders, singleSpaAngular } from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { SingleSpaPropsStore } from './single-spa/single-spa-props.store';

if (environment.production) {
  enableProdMode();
}
  
const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    SingleSpaPropsStore.getInstance().store(singleSpaProps);
    singleSpaPropsSubject.next(singleSpaProps);
    const platformbrowser = getPlatformbrowserDynamic();
    return platformbrowser(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<app-root />',
  Router,
  NavigationStart,
  NgZone
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

function getPlatformbrowserDynamic() {
  (window as any).plattform = (window as any).plattform || {};
  (window as any).plattform['pltBrowser'] = platformBrowserDynamic;
  return (window as any).plattform['pltBrowser'];
}
