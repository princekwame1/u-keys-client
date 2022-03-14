import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    QuillModule.forRoot()

  ],
  providers: [
    // AuthGuard,
    // {
    //  provide:HTTP_INTERCEPTORS,
    //  useClass:AuthInterceptor,
    //  multi:true 
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
