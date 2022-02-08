import { Component, Inject, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs/operators';

declare var jQuery: any;
declare var initializeOnReady: any;
declare var initializeOnLoad: any;
declare var shortCodesOnReady: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'shapen';

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateTheme(event.url);
      });
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.reinitializeThings();
      });
  }
  
  reinitializeThings() {
    (function ($) {
      setTimeout(function () {
        initializeOnLoad();
        initializeOnReady();
        shortCodesOnReady()
      }, 500);
    })(jQuery);
  }

  updateTheme(url: string) {
    if(url == "/index4") {
      this.loadStyle('skin-7');
    } else {
      this.loadStyle('skin-1');
    }
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;

    console.log(themeLink);
    if (themeLink) {
      themeLink.href = "assets/css/skin/" + styleName + ".css";
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = "assets/css/skin/" + `${styleName}` + ".css";

      head.appendChild(style);
    }
  }
}
