import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { SeoService } from '../seo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('mainContentContainer') mainContentContainer: any;
  @ViewChild('homeMenuLinkContainer') homeMenuLinkContainer: any;

  currentOverlayMenu = 'home';
  whatsappLinkPrefix = '';
  whatsapplinkText = '';

  desktopWhatsappLinkPrefix = 'https://web.whatsapp.com/send?phone=';
  desktopWhatsapplinkText = '&text=';

  mobileWhatsappLinkPrefix = 'https://wa.me/';
  mobileWhatsapplinkText = '/?text=';

  constructor(private route: ActivatedRoute, private _seoService: SeoService) { }

  ngOnInit() {
    this._seoService.updateTitle(this.route.snapshot.data['title']);
    this._seoService.updateOgUrl(this.route.snapshot.data['ogUrl']);
    this._seoService.updateDescription(this.route.snapshot.data['description']);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (window.innerWidth <= 960) {
        this.whatsappLinkPrefix = this.mobileWhatsappLinkPrefix;
        this.whatsapplinkText = this.mobileWhatsapplinkText;

        const topValue = Math.round(window.innerHeight * 0.75);
        const heightValue = window.innerHeight - topValue;
        this.homeMenuLinkContainer.nativeElement.style = 'top: ' + topValue + 'px; height: ' + heightValue + 'px;';
      } else {
        this.whatsappLinkPrefix = this.desktopWhatsappLinkPrefix;
        this.whatsapplinkText = this.desktopWhatsapplinkText;

        this.homeMenuLinkContainer.nativeElement.style = '';
      }
    }, 500);
  }

  onOverlayMenuActivated(activated: boolean) {
    if (!activated) {
      this.mainContentContainer.nativeElement.className = 'mainContentContainer';
      this.homeMenuLinkContainer.nativeElement.className = 'homeMenuLinkContainer';
     } else {
      this.mainContentContainer.nativeElement.className = 'mainContentContainer hideContent';
      this.homeMenuLinkContainer.nativeElement.className = 'homeMenuLinkContainer hideContent';
     }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event != null) {
      resizeCounter = 0;
    }

    setTimeout(() => {
      if (window.innerWidth <= 960) {
        this.whatsappLinkPrefix = this.mobileWhatsappLinkPrefix;
        this.whatsapplinkText = this.mobileWhatsapplinkText;

        const topValue = Math.round(window.innerHeight * 0.75);
        const heightValue = window.innerHeight - topValue;
        this.homeMenuLinkContainer.nativeElement.style = 'top: ' + topValue + 'px; height: ' + heightValue + 'px;';
        this.homeMenuLinkContainer.nativeElement.style.width = window.innerWidth + 'px';
      } else {
        this.whatsappLinkPrefix = this.desktopWhatsappLinkPrefix;
        this.whatsapplinkText = this.desktopWhatsapplinkText;

        this.homeMenuLinkContainer.nativeElement.style = '';
        this.homeMenuLinkContainer.nativeElement.style.width = '';
      }

      resizeCounter = resizeCounter + 1;
      if (resizeCounter < 15) {
        setTimeout(() => {
          this.onResize(null);
        }, 50);
      }
    }, 50);
  }
}

let resizeCounter = 0;
