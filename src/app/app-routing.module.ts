import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./default/default.module').then(m => m.DefaultModule) ,canActivate:[AuthGuard]},
  { path: 'notification', loadChildren: () => import('./default/components/notifications/notifications.module').then(m => m.NotificationsModule) }, 

  { path: 'login',component:LoginComponent }, 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
