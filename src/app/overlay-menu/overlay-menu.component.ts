import { Component, OnInit, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overlay-menu',
  templateUrl: './overlay-menu.component.html',
  styleUrls: ['./overlay-menu.component.scss']
})
export class OverlayMenuComponent implements OnInit, AfterViewInit {
  @ViewChild('menuButton') menuButton: any;
  @ViewChild('logoAndMenuContainer') logoAndMenuContainer: any;

  @Input() currentMenu: String;
  @Output() activated = new EventEmitter<boolean>();

  defaultMenuItemClass = 'menuListItem';
  home_class = this.defaultMenuItemClass;
  kisah_class = this.defaultMenuItemClass;
  komunitas_class = this.defaultMenuItemClass;
  persekutuan_class = this.defaultMenuItemClass;

  constructor() { }

  ngOnInit() {
    if (this.currentMenu === 'home') {
      this.home_class = this.defaultMenuItemClass + ' currentMenuItem';
      this.kisah_class = this.defaultMenuItemClass;
      this.komunitas_class = this.defaultMenuItemClass;
      this.persekutuan_class = this.defaultMenuItemClass;
    } else if (this.currentMenu === 'kisah') {
      this.home_class = this.defaultMenuItemClass;
      this.kisah_class = this.defaultMenuItemClass + ' currentMenuItem';
      this.komunitas_class = this.defaultMenuItemClass;
      this.persekutuan_class = this.defaultMenuItemClass;
    } else if (this.currentMenu === 'komunitas') {
      this.home_class = this.defaultMenuItemClass;
      this.kisah_class = this.defaultMenuItemClass;
      this.komunitas_class = this.defaultMenuItemClass + ' currentMenuItem';
      this.persekutuan_class = this.defaultMenuItemClass;
    } else if (this.currentMenu === 'connect') {
      this.home_class = this.defaultMenuItemClass;
      this.kisah_class = this.defaultMenuItemClass;
      this.komunitas_class = this.defaultMenuItemClass;
      this.persekutuan_class = this.defaultMenuItemClass + ' currentMenuItem';
    }
  }

  ngAfterViewInit() {
  }

  onMenuButtonClick() {
    if (this.menuButton.nativeElement.className === 'menuButton menuButtonOpen') {
      this.menuButton.nativeElement.className = 'menuButton';
      this.logoAndMenuContainer.nativeElement.className = 'logoAndMenu';
      this.activated.emit(false);
    } else {
      this.menuButton.nativeElement.className = 'menuButton menuButtonOpen';
      this.logoAndMenuContainer.nativeElement.className = 'logoAndMenu navMenuOpen';
      this.activated.emit(true);
    }
  }

}
