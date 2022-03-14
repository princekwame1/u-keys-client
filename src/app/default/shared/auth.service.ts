import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken:any;
  baseURL='https://git.heroku.com/universalkeyservices.git/auth'

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  constructor(public http:HttpClient , ) { }

  LoginUser(user: any): Observable<any>{  
    const body=JSON.stringify(user);
      return this.http.post(`${this.baseURL}/authenticate`, body,{'headers':this.headers})
     
    
  }
  
 
   


getUserInfo():Observable<any>{
  return this.http.get(`${this.baseURL}/userlist`,{'headers':this.headers})
}



PostUserInfo(userinfo:any): Observable<any>{
 
  const formData = new FormData();
  formData.append("username", userinfo.username);
  formData.append("email", userinfo.email);
  formData.append("phone", userinfo.phone);
  formData.append("position", userinfo.position);
  formData.append("password", userinfo.password);
  formData.append("cpassword", userinfo.cpassword);
   formData.append("image", userinfo.image);
  
  return this.http.post(`${this.baseURL}/register`, formData,{'headers':this.headers})
    
  }


  deleteUser(id:number){
    return this.http.delete(`${this.baseURL}/${id}`,{'headers':this.headers})

  }

  getUserbyId(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseURL}/${id}`,{'headers':this.headers})
  
  }

  updateUser(id:number ,data:any):Observable<any>{
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
   formData.append("phone", data.phone);
    formData.append("image", data.image);
    formData.append("position", data.position);

    return this.http.put<any>(`${this.baseURL}/${id}`, formData,{'headers':this.headers})
    
  }
}
