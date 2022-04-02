import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { NotifierModule } from 'angular-notifier';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NotifierModule,
    FormsModule,
    QuillModule.forRoot(),

  ],
  providers: [
    // AuthGuard,
    {
     provide:HTTP_INTERCEPTORS,
     useClass:TokenInterceptorService,
     multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
