import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../default/shared/auth.service';
import { NotifierService } from 'angular-notifier';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginData:any;
hide:boolean=true;
private readonly notifier: NotifierService;
  constructor(private authService:AuthService, private route:Router ,public notifierService: NotifierService) { 
    this.notifier = notifierService;
  
  }
  login = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required])

    })
  ngOnInit(): void {
  }

  proceedLogin(){
    if(this.login.valid){
      this.authService.LoginUser(this.login.value).subscribe(response=>{
        // console.log(response.token)
if(response !=null){
this.loginData=response;
this.notifier.notify('success', 'You are awesome! I mean it!');

localStorage.setItem('token',this.loginData.token);
// localStorage.setItem('user',this.loginData.user);
this.route.navigate(['/dashboard'])
}
// , error => {
//   if (error instanceof HttpErrorResponse) {
//     const errormsg = new Array<{ propName: String; erorrs: String }>()
//     if (error.status === 422) {
//       this.flashesMessage.show(error.error.message, { cssClass: 'alert-danger', timeout: 5000 })
//     }
//   }
  
// }
      })
    }
  }
}
