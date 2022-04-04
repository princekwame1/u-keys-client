import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseURl ="https://ukeyservicesbackend.herokuapp.com";

  constructor(private http:HttpClient) { }
  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


// Category Section
PostStock(ContactData:any):Observable<any>{
  const body=JSON.stringify(ContactData);
 return this.http.post<any>(`${this.baseURl}/stock`,body,{'headers':this.headers})
}

getStock():Observable<any>{
  return this.http.get<any>(`${this.baseURl}/stock`,{'headers':this.headers})
}
getStockbyID(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/stock/${id}`,{'headers':this.headers})
}

deleteStock(id:number){
  return this.http.delete(`${this.baseURl}/stock/${id}`,{'headers':this.headers})
}


UpdateStock(id:number,UpdatedData:any):Observable<any>{
  const body=JSON.stringify(UpdatedData);
return this.http.put(`${this.baseURl}/stock/${id}`,body,{'headers':this.headers})
}

}
