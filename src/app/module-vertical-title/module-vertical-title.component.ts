import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-module-vertical-title',
  templateUrl: './module-vertical-title.component.html',
  styleUrls: ['./module-vertical-title.component.scss']
})
export class ModuleVerticalTitleComponent implements OnInit {
  @ViewChild('moduleTitleVertical') moduleTitleVertical: any;

  @Input() moduleTitle: String;

  constructor() { }

  ngOnInit() {
  }

  toggleHideComponent(hide: boolean) {
    if (!hide) {
      this.moduleTitleVertical.nativeElement.className = 'moduleTitleVertical';
    } else {
      this.moduleTitleVertical.nativeElement.className = 'moduleTitleVertical hideContent';
    }
  }

}
