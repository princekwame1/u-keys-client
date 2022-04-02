import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseURl ="https://ukeyservices.herokuapp.com";

  constructor(private http:HttpClient) { }
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


// Category Section
PostAddress(ContactData:any):Observable<any>{
  const body=JSON.stringify(ContactData);
 return this.http.post<any>(`${this.baseURl}/cms/contact/address`,body,{'headers':this.headers})
}

getAddress():Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/contact/address`)
}
getAddressbyID(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/contact/address/${id}`)
}

deleteAddress(id:number){
  return this.http.delete(`${this.baseURl}/cms/contact/address/${id}`)
}


UpdateAddress(id:number,UpdatedData:any):Observable<any>{
  const body=JSON.stringify(UpdatedData);
return this.http.put(`${this.baseURl}/cms/contact/address/${id}`,body,{'headers':this.headers})
}





PostPhone(ContactData:any):Observable<any>{
  const body=JSON.stringify(ContactData);
 return this.http.post<any>(`${this.baseURl}/cms/contact/phone`,body,{'headers':this.headers})
}

getPhone():Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/contact/phone`)
}
getPhonebyID(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/contact/phone/${id}`)
}

deletePhone(id:number){
  return this.http.delete(`${this.baseURl}/cms/contact/phone/${id}`)
}


UpdatePhone(id:number,UpdatedData:any):Observable<any>{
  const body=JSON.stringify(UpdatedData);
return this.http.put(`${this.baseURl}/cms/contact/phone/${id}`,body,{'headers':this.headers})
}




PostEmail(ContactData:any):Observable<any>{
  const body=JSON.stringify(ContactData);
 return this.http.post<any>(`${this.baseURl}/cms/contact/email`,body,{'headers':this.headers})
}

getEmail():Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/contact/email`)
}
getEmailbyID(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/contact/email/${id}`)
}

deleteEmail(id:number){
  return this.http.delete(`${this.baseURl}/cms/contact/email/${id}`)
}


UpdateEmail(id:number,UpdatedData:any):Observable<any>{
  const body=JSON.stringify(UpdatedData);
return this.http.put(`${this.baseURl}/cms/contact/email/${id}`,body,{'headers':this.headers})
}
}
