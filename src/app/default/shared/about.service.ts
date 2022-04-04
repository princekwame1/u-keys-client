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

  baseURl ="https://ukeyservicesbackend.herokuapp.com";

  constructor(private http:HttpClient) { }


  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


//  About Section
PostAbout(description: string, image: File):Observable<About>{
  
  const formData = new FormData();
  formData.append("description", description);
  formData.append("image", image);
 return this.http.post<About>(`${this.baseURl}/cms/about/whatwedo`, formData,{'headers':this.headers})
 
  }
getAbout():Observable<About>{
  return this.http.get<About>(`${this.baseURl}/cms/about/whatwedo`,{'headers':this.headers});
}

deleteAbout(id:number):Observable<About>{
  return this.http.delete<About>(`${this.baseURl}/cms/about/whatwedo/${id}`,{'headers':this.headers});
}
getAboutbyId(id:number):Observable<About>{
  return this.http.get<About>(`${this.baseURl}/cms/about/whatwedo/${id}`,{'headers':this.headers})

}

updateAbout(id:number,data:any):Observable<any>{
  const formData = new FormData();
  formData.append("description", data.description);
  formData.append("image", data.image);
 return this.http.put<any>(`${this.baseURl}/cms/about/whatwedo/${id}`, formData,{'headers':this.headers})
 
}

//  About Section
PostCeo(description: string, image: File):Observable<Ceoprofile>{
  
  const formData = new FormData();
  formData.append("description", description);
  formData.append("image", image);
 return this.http.post<Ceoprofile>(`${this.baseURl}/cms/about/ceo`, formData,{'headers':this.headers})
 
  }
getCeo():Observable<Ceoprofile>{
  return this.http.get<Ceoprofile>(`${this.baseURl}/cms/about/ceo`,{'headers':this.headers});
}

deleteCeo(id:number):Observable<Ceoprofile>{
  return this.http.delete<Ceoprofile>(`${this.baseURl}/cms/about/ceo/${id}`,{'headers':this.headers});
}
getCeobyId(id:number):Observable<Ceoprofile>{
  return this.http.get<Ceoprofile>(`${this.baseURl}/cms/about/ceo/${id}`,{'headers':this.headers})

}

updateCeo(id:number,data:any):Observable<any>{
  const formData = new FormData();
  formData.append("description", data.description);
  formData.append("image", data.image);
 return this.http.put<any>(`${this.baseURl}/cms/about/ceo/${id}`, formData,{'headers':this.headers})
 
}


// Category Section
PostCategory(CategoryData:any):Observable<Category>{
  const body=JSON.stringify(CategoryData);
 return this.http.post<Category>(`${this.baseURl}/cms/about/social/category`,body,{'headers':this.headers})
}

getCategory():Observable<Category>{
  return this.http.get<Category>(`${this.baseURl}/cms/about/social/category`,{'headers':this.headers})
}
getCategorybyID(id:number):Observable<Category>{
  return this.http.get<Category>(`${this.baseURl}/cms/about/social/category/${id}`,{'headers':this.headers})
}

deleteCategory(id:number){
  return this.http.delete(`${this.baseURl}/cms/about/social/category/${id}`,{'headers':this.headers})
}


UpdateCategory(id:number,UpdatedData:any):Observable<any>{
  const body=JSON.stringify(UpdatedData);
return this.http.put(`${this.baseURl}/cms/about/social/category/${id}`,body,{'headers':this.headers})
}


// Social link Section

PostSocialLink(socialLinkData:any):Observable<any>{
  const body=JSON.stringify(socialLinkData);
 return this.http.post<any>(`${this.baseURl}/cms/about/social`,body,{'headers':this.headers})
}

getSocialLink():Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/about/social`,{'headers':this.headers})
}
getSocialLinkID(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/about/social/${id}`,{'headers':this.headers})
}

deleteSocialLink(id:number){
  return this.http.delete(`${this.baseURl}/cms/about/social/${id}`,{'headers':this.headers})
}


UpdateSocialLink(id:number,UpdatedData:any){
  const body=JSON.stringify(UpdatedData);
  return this.http.put(`${this.baseURl}/cms/about/social/${id}`,body,{'headers':this.headers})
}



// Partners Section
PostPartner(data:any):Observable<any>{
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
 formData.append("phone", data.phone);
  formData.append("image", data.image);
 return this.http.post(`${this.baseURl}/cms/about/partner`, formData,{'headers':this.headers})
 
  }
getPartner():Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/about/partner`,{'headers':this.headers});
}

deletePartner(id:number){
  return this.http.delete(`${this.baseURl}/cms/about/partner/${id}`,{'headers':this.headers});
}
getPartnerbyId(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/about/partner/${id}`,{'headers':this.headers})

}

updatePartner(id:number ,data:any):Observable<any>{
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
 formData.append("phone", data.phone);
  formData.append("image", data.image);
  return this.http.put<any>(`${this.baseURl}/cms/about/partner/${id}`, formData,{'headers':this.headers})
  
}

}
