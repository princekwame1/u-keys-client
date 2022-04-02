import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gallery } from 'src/app/default/interface/gallery';
import { GalleryService } from 'src/app/default/shared/gallery.service';
import Swal from 'sweetalert2';
declare var $: any;
import {  ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, {  EffectCoverflow,Autoplay, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCoverflow,Autoplay, Pagination]);



@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AlbumComponent implements OnInit {

 
  Form: FormGroup;
  EditGForm: FormGroup;
  p: number = 1;
  loading: any;
  galleryList: any;
  categoryList: any;
  imageData: any;
  imagePicked:boolean;
  videoPicked:boolean;
fileType:any
  videoData: any;

  constructor(public fb: FormBuilder, private Galleryservice: GalleryService) {

    this.loading = false;
    this.imagePicked=false;
    this.videoPicked=false;
    this.Form = this.fb.group({
      image: [null],
      category: ['Open this select menu', Validators.required],
      vendor: [null, Validators.required],
       video:[null]
    })


    this.EditGForm = this.fb.group({
      id: [null],
      image: [null],
      category: [null, Validators.required],
      vendor: [null, Validators.required],
      video:[null]

    })

    this.fileType=[
      {type:"Pick image",value:"image" },
       {type:"Pick video",value:"video"}
  ]
   
   }

  ngOnInit(): void {
      this.getGallery();
this.getGalleryCat();

  }

  // get Category(){
  //   return this.Form.controls.category
  // } ;
  
  // get Vendor(){
  //   return this.Form.controls.vendor
  // } ;
  
  // get EditCategory(){
  //   return this.EditGForm.controls.category.value
  // } ;
  
  // get EditVendor(){
  //   return this.EditGForm.controls.vendor
  // } ;


  onImageSelect(event:any) {
    const file = event.target.files[0];
      this.Form.patchValue({ image: file });
       this.EditGForm.patchValue({ image: file });
     const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
     if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
     }
   
  }
  

  onVideoSelect(event:any) {
    const file = event.target.files[0];
      this.Form.patchValue({ video: file });
       this.EditGForm.patchValue({ video: file });
     const allowedMimeTypes = ["video/mp4" ,];
     if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.videoData = reader.result ;
      };
      reader.readAsDataURL(file);
     }
 
  }
  

  getGalleryCat(){
    return this.Galleryservice.getGalleryCat().subscribe(data=>{
      this.categoryList=data;
      console.log(this.categoryList)
    })
  }

  // Gallery Section

  getGallery(){
   this.Galleryservice.getGallery().subscribe(data=>{
     this.galleryList=data;
   })
  }


  SubmitGallery() {
    console.log(this.Form.value)
 return this.Galleryservice.PostGallery(this.Form.value).subscribe(data=>{

   this.getGallery();
  this.Form.reset()
     this.imageData='';
       $('.file-upload').val('');
       this.videoData='';
       this.imagePicked=false;
       this.videoPicked=false;
 })
  }

  clearform(){
    this.imageData="";
    this.EditGForm.reset();
    this.Form.reset();
    $('.file-upload').val('');
    this.videoData='';
    this.imagePicked=false;
    this.videoPicked=false;
  }

  deleteGallery(id:number) {

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
  this.Galleryservice.deleteGallery(id).subscribe(data=>{
  this.getGallery();

})
   
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          
        )
      }
    })
  

  };


  UpdateGallery(){
  // const updatedData={
  //   category:this.EditGForm.controls.category.value,
  //   vendor:this.EditGForm.controls.vendor.value,
  //   image:this.EditGForm.controls.image.value,
  //   video:this.EditGForm.controls.video.value
  //   }
    // console.log(updatedData)
    return this.Galleryservice.putGallery(this.EditGForm.value.id,this.EditGForm.value)
    .subscribe(data=>{
      this.getGallery();
      $('.file-upload').val('');
 this.EditGForm.reset()
    this.imageData='';
    this.videoData='';
    })

  }


  getGallerybyid(id:number){
  return this.Galleryservice.getGallerybyId(id).subscribe(data=>{
    this.editGallery(data);
    if(data.image){
     this.pickimage();
    this.imageData=data.image; 
    }else{
      this.pickvideo();
     this.videoData=data.video;

    }
    
  })
  }
  
  editGallery(gallery:Gallery){
  this.EditGForm.patchValue({
    id:gallery.id,
    category:gallery.category,
    vendor:gallery.vendor,

  })
  }

  onselect(event:any){
if(event.target.value==="image"){
  this.pickimage();
}
else if(event.target.value==="video"){
  this.pickvideo();
}
else{
  return;
}
  }

  pickimage(){
    this.imagePicked=true;
    this.videoPicked=false;

  }


 pickvideo(){
  this.videoPicked=true;
  this.imagePicked=false;

 }

}
