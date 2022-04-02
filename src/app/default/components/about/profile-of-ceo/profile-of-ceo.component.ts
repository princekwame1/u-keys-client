import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Ceoprofile } from 'src/app/default/interface/ceoprofile';
import { AboutService } from 'src/app/default/shared/about.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-profile-of-ceo',
  templateUrl: './profile-of-ceo.component.html',
  styleUrls: ['./profile-of-ceo.component.scss']
})
export class ProfileOfCeoComponent implements OnInit {
  AboutList!:any;
  CeoForm!:FormGroup;
  imageData!: string;
  imagePreview!:string
  EditCeoForm!:FormGroup;
modules={};
  
  constructor(private sanitizer: DomSanitizer,private fb:FormBuilder ,private Aboutservice: AboutService) { 
    this.modules = {
      
      'toolbar': {
        container: [
          ['bold', 'italic', 'underline'],        // toggled buttons
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

      
        ],
      }
    }
  
    
  }

  

  ngOnInit(): void {
      this.getCeo();

    this.CeoForm = this.fb.group({
      image:[null],
      description:[null,Validators.required]
    })

 this.EditCeoForm = this.fb.group({
   id:[''],
  image:[null,Validators.required],
  description:[null,Validators.required]
 })
  
};
onFileSelected(event:any) {

  const file = event.target.files[0];
  this.CeoForm.patchValue({ image: file });
  this.EditCeoForm.patchValue({ image: file });
  const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  if (file && allowedMimeTypes.includes(file.type)) {
    const reader = new FileReader();
    reader.onload = () => {
       this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
 
}





Submit(){
  this.Aboutservice.PostCeo(this.CeoForm.value.description, this.CeoForm.value.image)
  .subscribe(data=>{
       this.getCeo();
  this.CeoForm.reset();
  $('.file-upload').val('');
  this.imageData = '';
  })
 }



 getCeo(){
 return this.Aboutservice.getCeo()
 .subscribe(data=>{
   this.AboutList=data;
   console.log(this.AboutList)
 })

}

getCeobyid(id:number){
  this.Aboutservice.getCeobyId(id)
  .subscribe(data=>{
   this.editCeo(data);
   this.imagePreview=data.image;

  })
}

editCeo(about:Ceoprofile){
  this.EditCeoForm.patchValue({
    id:about.id,
    description:about.description,
   
  })
}

updateCeo(){
  // const UpdatedData={
  //     description:this.EditAboutForm.controls.description.value,
  //     image:this.EditAboutForm.controls.image.value
  //   }
    this.Aboutservice.updateCeo(this.EditCeoForm.value.id,this.EditCeoForm.value)
    .subscribe(data=>{
      this.getCeo();
      $('.file-upload').val('');
this.imageData='';
    })
 
  
}

deleteCeo(id:number){
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
     this.Aboutservice.deleteCeo(id).subscribe(data=>{
        this.getCeo()
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
