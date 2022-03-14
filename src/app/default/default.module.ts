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

 

  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
     QuillModule.forRoot()

  ]
})
export class DefaultModule { }
