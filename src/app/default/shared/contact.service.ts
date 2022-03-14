import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseURl ="https://git.heroku.com/universalkeyservices.git";

  constructor(private http:HttpClient) { }
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


// Category Section
PostContact(ContactData:any):Observable<any>{
  const body=JSON.stringify(ContactData);
 return this.http.post<any>(`${this.baseURl}/cms/contact`,body,{'headers':this.headers})
}

getContact():Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/contact`,{'headers':this.headers})
}
getContactbyID(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/contact/${id}`,{'headers':this.headers})
}

deleteContact(id:number){
  return this.http.delete(`${this.baseURl}/cms/contact/${id}`,{'headers':this.headers})
}


UpdateContact(id:number,UpdatedData:any):Observable<any>{
  const body=JSON.stringify(UpdatedData);
return this.http.put(`${this.baseURl}/cms/contact/${id}`,body,{'headers':this.headers})
}

}
