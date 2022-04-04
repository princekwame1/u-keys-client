import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
 
  baseURl ="https://ukeyservicesbackend.herokuapp.com";
  constructor(private http:HttpClient) { }

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


  // Gallery Section

getGallery():Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/gallery/main`,{'headers':this.headers})
}

getGallerybyId(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/gallery/main/${id}`,{'headers':this.headers})
}

deleteGallery(id:number):Observable<any>{
  return this.http.delete<any>(`${this.baseURl}/cms/gallery/main/${id}`,{'headers':this.headers})
}

putGallery(id:number , data:any):Observable<any>{

  if(data.image===null){
      const formData = new FormData();
        formData.append('category',data.category);
  formData.append('vendor',data.vendor);
  formData.append('video',data.video)
  return this.http.put<any>(`${this.baseURl}/cms/gallery/main-video/${id}`,formData,{'headers':this.headers})

  }else{
  const formData = new FormData();
  formData.append('category',data.category);
formData.append('vendor',data.vendor);
  formData.append('image',data.image);
  return this.http.put<any>(`${this.baseURl}/cms/gallery/main/${id}`,formData,{'headers':this.headers})

  }

}

PostGallery(data:any):Observable<any>{
if(data.image===null){
 
  const formData = new FormData();
  formData.append("category", data.category);
  formData.append("vendor", data.vendor); 
  formData.append("video",data.video)
  return this.http.post<any>(`${this.baseURl}/cms/gallery/main-video`, formData,{'headers':this.headers})

}else{
  const formData = new FormData();
  formData.append("category", data.category);
  formData.append("vendor", data.vendor); 
  formData.append("image", data.image);

  return this.http.post<any>(`${this.baseURl}/cms/gallery/main`, formData,{'headers':this.headers})
}

}



// Gallery Category Section

PostGalleryCat(data:any):Observable<any>{
 return this.http.post<any>(`${this.baseURl}/cms/gallery/category`,data,{'headers':this.headers})
  }
  
  getGalleryCat():Observable<any>{
    return this.http.get<any>(`${this.baseURl}/cms/gallery/category`,{'headers':this.headers})
  }
  
  getGalleryCatbyId(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseURl}/cms/gallery/category/${id}`,{'headers':this.headers})
  }
  
  deleteGalleryCat(id:number){
    return this.http.delete(`${this.baseURl}/cms/gallery/category/${id}`,{'headers':this.headers})
  }
  
  putGalleryCat(id:number , data:any):Observable<any>{
   
    return this.http.put<any>(`${this.baseURl}/cms/gallery/category/${id}`,data,{'headers':this.headers})
  }
}
