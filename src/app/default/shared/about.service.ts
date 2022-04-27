import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../interface/about';
import { Category } from '../interface/category';
import { Ceoprofile } from '../interface/ceoprofile';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

   baseURl ="https://ukey-server.vercel.app";
  // baseURl ="http://localhost:8000";

  constructor(private http:HttpClient) { }


  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


//  About Section
PostAbout(description: string, image: File):Observable<About>{
  
  const formData = new FormData();
  formData.append("description", description);
  formData.append("image", image);
 return this.http.post<About>(`${this.baseURl}/cms/about/whatwedo`, formData)
 
  }
getAbout():Observable<About>{
  return this.http.get<About>(`${this.baseURl}/cms/about/whatwedo`);
}

deleteAbout(id:number):Observable<About>{
  return this.http.delete<About>(`${this.baseURl}/cms/about/whatwedo/${id}`);
}
getAboutbyId(id:number):Observable<About>{
  return this.http.get<About>(`${this.baseURl}/cms/about/whatwedo/${id}`)

}

updateAbout(id:number,data:any):Observable<any>{
  const formData = new FormData();
  formData.append("description", data.description);
  formData.append("image", data.image);
 return this.http.put<any>(`${this.baseURl}/cms/about/whatwedo/${id}`, formData)
 
}

//  About Section
PostCeo(description: string, image: File):Observable<Ceoprofile>{
  
  const formData = new FormData();
  formData.append("description", description);
  formData.append("image", image);
 return this.http.post<Ceoprofile>(`${this.baseURl}/cms/about/ceo`, formData)
 
  }
getCeo():Observable<Ceoprofile>{
  return this.http.get<Ceoprofile>(`${this.baseURl}/cms/about/ceo`);
}

deleteCeo(id:number):Observable<Ceoprofile>{
  return this.http.delete<Ceoprofile>(`${this.baseURl}/cms/about/ceo/${id}`);
}
getCeobyId(id:number):Observable<Ceoprofile>{
  return this.http.get<Ceoprofile>(`${this.baseURl}/cms/about/ceo/${id}`)

}

updateCeo(id:number,data:any):Observable<any>{
  const formData = new FormData();
  formData.append("description", data.description);
  formData.append("image", data.image);
 return this.http.put<any>(`${this.baseURl}/cms/about/ceo/${id}`, formData)
 
}


// Category Section
PostCategory(CategoryData:any):Observable<Category>{
  const body=JSON.stringify(CategoryData);
 return this.http.post<Category>(`${this.baseURl}/cms/about/social/category`,body)
}

getCategory():Observable<Category>{
  return this.http.get<Category>(`${this.baseURl}/cms/about/social/category`)
}
getCategorybyID(id:number):Observable<Category>{
  return this.http.get<Category>(`${this.baseURl}/cms/about/social/category/${id}`)
}

deleteCategory(id:number){
  return this.http.delete(`${this.baseURl}/cms/about/social/category/${id}`)
}


UpdateCategory(id:number,UpdatedData:any):Observable<any>{
  const body=JSON.stringify(UpdatedData);
return this.http.put(`${this.baseURl}/cms/about/social/category/${id}`,body)
}


// Social link Section

PostSocialLink(socialLinkData:any):Observable<any>{
  const body=JSON.stringify(socialLinkData);
 return this.http.post<any>(`${this.baseURl}/cms/about/social`,body)
}

getSocialLink():Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/about/social`)
}
getSocialLinkID(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/about/social/${id}`)
}

deleteSocialLink(id:number){
  return this.http.delete(`${this.baseURl}/cms/about/social/${id}`)
}


UpdateSocialLink(id:number,UpdatedData:any){
  const body=JSON.stringify(UpdatedData);
  return this.http.put(`${this.baseURl}/cms/about/social/${id}`,body)
}



// Partners Section
PostPartner(data:any):Observable<any>{
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
 formData.append("phone", data.phone);
  formData.append("image", data.image);
 return this.http.post(`${this.baseURl}/cms/about/partner`, formData)
 
  }
getPartner():Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/about/partner`);
}

deletePartner(id:number){
  return this.http.delete(`${this.baseURl}/cms/about/partner/${id}`);
}
getPartnerbyId(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/about/partner/${id}`)

}

updatePartner(id:number ,data:any):Observable<any>{
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
 formData.append("phone", data.phone);
  formData.append("image", data.image);
  return this.http.put<any>(`${this.baseURl}/cms/about/partner/${id}`, formData)
  
}

}
