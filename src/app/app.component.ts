import { Component, ComponentFactoryResolver, Inject, NgZone, platformCore, SecurityContext, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  resourceLanguage = 'en_US';
  title = 'psm-admin-portal';

  serviceTag = 'XDFGY';

  constructor(private translateService: TranslateService,
    private router: Router,
    private zone: NgZone) {
      this.translateService.use('en_US');
  }

  onClick(){
    this.resourceLanguage = this.resourceLanguage === 'en_US' ? 'fr_FR': 'en_US';
    this.translateService.use(this.resourceLanguage);
  }
  
  ngOnDestroy(): void {
  }
}
