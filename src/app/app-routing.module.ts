import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./default/default.module').then(m => m.DefaultModule) }, { path: 'default', loadChildren: () => import('./default/default.module').then(m => m.DefaultModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
