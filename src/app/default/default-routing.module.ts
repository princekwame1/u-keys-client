import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { RecordsComponent } from './components/account/records/records.component';
import { ReportComponent } from './components/account/report/report.component';
import { StockComponent } from './components/account/stock/stock.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { DefaultComponent } from './default.component';

const routes: Routes = [{ path: '', component: DefaultComponent,
children:[
  { path: 'notification', loadChildren: () => import('./components/notifications/notifications.module').then(m => m.NotificationsModule) }, 

  { path: 'dashboard', component: DashboardComponent },
  // {path:'email',component:EmailComponent},
   { path: 'cms/home', component: HomeComponent },
   {path:'cms/about',component:AboutComponent},
  { path: 'cms/gallery', component: GalleryComponent },
  { path: 'cms/contact', component: ContactComponent },
  { path: 'account/stock', component: StockComponent },
  { path: 'account/records', component: RecordsComponent },
  { path: 'account/report', component: ReportComponent },

   { path: 'notification', component: NotificationsComponent},

  { path: 'user', component: UserAuthComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
]



},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
