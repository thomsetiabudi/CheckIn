import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FacerecogComponent } from './facerecog/facerecog.component';
import { DynamicBackgroundImageComponent } from './dynamic-background-image/dynamic-background-image.component';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { ModuleVerticalTitleComponent } from './module-vertical-title/module-vertical-title.component';
import { ModuleMenuComponent } from './module-menu/module-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacerecogComponent,
    DynamicBackgroundImageComponent,
    OverlayMenuComponent,
    ModuleVerticalTitleComponent,
    ModuleMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
