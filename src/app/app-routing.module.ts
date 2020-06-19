import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KisahComponent } from './kisah/kisah.component';
import { GembalaComponent } from './gembala/gembala.component';
import { PersekutuanComponent } from './persekutuan/persekutuan.component';
import { PersekutuanConnectComponent } from './persekutuan-connect/persekutuan-connect.component';
import { PersekutuanPwComponent } from './persekutuan-pw/persekutuan-pw.component';
import { KomunitasComponent } from './komunitas/komunitas.component';
import { KomunitasKidsComponent } from './komunitas-kids/komunitas-kids.component';
import { KomunitasPremiumComponent } from './komunitas-premium/komunitas-premium.component';
import { KomunitasTeensComponent } from './komunitas-teens/komunitas-teens.component';
import { KomunitasYouthComponent } from './komunitas-youth/komunitas-youth.component';
import { KomunitasDemudComponent } from './komunitas-demud/komunitas-demud.component';
import { KomunitasExcellentComponent } from './komunitas-excellent/komunitas-excellent.component';
import { VisiComponent } from './visi/visi.component';

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
    path: 'kisah', component: KisahComponent,
    data: {
      title: 'Sejarah Web CheckIn',
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/kisah'
    }
  },
  {
    path: 'kisah/visi', component: VisiComponent,
    data: {
      title: 'Visi Web CheckIn',
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/kisah/visi'
    }
  },
  {
    path: 'kisah/sejarah', component: KisahComponent,
    data: {
      title: 'Sejarah Web CheckIn',
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/kisah'
    }
  },
  {
    path: 'kisah/gembala', component: GembalaComponent,
    data: {
      title: 'Gembala Web CheckIn Pdt. Febrian',
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/kisah/gembala'
    }
  },
  {
    path: 'kisah/gembala/febrian', component: GembalaComponent,
    data: {
      title: 'Gembala Web CheckIn Pdt. Febrian',
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/kisah/gembala/febrian'
    }
  },
  {
    path: 'connect', component: PersekutuanComponent,
    data: {
      title: 'CONNECT Web CheckIn',
      // tslint:disable-next-line:max-line-length
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/connect'
    }
  },
  {
    path: 'connect/youth', component: PersekutuanConnectComponent,
    data: {
      title: 'CONNECT Youth Web CheckIn',
      // tslint:disable-next-line:max-line-length
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/connect/youth'
    }
  },
  {
    path: 'connect/connect', component: PersekutuanPwComponent,
    data: {
      title: 'Jadwal CONNECT Web CheckIn',
      // tslint:disable-next-line:max-line-length
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/connect/connect'
    }
  },
  {
    path: 'komunitas', component: KomunitasComponent,
    data: {
      title: 'Komunitas Web CheckIn',
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/komunitas'
    }
  },
  {
    path: 'komunitas/kids', component: KomunitasKidsComponent,
    data: {
      title: 'Web CheckIn Kids',
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/komunitas/kids'
    }
  },
  {
    path: 'komunitas/teens', component: KomunitasTeensComponent,
    data: {
      title: 'Web CheckIn Teens',
      // tslint:disable-next-line:max-line-length
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/komunitas/teens'
    }
  },
  {
    path: 'komunitas/youth', component: KomunitasYouthComponent,
    data: {
      title: 'Web CheckIn Youth',
      // tslint:disable-next-line:max-line-length
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/komunitas/youth'
    }
  },
  {
    path: 'komunitas/demud', component: KomunitasDemudComponent,
    data: {
      title: 'Web CheckIn Dewasa Muda',
      // tslint:disable-next-line:max-line-length
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/komunitas/demud'
    }
  },
  {
    path: 'komunitas/excellent', component: KomunitasExcellentComponent,
    data: {
      title: 'Web CheckIn Excellent',
      // tslint:disable-next-line:max-line-length
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/komunitas/excellent'
    }
  },
  {
    path: 'komunitas/premium', component: KomunitasPremiumComponent,
    data: {
      title: 'Web CheckIn Premium',
      // tslint:disable-next-line:max-line-length
      description: 'Tetap absen dari HP anda saat WFH',
      ogUrl: 'https://checkints.web.app/komunitas/premium'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
