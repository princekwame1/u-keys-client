import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { DefaultComponent } from './default.component';

const routes: Routes = [{ path: '', component: DefaultComponent,
children:[

  { path: 'dashboard', component: DashboardComponent },
  // {path:'email',component:EmailComponent},
   { path: 'cms/home', component: HomeComponent },
   {path:'cms/about',component:AboutComponent},
  { path: 'cms/gallery', component: GalleryComponent },
  { path: 'cms/contact', component: ContactComponent },
  // { path: 'blog', component: BlogComponent },

  { path: 'user', component: UserAuthComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]



}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
