import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../default/shared/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
 
  constructor(private authService:AuthService , private route:Router){

} 
canActivate(){
 if(this.authService.isLoggedIn()){
    return true
  }else{
    this.route.navigate(['/login'])
    return false
  } 
}
  


}
