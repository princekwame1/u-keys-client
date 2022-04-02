import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../default/shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.inject.get(AuthService);
    let jwtToken = req.clone({
      setHeaders:{
        Authorization: '' + authService.GetToken()
      }
    });
    return next.handle(jwtToken);
  }
}
