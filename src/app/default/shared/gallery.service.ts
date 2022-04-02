import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
 
  baseURl ="https://ukeyservices.herokuapp.com";
  constructor(private http:HttpClient) { }

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


  // Gallery Section

getGallery():Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/gallery/main`)
}

getGallerybyId(id:number):Observable<any>{
  return this.http.get<any>(`${this.baseURl}/cms/gallery/main/${id}`)
}

deleteGallery(id:number):Observable<any>{
  return this.http.delete<any>(`${this.baseURl}/cms/gallery/main/${id}`)
}

putGallery(id:number , data:any):Observable<any>{

  if(data.image===null){
      const formData = new FormData();
        formData.append('category',data.category);
  formData.append('vendor',data.vendor);
  formData.append('video',data.video)
  return this.http.put<any>(`${this.baseURl}/cms/gallery/main-video/${id}`,formData)

  }else{
  const formData = new FormData();
  formData.append('category',data.category);
formData.append('vendor',data.vendor);
  formData.append('image',data.image);
  return this.http.put<any>(`${this.baseURl}/cms/gallery/main/${id}`,formData)

  }

}

PostGallery(data:any):Observable<any>{
if(data.image===null){
 
  const formData = new FormData();
  formData.append("category", data.category);
  formData.append("vendor", data.vendor); 
  formData.append("video",data.video)
  return this.http.post<any>(`${this.baseURl}/cms/gallery/main-video`, formData)

}else{
  const formData = new FormData();
  formData.append("category", data.category);
  formData.append("vendor", data.vendor); 
  formData.append("image", data.image);

  return this.http.post<any>(`${this.baseURl}/cms/gallery/main`, formData)
}

}



// Gallery Category Section

PostGalleryCat(data:any):Observable<any>{
 return this.http.post<any>(`${this.baseURl}/cms/gallery/category`,data,{'headers':this.headers})
  }
  
  getGalleryCat():Observable<any>{
    return this.http.get<any>(`${this.baseURl}/cms/gallery/category`)
  }
  
  getGalleryCatbyId(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseURl}/cms/gallery/category/${id}`)
  }
  
  deleteGalleryCat(id:number){
    return this.http.delete(`${this.baseURl}/cms/gallery/category/${id}`)
  }
  
  putGalleryCat(id:number , data:any):Observable<any>{
   
    return this.http.put<any>(`${this.baseURl}/cms/gallery/category/${id}`,data)
  }
}
