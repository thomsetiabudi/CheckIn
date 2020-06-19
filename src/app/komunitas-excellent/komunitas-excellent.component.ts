import { Component, OnInit, ViewChild } from '@angular/core';
import { ModuleVerticalTitleComponent } from '../module-vertical-title/module-vertical-title.component';
import { ModuleMenuComponent } from '../module-menu/module-menu.component';
import { ModuleMenuLink } from '../module-menu-link';
import { SeoService } from '../seo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-komunitas-excellent',
  templateUrl: './komunitas-excellent.component.html',
  styleUrls: ['./komunitas-excellent.component.scss']
})
export class KomunitasExcellentComponent implements OnInit {
  @ViewChild('moduleTitleVertical') moduleTitleVertical: ModuleVerticalTitleComponent;
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: ModuleMenuComponent;
  @ViewChild('moduleContentContainer') moduleContentContainer: any;

  currentOverlayMenu = 'komunitas';
  moduleTitle = 'Komunitas';
  moduleMenuLinkList: ModuleMenuLink[] = [
    { title: 'Kids', routerLink: '/komunitas/kids', isActive: false, isSubMenu: false },
    { title: 'Teens', routerLink: '/komunitas/teens', isActive: false, isSubMenu: false },
    { title: 'Youth', routerLink: '/komunitas/youth', isActive: false, isSubMenu: false },
    { title: 'Dewasa Muda', routerLink: '/komunitas/demud', isActive: false, isSubMenu: false },
    { title: 'Excellent', routerLink: '/komunitas/excellent', isActive: true, isSubMenu: false },
    { title: 'Premium', routerLink: '/komunitas/premium', isActive: false, isSubMenu: false }
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
