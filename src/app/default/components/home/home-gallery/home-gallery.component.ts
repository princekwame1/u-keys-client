import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Homegallery } from 'src/app/default/interface/homegallery';
import { HomeServiceService } from 'src/app/default/shared/home-service.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.scss']
})
export class HomeGalleryComponent implements OnInit {

  imageData:any;
  Form!:FormGroup;
  loading: boolean;
  EditForm!: FormGroup;
  GalleryList: any;
  p: number = 1;

    constructor( private fb: FormBuilder,private homeService:HomeServiceService) {
      this.loading=false;
     }
  
    ngOnInit(): void {
      this.getGalleryList();
      this.Form = this.fb.group({
        image:[null],
        description: ['',Validators.required],
    
        });

        this.EditForm = this.fb.group({
          id:[null],
          image:[null],
          description: ['',Validators.required],
      
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
      
      return this.homeService.PostGallery(this.Form.value).subscribe(
       Response => {
         console.log(Response)
         this.loading=false;
         this.getGalleryList();
         this.Form.reset();
         this.imageData='';
         $('.file-upload').val('');

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
  
getGallerybyid(id:number){
  
  this.homeService.getGallerybyId(id)
  .subscribe(data=>{
this.editGallery(data);
 this.imageData=data.image;
  })
}

editGallery(gallery:Homegallery){
this.EditForm.patchValue({
  id:gallery.id,
  description:gallery.description,

})
}



getGalleryList(){
  return this.homeService.getGallery()
  .subscribe(data=>{
    this.GalleryList=data;
  })
}


UpdateGallery(){
  // const UpdatedData={
  //    description:this.EditForm.controls.description.value,
  //    image:this.EditForm.controls.image.value
  //  }

  this.homeService.updateGallery( this.EditForm.value.id,this.EditForm.value).subscribe(data=>{
    this.EditForm.reset()
    this.imageData='';
    $('.file-upload').val('');

    this.getGalleryList();
   })
 
 }
 clearform(){
  this.imageData="";
  this.EditForm.reset();
  this.Form.reset();
  $('.file-upload').val('');

}


 deleteGallery(id:number){

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
     this.homeService.deleteGallery(id).subscribe(data=>{
        this.getGalleryList();
      
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
