import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // baseURl ="https://ukeyservicesbackend.herokuapp.com";
  baseURl ="https://ukeys123.herokuapp.com";

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
  return this.http.get<any>(`${this.baseURl}/cms/contact/address`,{'headers':this.headers})
}
getAddressbyID(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/contact/address/${id}`,{'headers':this.headers})
}

deleteAddress(id:number){
  return this.http.delete(`${this.baseURl}/cms/contact/address/${id}`,{'headers':this.headers})
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
  return this.http.get<any>(`${this.baseURl}/cms/contact/phone`,{'headers':this.headers})
}
getPhonebyID(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/contact/phone/${id}`,{'headers':this.headers})
}

deletePhone(id:number){
  return this.http.delete(`${this.baseURl}/cms/contact/phone/${id}`,{'headers':this.headers})
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
  return this.http.get<any>(`${this.baseURl}/cms/contact/email`,{'headers':this.headers})
}
getEmailbyID(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/contact/email/${id}`,{'headers':this.headers})
}

deleteEmail(id:number){
  return this.http.delete(`${this.baseURl}/cms/contact/email/${id}`,{'headers':this.headers})
}


UpdateEmail(id:number,UpdatedData:any):Observable<any>{
  const body=JSON.stringify(UpdatedData);
return this.http.put(`${this.baseURl}/cms/contact/email/${id}`,body,{'headers':this.headers})
}
}
