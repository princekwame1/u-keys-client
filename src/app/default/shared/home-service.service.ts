import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  // baseURl ="https://ukeyservicesbackend.herokuapp.com";
  baseURl ="https://ukeys123.herokuapp.com";

  constructor(private http:HttpClient) { }


  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


//  Home Carousel Section

  PostCarousel(data:any):Observable<any>{
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("description2", data.description2);
    formData.append("description3", data.description3);
    formData.append("image", data.image);
   
    return this.http.post<any>(`${this.baseURl}/cms/home/carousel`, formData)
  
    }

  getCarousel():Observable<any>{
    return this.http.get<any>(`${this.baseURl}/cms/home/carousel`,{'headers':this.headers});
  }
  
  deleteCarousel(id:number){
    return this.http.delete(`${this.baseURl}/cms/home/carousel/${id}`);
  }

  getCarouselbyId(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseURl}/cms/home/carousel/${id}`,{'headers':this.headers})
  
  }
  
  updateCarousel(id:number,data:any):Observable<any>{
    const formData = new FormData();
    formData.append("description2", data.description2);
    formData.append("description3", data.description3);
    formData.append("description", data.description);
    formData.append("image", data.image);
   return this.http.put<any>(`${this.baseURl}/cms/home/carousel/${id}`, formData)
 
  }



  //Home Information Section

  PostInfo(data:any):Observable<any>{
 return this.http.post<any>(`${this.baseURl}/cms/home/info`, data)
  
    }

  getInfo():Observable<any>{
    return this.http.get<any>(`${this.baseURl}/cms/home/info`,{'headers':this.headers});
  }
  
  deleteInfo(id:number){
    return this.http.delete(`${this.baseURl}/cms/home/info/${id}`);
  }
  
  getInfobyId(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseURl}/cms/home/info/${id}`,{'headers':this.headers})
  
  }
  
  updateInfo(id:number,data:any):Observable<any>{
    
   return this.http.put<any>(`${this.baseURl}/cms/home/info/${id}`, data)
 
  }



    //Home Services  Section

    PostService(data:any):Observable<any>{
   return this.http.post<any>(`${this.baseURl}/cms/home/services`, data)
    
      }
  
    getService():Observable<any>{
      return this.http.get<any>(`${this.baseURl}/cms/home/services`,{'headers':this.headers});
    }
    
    deleteService(id:number){
      return this.http.delete(`${this.baseURl}/cms/home/services/${id}`);
    }
    
    getServicebyId(id:number):Observable<any>{
      return this.http.get<any>(`${this.baseURl}/cms/home/services/${id}`,{'headers':this.headers})
    
    }
    
    updateService(id:number,data:any):Observable<any>{
      
     return this.http.put<any>(`${this.baseURl}/cms/home/services/${id}`, data)
   
    }



      //Home gallery  Section

      PostGallery(data:any):Observable<any>{
        const formData = new FormData();
        formData.append("description", data.description);
        formData.append("image", data.image);
     return this.http.post<any>(`${this.baseURl}/cms/home/gallery`, formData)
      
        }
    
      getGallery():Observable<any>{
        return this.http.get<any>(`${this.baseURl}/cms/home/gallery`,{'headers':this.headers});
      }
      
      deleteGallery(id:number){
        return this.http.delete(`${this.baseURl}/cms/home/gallery/${id}`);
      }
      
      getGallerybyId(id:number):Observable<any>{
        return this.http.get<any>(`${this.baseURl}/cms/home/gallery/${id}`,{'headers':this.headers})
      
      }
      
      updateGallery(id:number,data:any):Observable<any>{
        const formData = new FormData();
        formData.append("description", data.description);
        formData.append("image", data.image);
       return this.http.put<any>(`${this.baseURl}/cms/home/gallery/${id}`, formData)
     
      }

}
