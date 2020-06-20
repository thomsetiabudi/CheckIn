import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ModuleVerticalTitleComponent } from '../module-vertical-title/module-vertical-title.component';
import { ModuleMenuComponent } from '../module-menu/module-menu.component';
import { ModuleMenuLink } from '../module-menu-link';
import { SeoService } from '../seo.service';
import { ActivatedRoute } from '@angular/router';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-facerecog',
  templateUrl: './facerecog.component.html',
  styleUrls: ['./facerecog.component.css']
})
export class FacerecogComponent implements OnInit, AfterViewInit {
  @ViewChild('moduleTitleVertical') moduleTitleVertical: ModuleVerticalTitleComponent;
  @ViewChild('moduleMenuLinkContainer') moduleMenuLinkContainer: ModuleMenuComponent;
  @ViewChild('moduleContentContainer') moduleContentContainer: any;
  @ViewChild('loadingImage') loadingImage: any;
  @ViewChild('refImageContainer') refImageContainer: any;
  @ViewChild('refImageOverlay') refImageOverlay: any;
  @ViewChild('loadingMsgDownload') loadingMsgDownload: any;
  @ViewChild('loadingMsgProcess') loadingMsgProcess: any;

  fullFaceDescriptions;
  faceMatcher;
  currentOverlayMenu = 'kisah';
  moduleTitle = 'Mengenal Rupa-nem';
  moduleMenuLinkList: ModuleMenuLink[] = [
    { title: 'Face Rec', routerLink: '/facerecog', isActive: true, isSubMenu: false },
    { title: 'Home', routerLink: '/home', isActive: false, isSubMenu: false }
  ];

  constructor(private route: ActivatedRoute, private _seoService: SeoService) { }

  ngOnInit() {
    this._seoService.updateTitle(this.route.snapshot.data['title']);
    this._seoService.updateOgUrl(this.route.snapshot.data['ogUrl']);
    this._seoService.updateDescription(this.route.snapshot.data['description']);
  }

  ngAfterViewInit() {
    (this.loadingImage.nativeElement as HTMLElement).style.display = 'flex';
    (this.loadingMsgDownload.nativeElement as HTMLElement).style.display = 'block';
    (this.loadingMsgProcess.nativeElement as HTMLElement).style.display = 'none';
    this.downloadFaceRecognitionAssets();
  }

  async downloadFaceRecognitionAssets() {
    await faceapi.loadTinyFaceDetectorModel('/assets/famodels/');
    await faceapi.loadFaceLandmarkModel('/assets/famodels/');
    await faceapi.loadFaceRecognitionModel('/assets/famodels/');
    (this.loadingImage.nativeElement as HTMLElement).style.display = 'none';
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

  async updateReferenceImageResults() {
    const inputImgEl = this.refImageContainer.nativeElement;
    const canvas = this.refImageOverlay.nativeElement;

    this.fullFaceDescriptions = await faceapi
       .detectAllFaces(inputImgEl, this.getFaceDetectorOptions())
       .withFaceLandmarks()
       .withFaceDescriptors().run();

     if (!this.fullFaceDescriptions.length) {
       alert('ra ono rupane nda');
       return;
     }

    // create FaceMatcher with automatically assigned labels
    // from the detection results for the reference image
    this.faceMatcher = new faceapi.FaceMatcher(this.fullFaceDescriptions);

    faceapi.matchDimensions(canvas, inputImgEl)
    // // resize detection and landmarks in case displayed image is smaller than
    // // original size
    const resizedResults = faceapi.resizeResults(this.fullFaceDescriptions, inputImgEl)
    // draw boxes with the corresponding label as text
    const labels = this.faceMatcher.labeledDescriptors.map(ld => ld.label);
    resizedResults.forEach(({ detection, descriptor }) => {
      const label = this.faceMatcher.findBestMatch(descriptor).toString();
      const options = { label };
      const drawBox = new faceapi.draw.DrawBox(detection.box, options);
      drawBox.draw(canvas);
    });
    (this.loadingImage.nativeElement as HTMLElement).style.display = 'none';
  }

  getFaceDetectorOptions() {
    // tiny_face_detector options
    const inputSize = 512;
    const scoreThreshold = 0.5;
    return new faceapi.TinyFaceDetectorOptions({ inputSize, scoreThreshold });
  }

  onStartFaceRecRefClick() {
    (this.loadingMsgDownload.nativeElement as HTMLElement).style.display = 'none';
    (this.loadingMsgProcess.nativeElement as HTMLElement).style.display = 'block';
    (this.loadingImage.nativeElement as HTMLElement).style.display = 'flex';
    this.updateReferenceImageResults();
    //alert('meeeeooo');
    //this.getValueWithAsync();
  }

  onCheckFaceRecRefClick() {
    //if (this.fullFaceDescriptions == null) {
    //  alert('masih kosoooong');
    //} else if (!this.fullFaceDescriptions.length) {
    //  alert(this.fullFaceDescriptions.length);
    //  alert('ra ono rupane nda');
    //} else {
    //  alert('yeaay');
    //}
  }

  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  async getValueWithAsync() {
    const value = <number>await this.resolveAfter2Seconds(20);
    console.log(`async result: ${value}`);
  }
}

