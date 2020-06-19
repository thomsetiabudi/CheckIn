import { Component, OnInit, ViewChild, AfterViewInit, HostListener, Input } from '@angular/core';
import { ModuleMenuLink } from '../module-menu-link';

@Component({
  selector: 'app-module-menu',
  templateUrl: './module-menu.component.html',
  styleUrls: ['./module-menu.component.scss']
})
export class ModuleMenuComponent implements OnInit, AfterViewInit {
  @Input() moduleSectionTitle: String;
  @Input() moduleMenuLinkList: ModuleMenuLink[];
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (window.innerWidth <= 960) {
        (this.moduleMenuLinkContainer.nativeElement as HTMLElement).style.top = window.innerHeight + 'px';
      } else {
        (this.moduleMenuLinkContainer.nativeElement as HTMLElement).style.top = '';
      }
    }, 500);
  }

  onModuleMenuButtonClick() {
    if ((this.moduleMenuLinkContainer.nativeElement as HTMLElement).className === 'moduleMenuLinkContainer moduleMenuOpen') {
      (this.moduleMenuLinkContainer.nativeElement as HTMLElement).className = 'moduleMenuLinkContainer';
    } else {
      (this.moduleMenuLinkContainer.nativeElement as HTMLElement).className = 'moduleMenuLinkContainer moduleMenuOpen';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event != null) {
      resizeCounter = 0;
    }

    setTimeout(() => {
      if (window.innerWidth <= 960) {
        (this.moduleMenuLinkContainer.nativeElement as HTMLElement).style.top = window.innerHeight + 'px';
      } else {
        (this.moduleMenuLinkContainer.nativeElement as HTMLElement).style.top = '';
      }

      resizeCounter = resizeCounter + 1;
      if (resizeCounter < 15) {
        setTimeout(() => {
          this.onResize(null);
        }, 50);
      }
    }, 50);
  }

  toggleHideComponent(hide: boolean) {
    if (!hide) {
      (this.moduleMenuLinkContainer.nativeElement as HTMLElement).className = 'moduleMenuLinkContainer';
    } else {
      (this.moduleMenuLinkContainer.nativeElement as HTMLElement).className = 'moduleMenuLinkContainer hideContent';
    }
  }
}

let resizeCounter = 0;
