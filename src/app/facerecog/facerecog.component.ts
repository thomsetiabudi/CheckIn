import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
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

  @ViewChild('video') videoElement: ElementRef;
  @ViewChild('canvas') canvasCam: ElementRef;
  @ViewChild('videoCamTargetContainer') videoCamTargetContainer: any;
  @ViewChild('refImageCamContainer') refImageCamContainer: any;
  @ViewChild('openCameraBtn') openCameraBtn: any;
  @ViewChild('captureCameraBtn') captureCameraBtn: any;
  @ViewChild('startFaceRecRef') startFaceRecRef: any;

  @ViewChild('refImageTargetContainer') refImageTargetContainer: any;
  @ViewChild('refImageTargetOverlay') refImageTargetOverlay: any;
  @ViewChild('videoTarget') videoTargetElement: ElementRef;
  @ViewChild('canvasTarget') canvasTargetCam: ElementRef;
  @ViewChild('videoCamContainer') videoCamContainer: any;
  @ViewChild('refImageTargetCamContainer') refImageTargetCamContainer: any;
  @ViewChild('openCameraTargetBtn') openCameraTargetBtn: any;
  @ViewChild('captureCameraTargetBtn') captureCameraTargetBtn: any;
  @ViewChild('startFaceRecTarget') startFaceRecTarget: any;

  @ViewChild('checkInBtn') checkInBtn: any;

  @ViewChild('mapContainer') gmap: ElementRef;

  fullFaceDescriptions;
  faceMatcher;
  currentOverlayMenu = 'kisah';
  moduleTitle = 'Mengenal Rupa-nem';
  moduleMenuLinkList: ModuleMenuLink[] = [
    { title: 'Face Rec', routerLink: '/facerecog', isActive: true, isSubMenu: false },
    { title: 'Home', routerLink: '/home', isActive: false, isSubMenu: false }
  ];

  videoWidth = 0;
  videoHeight = 0;
  constraints = {
      video: {
          facingMode: 'user',
          width: { ideal: 200 },
          height: { ideal: 200 }
      }
  };

  userCameraConstraints = {
    video: {
        facingMode: 'user',
        width: { ideal: 200 },
        height: { ideal: 200 }
    }
  };

  environmentCameraConstraints = {
    video: {
        facingMode: 'user',
        width: { ideal: 200 },
        height: { ideal: 200 }
    }
  };

  lat = 40.730610;
  lng = -73.935242;
  map: google.maps.Map;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 12,
  };

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
   }

  constructor(private route: ActivatedRoute, private _seoService: SeoService, private renderer: Renderer2) { }

  ngOnInit() {
    this._seoService.updateTitle(this.route.snapshot.data['title']);
    this._seoService.updateOgUrl(this.route.snapshot.data['ogUrl']);
    this._seoService.updateDescription(this.route.snapshot.data['description']);
  }

  onStartCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
        navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
    } else {
        alert('Ora ono camerane ndaa...');
    }
  }

  attachVideo(stream) {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
        this.videoHeight = this.videoElement.nativeElement.videoHeight;
        this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
    (this.refImageCamContainer.nativeElement as HTMLElement).style.display = 'none';
    (this.videoCamContainer.nativeElement as HTMLElement).style.display = 'block';
    (this.openCameraBtn.nativeElement as HTMLElement).style.display = 'none';
    (this.captureCameraBtn.nativeElement as HTMLElement).style.display = 'inline-block';

    (this.startFaceRecRef.nativeElement as HTMLElement).style.display = 'none';
  }

  capture() {
      this.renderer.setProperty(this.canvasCam.nativeElement, 'width', this.videoWidth);
      this.renderer.setProperty(this.canvasCam.nativeElement, 'height', this.videoHeight);
      this.canvasCam.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
      (this.refImageContainer.nativeElement as HTMLImageElement).src = (this.canvasCam.nativeElement as HTMLCanvasElement).toDataURL();

      //(this.refImageContainer.nativeElement as HTMLImageElement).width = 200;
      //(this.refImageContainer.nativeElement as HTMLImageElement).height = 200;
      //(this.refImageContainer.nativeElement as HTMLImageElement).src = 'http://localhost:4200/assets/sampleimg/professor2.png';

      (this.videoCamContainer.nativeElement as HTMLElement).style.display = 'none';
      (this.refImageCamContainer.nativeElement as HTMLElement).style.display = 'block';
      (this.openCameraBtn.nativeElement as HTMLElement).style.display = 'inline-block';
      (this.captureCameraBtn.nativeElement as HTMLElement).style.display = 'none';
      (this.startFaceRecRef.nativeElement as HTMLElement).style.display = 'inline-block';
  }

  handleError(error) {
    alert('Error: ' + error);
  }

  onStartCameraTarget() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideoTarget.bind(this)).catch(this.handleError);
    } else {
        alert('Ora ono camerane ndaa...');
    }
  }

  attachVideoTarget(stream) {
    this.renderer.setProperty(this.videoTargetElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoTargetElement.nativeElement, 'play', (event) => {
        this.videoHeight = this.videoTargetElement.nativeElement.videoHeight;
        this.videoWidth = this.videoTargetElement.nativeElement.videoWidth;
    });

    (this.startFaceRecTarget.nativeElement as HTMLElement).style.display = 'none';
    (this.refImageTargetCamContainer.nativeElement as HTMLElement).style.display = 'none';
    (this.videoCamTargetContainer.nativeElement as HTMLElement).style.display = 'block';
    (this.openCameraTargetBtn.nativeElement as HTMLElement).style.display = 'none';
    (this.captureCameraTargetBtn.nativeElement as HTMLElement).style.display = 'inline-block';
  }

  captureTarget() {
    this.renderer.setProperty(this.canvasTargetCam.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvasTargetCam.nativeElement, 'height', this.videoHeight);
    this.canvasTargetCam.nativeElement.getContext('2d').drawImage(this.videoTargetElement.nativeElement, 0, 0);

    (this.refImageTargetContainer.nativeElement as HTMLImageElement).src =
    (this.canvasTargetCam.nativeElement as HTMLCanvasElement).toDataURL();

    //(this.refImageTargetContainer.nativeElement as HTMLImageElement).width = 200;
    //(this.refImageTargetContainer.nativeElement as HTMLImageElement).height = 200;
    //(this.refImageTargetContainer.nativeElement as HTMLImageElement).src = 'http://localhost:4200/assets/sampleimg/professor.jpg';

    (this.refImageTargetOverlay.nativeElement as HTMLElement).style.display = 'none';
    (this.videoCamTargetContainer.nativeElement as HTMLElement).style.display = 'none';
    (this.refImageTargetCamContainer.nativeElement as HTMLElement).style.display = 'block';
    (this.openCameraTargetBtn.nativeElement as HTMLElement).style.display = 'inline-block';
    (this.captureCameraTargetBtn.nativeElement as HTMLElement).style.display = 'none';
    (this.startFaceRecTarget.nativeElement as HTMLElement).style.display = 'inline-block';
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
      (this.loadingImage.nativeElement as HTMLElement).style.display = 'none';
      alert('ra ono rupane nda');
      this.onStartCamera();
      return;
     }

    // create FaceMatcher with automatically assigned labels
    // from the detection results for the reference image
    this.faceMatcher = new faceapi.FaceMatcher(this.fullFaceDescriptions);

    faceapi.matchDimensions(canvas, inputImgEl);
    // // resize detection and landmarks in case displayed image is smaller than
    // // original size
    const resizedResults = faceapi.resizeResults(this.fullFaceDescriptions, inputImgEl);
    // draw boxes with the corresponding label as text
    const labels = this.faceMatcher.labeledDescriptors.map(ld => ld.label);
    resizedResults.forEach(({ detection, descriptor }) => {
      const label = this.faceMatcher.findBestMatch(descriptor).toString();
      const options = { label };
      const drawBox = new faceapi.draw.DrawBox(detection.box, options);
      drawBox.draw(canvas);
    });
    (this.loadingImage.nativeElement as HTMLElement).style.display = 'none';

    (this.openCameraBtn.nativeElement as HTMLElement).style.display = 'none';
    (this.startFaceRecRef.nativeElement as HTMLElement).style.display = 'none';
    (this.openCameraTargetBtn.nativeElement as HTMLElement).style.display = 'inline-block';
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
  }

  onStartFaceRecTargetClick() {
    (this.loadingMsgDownload.nativeElement as HTMLElement).style.display = 'none';
    (this.loadingMsgProcess.nativeElement as HTMLElement).style.display = 'block';
    (this.loadingImage.nativeElement as HTMLElement).style.display = 'flex';
    this.updateQueryImageResults();
  }

  async updateQueryImageResults() {
    if (!this.faceMatcher) {
      return;
    }

    const inputImgEl = this.refImageTargetContainer.nativeElement;
    const canvas = this.refImageTargetOverlay.nativeElement;

    const results = await faceapi
      .detectAllFaces(inputImgEl, this.getFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors().run();

    if (!results.length) {
      (this.loadingImage.nativeElement as HTMLElement).style.display = 'none';
      alert('ra ono rupane nda');
      this.onStartCameraTarget();
      return;
    }

    faceapi.matchDimensions(canvas, inputImgEl);
    // resize detection and landmarks in case displayed image is smaller than
    // original size
    const resizedResults = faceapi.resizeResults(results, inputImgEl);

    let isMatch = false;
    resizedResults.forEach(({ detection, descriptor }) => {
      const label = this.faceMatcher.findBestMatch(descriptor).toString();

      if (label.includes('person 1')) {
        isMatch = true;
      }

      const options = { label };
      const drawBox = new faceapi.draw.DrawBox(detection.box, options);
      drawBox.draw(canvas);
    });
    (this.refImageTargetOverlay.nativeElement as HTMLElement).style.display = 'block';
    (this.loadingImage.nativeElement as HTMLElement).style.display = 'none';

    if (isMatch) {
      (this.openCameraTargetBtn.nativeElement as HTMLElement).style.display = 'none';
      (this.startFaceRecTarget.nativeElement as HTMLElement).style.display = 'none';
      (this.checkInBtn.nativeElement as HTMLElement).style.display = 'inline-block';
    }
  }

  onStartCheckIn() {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(this.successGetLocation.bind(this), this.errorGetLocation.bind(this));
    }
  }

  successGetLocation(position) {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;

    (this.checkInBtn.nativeElement as HTMLElement).style.display = 'none';

    this.coordinates = new google.maps.LatLng(this.lat, this.lng);
    this.mapOptions.center = this.coordinates;
    this.mapInitializer();

    const marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });

    marker.setMap(this.map);
  }

  errorGetLocation() {
    alert('Unable to retrieve your location');
  }

}

