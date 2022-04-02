import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { InboxComponent } from './inbox/inbox.component';
import { NotificationsComponent } from './notifications.component';
import { ReadMailComponent } from './read-mail/read-mail.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';

const routes: Routes = [{ path: '', component: NotificationsComponent,
children:[
  { path: 'inbox', component: InboxComponent },
  { path: 'sent-mail', component: SentMailComponent },
  { path: 'compose', component: ComposeComponent },
  { path: 'read', component: ReadMailComponent },

  { path: '', redirectTo: 'inbox', pathMatch: 'full' },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
