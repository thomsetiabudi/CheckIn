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
      title: 'GKMI Anugerah',
      description: 'Gereja Kristen di Jakarta dengan visi Menjadi komunitas murid Kristus yang bersaksi',
      ogUrl: 'https://gkmi-anugerah.org'
    }
  },
  {
    path: 'home', component: HomeComponent,
    data: {
      title: 'GKMI Anugerah',
      description: 'Gereja Kristen di Jakarta dengan visi Menjadi komunitas murid Kristus yang bersaksi',
      ogUrl: 'https://gkmi-anugerah.org'
    }
  },
  {
    path: 'kisah', component: KisahComponent,
    data: {
      title: 'Sejarah GKMI Anugerah',
      description: 'Gereja Kristen di Jakarta dengan visi Menjadi komunitas murid Kristus yang bersaksi',
      ogUrl: 'https://gkmi-anugerah.org/kisah'
    }
  },
  {
    path: 'kisah/visi', component: VisiComponent,
    data: {
      title: 'Visi GKMI Anugerah',
      description: 'Menjadi komunitas murid Kristus yang bersaksi',
      ogUrl: 'https://gkmi-anugerah.org/kisah/visi'
    }
  },
  {
    path: 'kisah/sejarah', component: KisahComponent,
    data: {
      title: 'Sejarah GKMI Anugerah',
      description: 'Gereja Kristen di Jakarta dengan visi Menjadi komunitas murid Kristus yang bersaksi',
      ogUrl: 'https://gkmi-anugerah.org/kisah'
    }
  },
  {
    path: 'kisah/gembala', component: GembalaComponent,
    data: {
      title: 'Gembala GKMI Anugerah Pdt. Febrian',
      description: 'Pdt. Febrian Christianto H',
      ogUrl: 'https://gkmi-anugerah.org/kisah/gembala'
    }
  },
  {
    path: 'kisah/gembala/febrian', component: GembalaComponent,
    data: {
      title: 'Gembala GKMI Anugerah Pdt. Febrian',
      description: 'Pdt. Febrian Christianto H',
      ogUrl: 'https://gkmi-anugerah.org/kisah/gembala/febrian'
    }
  },
  {
    path: 'connect', component: PersekutuanComponent,
    data: {
      title: 'CONNECT GKMI Anugerah',
      // tslint:disable-next-line:max-line-length
      description: 'Suatu komunitas kecil yang terdiri dari jemaat-jemaat GKMI Anugerah yang bersama saling mendukung untuk bertumbuh sebagai murid Kristus dan menjadi saksi Kristus',
      ogUrl: 'https://gkmi-anugerah.org/connect'
    }
  },
  {
    path: 'connect/youth', component: PersekutuanConnectComponent,
    data: {
      title: 'CONNECT Youth GKMI Anugerah',
      // tslint:disable-next-line:max-line-length
      description: 'Diadakan dua minggu sekali. CONNECT merupakan suatu komunitas ilahi anak muda dimana sesama anggotanya bisa saling menguatkan, support dalam doa, pujian dan sharing',
      ogUrl: 'https://gkmi-anugerah.org/connect/youth'
    }
  },
  {
    path: 'connect/connect', component: PersekutuanPwComponent,
    data: {
      title: 'Jadwal CONNECT GKMI Anugerah',
      // tslint:disable-next-line:max-line-length
      description: 'Persekutuan tengah minggu yang diadakan di rumah jemaat yg tinggalnya dalam satu wilayah secara bergantian dengan tujuan utk sarana komunikasi, mengenal jemaat lebih dekat, sumber informasi, saling menguatkan, sharing pengalaman pribadi, saling mendoakan dan bersama sama belajar Firman Tuhan yg di disampaikan oleh anggota persekutuan dibawah supervisi Hamba Tuhannya',
      ogUrl: 'https://gkmi-anugerah.org/connect/connect'
    }
  },
  {
    path: 'komunitas', component: KomunitasComponent,
    data: {
      title: 'Komunitas GKMI Anugerah',
      description: 'Mari bergabung dengan komunitas kami',
      ogUrl: 'https://gkmi-anugerah.org/komunitas'
    }
  },
  {
    path: 'komunitas/kids', component: KomunitasKidsComponent,
    data: {
      title: 'GKMI Anugerah Kids',
      description: 'Wadah bagi anak-anak untuk memperoleh pengajaran yang benar tentang kebenaran Firman Allah',
      ogUrl: 'https://gkmi-anugerah.org/komunitas/kids'
    }
  },
  {
    path: 'komunitas/teens', component: KomunitasTeensComponent,
    data: {
      title: 'GKMI Anugerah Teens',
      // tslint:disable-next-line:max-line-length
      description: 'Komunitas anak muda remaja SMP - SMA yang memiliki kerinduan untuk belajar menjadi pelaku Firman dan membagi kasih melalui ibadah dan akitivitas-aktivitas, serta pendampingan kakak rohani yang berfokus pada keutuhan dan keunikan diri sendiri untuk menjadi pembawa damai dan memuliakan nama Allah.',
      ogUrl: 'https://gkmi-anugerah.org/komunitas/teens'
    }
  },
  {
    path: 'komunitas/youth', component: KomunitasYouthComponent,
    data: {
      title: 'GKMI Anugerah Youth',
      // tslint:disable-next-line:max-line-length
      description: 'Komunitas iman kaum muda yang menggumuli bersama tantangan zaman melalui Firman Tuhan. Komunitas ini dibentuk menjadi pelaku firman yang membawa damai dalam setiap tapak hidupnya di Indonesia dan dunia. Penerimaan diri, pembentukan karakter, dan pelayanan kasih untuk sesama adalah panggilan komunitas kami yang mengasihi kaum muda apa adanya.',
      ogUrl: 'https://gkmi-anugerah.org/komunitas/youth'
    }
  },
  {
    path: 'komunitas/demud', component: KomunitasDemudComponent,
    data: {
      title: 'GKMI Anugerah Dewasa Muda',
      // tslint:disable-next-line:max-line-length
      description: 'Berfokus pada nilai FIRST, mengajak jemaat baik dalam keluarga ataupun dunia profesional untuk terus memegang teguh iman (Faith), berelasi dengan dekat (Intimacy), mengerti perannya (Roles), berdampak bagi lingkungan (Social) dan mensyukuri berkat Tuhan (Treasure) sehingga bisa terus berakar, bertumbuh dan berbuah bagi Kristus.',
      ogUrl: 'https://gkmi-anugerah.org/komunitas/demud'
    }
  },
  {
    path: 'komunitas/excellent', component: KomunitasExcellentComponent,
    data: {
      title: 'GKMI Anugerah Excellent',
      // tslint:disable-next-line:max-line-length
      description: 'Kami memiliki panggilan sebagai orang tua yang memiliki kerinduan dalam memberikan teladan bagi anak-anak kami dan generasi muda. Membawa keluarga kami untuk memiliki persekutuan yang erat dengan Tuhan serta membagikan kabar keselamatan dan kasih Kristus di lingkungan kerja dan sesama kami.',
      ogUrl: 'https://gkmi-anugerah.org/komunitas/excellent'
    }
  },
  {
    path: 'komunitas/premium', component: KomunitasPremiumComponent,
    data: {
      title: 'GKMI Anugerah Premium',
      // tslint:disable-next-line:max-line-length
      description: 'Komunitas untuk membina dan membangun iman kerohanian serta kebersamaan para lansia melalui persekutuan.',
      ogUrl: 'https://gkmi-anugerah.org/komunitas/premium'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
