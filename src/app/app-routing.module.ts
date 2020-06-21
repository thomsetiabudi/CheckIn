import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacerecogComponent } from './facerecog/facerecog.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      title: 'Web CheckIn',
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app'
    }
  },
  {
    path: 'home', component: HomeComponent,
    data: {
      title: 'Web CheckIn',
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app'
    }
  },
  {
    path: 'facerecog', component: FacerecogComponent,
    data: {
      title: 'Face Recognition',
      description: 'Kenali wajah anda sendiri',
      ogUrl: 'https://checkints.web.app/facerecog'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
