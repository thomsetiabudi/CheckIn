import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModuleVerticalTitleComponent } from '../module-vertical-title/module-vertical-title.component';
import { ModuleMenuComponent } from '../module-menu/module-menu.component';
import { ModuleMenuLink } from '../module-menu-link';
import { SeoService } from '../seo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visi',
  templateUrl: './visi.component.html',
  styleUrls: ['./visi.component.css']
})
export class VisiComponent implements OnInit, AfterViewInit {
  @ViewChild('moduleTitleVertical') moduleTitleVertical: ModuleVerticalTitleComponent;
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: ModuleMenuComponent;
  @ViewChild('moduleContentContainer') moduleContentContainer: any;

  currentOverlayMenu = 'kisah';
  moduleTitle = 'Kisah Kami';
  moduleMenuLinkList: ModuleMenuLink[] = [
    { title: 'Sejarah', routerLink: '/kisah', isActive: false, isSubMenu: false },
    { title: 'Visi', routerLink: '/kisah/visi', isActive: true, isSubMenu: false },
    { title: 'Gembala Kami', routerLink: '/kisah/gembala', isActive: false, isSubMenu: false }
  ];

  constructor(private route: ActivatedRoute, private _seoService: SeoService) { }

  ngOnInit() {
    this._seoService.updateTitle(this.route.snapshot.data['title']);
    this._seoService.updateOgUrl(this.route.snapshot.data['ogUrl']);
    this._seoService.updateDescription(this.route.snapshot.data['description']);
  }

  ngAfterViewInit() {
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
