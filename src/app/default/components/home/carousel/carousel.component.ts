import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Carousel } from 'src/app/default/interface/carousel';
import { HomeServiceService } from 'src/app/default/shared/home-service.service';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';
declare var $: any;
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, {EffectFade, Autoplay, Pagination, Navigation, } from "swiper";

// install Swiper modules
SwiperCore.use([EffectFade,Autoplay, Pagination, Navigation,]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  imageData:any;
  Form!:FormGroup;
    EditForm!: FormGroup;
    CarouselList: any;
    loading!: boolean;
    p: number = 1;
    constructor( private fb: FormBuilder , private homeService:HomeServiceService) { }
  
    ngOnInit(): void {
      this.getCarouselList();
  
      this.Form = this.fb.group({
        image:[null,Validators.required],
        description: ['',Validators.required],
        description2: ['',Validators.required],
        description3: ['',Validators.required],

        });
  
  
        this.EditForm = this.fb.group({
          id:[''],
          image:[null,Validators.required],
          description: ['',Validators.required],
          description2: ['',Validators.required],
          description3: ['',Validators.required],

          });
    }
    onFileSelect(event:any) {
      const file = event.target.files[0];
        this.Form.patchValue({ image: file });
         this.EditForm.patchValue({ image: file });
       const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
       if (file && allowedMimeTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        };
        reader.readAsDataURL(file);
       }
     
    }
  
  SubmitInfo(){
    this.loading=true;
    // const CarouselInfo={
    //    description: this.Form.controls.description.value,
    //    image: this.Form.controls.image.value,
    //  }
    //  console.log(CarouselInfo)
    return this.homeService.PostCarousel(this.Form.value).subscribe(
     Response => {
       this.loading=false;
       this.getCarouselList();
       this.Form.reset();
        $('.file-upload').val('');
       this.imageData='';
       // this.flashesMessage.show(Response.message, { cssClass: 'alert-success', timeout: 3000 })
     }
     ,error => {
       if (error instanceof HttpErrorResponse) {
         if (error.status === 422) {
           this.loading=false;
   
         }
       }
     }
     )
  }
   
  getCarouselbyid(id:number){
    
    this.homeService.getCarouselbyId(id)
    .subscribe(data=>{
  this.editCarousel(data)
   this.imageData=data.image;
    })
  }
  
  editCarousel(carousel:Carousel){
  this.EditForm.patchValue({
    id:carousel.id,
    description:carousel.description,
    description2:carousel.description2,
    description3:carousel.description3,

  })
  }
  
  
  
  getCarouselList(){
    return this.homeService.getCarousel()
    .subscribe(data=>{
      this.CarouselList=data;
    })
  }
  
  
  UpdateCarousel(){
    this.loading=true;
    // const UpdatedData={
    //    description:this.EditForm.controls.description.value,
    //    image:this.EditForm.controls.image.value
    //  }
  
    this.homeService.updateCarousel( this.EditForm.value.id,this.EditForm.value).subscribe(data=>{
      this.EditForm.reset()
      this.imageData='';
       $('.file-upload').val('');
      this.getCarouselList();
        this.loading=false;
     })
   
   }
   clearform(){
     this.imageData="";
     this.EditForm.reset();
     this.Form.reset();
      $('.file-upload').val('');
  
   }
  
  
   deleteCarousel(id:number){
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
   
  this.homeService.deleteCarousel(id).subscribe(data=>{
    this.getCarouselList();
    
    })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          
        )
      }
    })
  
   }
  
  
  
}
