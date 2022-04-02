import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ServicesComponent } from './components/home/services/services.component';
import { HomeGalleryComponent } from './components/home/home-gallery/home-gallery.component';
import { MainComponent } from './components/about/main/main.component';
import { HomeComponent } from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { QuillModule } from 'ngx-quill';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { SocialCategoryComponent } from './components/about/social-category/social-category.component';
import { SocialComponent } from './components/about/social/social.component';
import { GalleryCategoryComponent } from './components/gallery/gallery-category/gallery-category.component';
import { AlbumComponent } from './components/gallery/album/album.component';
import { SwiperModule } from 'swiper/angular';
import { ProfileComponent } from './components/user-auth/profile/profile.component';
import { StockComponent } from './components/account/stock/stock.component';
import { RecordsComponent } from './components/account/records/records.component';
import { ReportComponent } from './components/account/report/report.component';
import { ProfileOfCeoComponent } from './components/about/profile-of-ceo/profile-of-ceo.component';

@NgModule({
  declarations: [
    DefaultComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ServicesComponent,
    HomeGalleryComponent,
    MainComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    UserAuthComponent,
    SocialCategoryComponent,
    SocialComponent,
    GalleryCategoryComponent,
    AlbumComponent,
    ProfileComponent,
    StockComponent,
    RecordsComponent,
    ReportComponent,
    ProfileOfCeoComponent,

 

  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
     QuillModule.forRoot(),
     SwiperModule

  ]
})
export class DefaultModule { }
