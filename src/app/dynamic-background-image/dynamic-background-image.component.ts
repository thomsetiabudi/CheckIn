import { Component, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dynamic-background-image',
  templateUrl: './dynamic-background-image.component.html',
  styleUrls: ['./dynamic-background-image.component.scss']
})
export class DynamicBackgroundImageComponent implements OnInit, AfterViewInit {
  @ViewChild('backgroundImage1') backgroundImage1: any;
  @ViewChild('backgroundImage2') backgroundImage2: any;
  @ViewChild('backgroundImageScreen') backgroundImageScreen: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (window.innerWidth <= 960) {
        (this.backgroundImage1.nativeElement as HTMLElement).style.height = window.innerHeight + 'px';
        (this.backgroundImage1.nativeElement as HTMLElement).style.width = window.innerWidth + 'px';
        (this.backgroundImage2.nativeElement as HTMLElement).style.height = window.innerHeight + 'px';
        (this.backgroundImage2.nativeElement as HTMLElement).style.width = window.innerWidth + 'px';
        (this.backgroundImageScreen.nativeElement as HTMLElement).style.height = window.innerHeight + 'px';
        (this.backgroundImageScreen.nativeElement as HTMLElement).style.width = window.innerWidth + 'px';
      } else {
        (this.backgroundImage1.nativeElement as HTMLElement).style.height = '';
        (this.backgroundImage1.nativeElement as HTMLElement).style.width = '';
        (this.backgroundImage2.nativeElement as HTMLElement).style.height = '';
        (this.backgroundImage2.nativeElement as HTMLElement).style.width = '';
        (this.backgroundImageScreen.nativeElement as HTMLElement).style.height = '';
        (this.backgroundImageScreen.nativeElement as HTMLElement).style.width = '';
      }

      backgroundImageList = this.shuffle(backgroundImageList);
      firstLoad = true;

      this.setBackgroundImage();
      setInterval(() => {
        this.setBackgroundImage();
      }, 7000);
    }, 500);
  }

  setBackgroundImage() {
    if (firstLoad) {
      (this.backgroundImage1.nativeElement as HTMLElement).style.backgroundImage =
        'url(' + backgroundImageList[backgroundImageIndex] + ')';
      (this.backgroundImage2.nativeElement as HTMLElement).style.backgroundImage =
        'url(' + backgroundImageList[backgroundImageIndex + 1] + ')';
      backgroundImageIndex = backgroundImageIndex + 2;
      firstLoad = false;
    } else {
      if ((this.backgroundImage1.nativeElement as HTMLElement).className === 'bg-img-home fade-out') {
        (this.backgroundImage2.nativeElement as HTMLElement).className = 'bg-img-home fade-out';
        (this.backgroundImage1.nativeElement as HTMLElement).className = 'bg-img-home';
        setTimeout(() => {
          (this.backgroundImage2.nativeElement as HTMLElement).style.backgroundImage =
            'url(' + backgroundImageList[backgroundImageIndex] + ')';
          backgroundImageIndex = backgroundImageIndex + 1;
          if (backgroundImageIndex >= backgroundImageList.length) {
            backgroundImageIndex = 0;
          }
        }, 2000);
      } else {
        (this.backgroundImage1.nativeElement as HTMLElement).className = 'bg-img-home fade-out';
        (this.backgroundImage2.nativeElement as HTMLElement).className = 'bg-img-home';
        setTimeout(() => {
          (this.backgroundImage1.nativeElement as HTMLElement).style.backgroundImage =
            'url(' + backgroundImageList[backgroundImageIndex] + ')';
          backgroundImageIndex = backgroundImageIndex + 1;
          if (backgroundImageIndex >= backgroundImageList.length) {
            backgroundImageIndex = 0;
          }
        }, 2000);
      }
    }
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event != null) {
      resizeCounter = 0;
    }

    setTimeout(() => {
      if (window.innerWidth <= 960) {
        (this.backgroundImage1.nativeElement as HTMLElement).style.height = (window.innerHeight + 70) + 'px';
        (this.backgroundImage1.nativeElement as HTMLElement).style.width = window.innerWidth + 'px';
        (this.backgroundImage2.nativeElement as HTMLElement).style.height = (window.innerHeight + 70) + 'px';
        (this.backgroundImage2.nativeElement as HTMLElement).style.width = window.innerWidth + 'px';
        (this.backgroundImageScreen.nativeElement as HTMLElement).style.height = (window.innerHeight + 70) + 'px';
        (this.backgroundImageScreen.nativeElement as HTMLElement).style.width = window.innerWidth + 'px';
      } else {
        (this.backgroundImage1.nativeElement as HTMLElement).style.height = '';
        (this.backgroundImage1.nativeElement as HTMLElement).style.width = '';
        (this.backgroundImage2.nativeElement as HTMLElement).style.height = '';
        (this.backgroundImage2.nativeElement as HTMLElement).style.width = '';
        (this.backgroundImageScreen.nativeElement as HTMLElement).style.height = '';
        (this.backgroundImageScreen.nativeElement as HTMLElement).style.width = '';
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
let firstLoad = true;
let backgroundImageIndex = 0;
let backgroundImageList = new Array();

backgroundImageList.push('/assets/img/pexels-photo.jpg');
backgroundImageList.push('/assets/img/pexels-photo-194096.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-255379.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-531880.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-547114.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-747964.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-949587.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-1169754.jpeg');
backgroundImageList.push('/assets/img/pexels-photo-1209658.jpeg');
