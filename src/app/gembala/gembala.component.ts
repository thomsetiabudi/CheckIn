import { Component, OnInit, ViewChild } from '@angular/core';
import { ModuleVerticalTitleComponent } from '../module-vertical-title/module-vertical-title.component';
import { ModuleMenuComponent } from '../module-menu/module-menu.component';
import { ModuleMenuLink } from '../module-menu-link';
import { SeoService } from '../seo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gembala',
  templateUrl: './gembala.component.html',
  styleUrls: ['./gembala.component.scss']
})
export class GembalaComponent implements OnInit {
  @ViewChild('moduleTitleVertical') moduleTitleVertical: ModuleVerticalTitleComponent;
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: ModuleMenuComponent;
  @ViewChild('moduleContentContainer') moduleContentContainer: any;

  currentOverlayMenu = 'kisah';
  moduleTitle = 'Kisah Kami';
  moduleMenuLinkList: ModuleMenuLink[] = [
    { title: 'Sejarah', routerLink: '/kisah', isActive: false, isSubMenu: false },
    { title: 'Visi', routerLink: '/kisah/visi', isActive: false, isSubMenu: false },
    { title: 'Gembala Kami', routerLink: '#', isActive: true, isSubMenu: false },
    { title: 'Pdt. Febrian C.H', routerLink: '/kisah/gembala/febrian', isActive: true, isSubMenu: true },
    { title: 'Pdm. E. Pranawa', routerLink: '/kisah/gembala/pranawa', isActive: false, isSubMenu: true }
  ];

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

    setTimeout(() => {
      if (window.innerWidth <= 960) {
        this.whatsappLinkPrefix = this.mobileWhatsappLinkPrefix;
        this.whatsapplinkText = this.mobileWhatsapplinkText;
      } else {
        this.whatsappLinkPrefix = this.desktopWhatsappLinkPrefix;
        this.whatsapplinkText = this.desktopWhatsapplinkText;
      }
    }, 500);
  }

  onOverlayMenuActivated(activated: boolean) {
    if (!activated) {
      this.moduleMenuLinkContainer.toggleHideComponent(false);
      this.moduleTitleVertical.toggleHideComponent(false);
      (this.moduleContentContainer.nativeElement as HTMLElement).className = 'moduleContentContainer';
     } else {
      this.moduleMenuLinkContainer.toggleHideComponent(true);
      this.moduleTitleVertical.toggleHideComponent(true);
      (this.moduleContentContainer.nativeElement as HTMLElement).className = 'moduleContentContainer hideContent';
     }
  }
}
