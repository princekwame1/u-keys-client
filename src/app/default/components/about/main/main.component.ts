import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { About } from 'src/app/default/interface/about';
import { AboutService } from 'src/app/default/shared/about.service';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  AboutList!:any;
  AboutForm!:FormGroup;
  imageData!: string;
  imagePreview!:string
  EditAboutForm!:FormGroup;
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
      this.getAbout();

    this.AboutForm = this.fb.group({
      image:[null],
      description:[null,Validators.required]
    })

 this.EditAboutForm = this.fb.group({
   id:[''],
  image:[null,Validators.required],
  description:[null,Validators.required]
 })
  
};
onFileSelected(event:any) {

  const file = event.target.files[0];
  this.AboutForm.patchValue({ image: file });
  this.EditAboutForm.patchValue({ image: file });
  const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  if (file && allowedMimeTypes.includes(file.type)) {
    const reader = new FileReader();
    reader.onload = () => {
       this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
 
}





onSubmit(){
  this.Aboutservice.PostAbout(this.AboutForm.value.description, this.AboutForm.value.image)
  .subscribe(data=>{
    console.log(data)
       this.getAbout();
  this.AboutForm.reset();
  $('.file-upload').val('');
  this.imageData = '';
  })
 }



getAbout(){
 return this.Aboutservice.getAbout()
 .subscribe(data=>{
   this.AboutList=data;
   console.log(this.AboutList)
 })

}

getAboutbyid(id:number){
  this.Aboutservice.getAboutbyId(id)
  .subscribe(data=>{
   this.editAbout(data);
   this.imagePreview=data.image;

  })
}

editAbout(about:About){
  this.EditAboutForm.patchValue({
    id:about.id,
    description:about.description,
   
  })
}

updateAbout(){
  // const UpdatedData={
  //     description:this.EditAboutForm.controls.description.value,
  //     image:this.EditAboutForm.controls.image.value
  //   }
    this.Aboutservice.updateAbout(this.EditAboutForm.value.id,this.EditAboutForm.value)
    .subscribe(data=>{
      this.getAbout();
      $('.file-upload').val('');
this.imageData='';
    })
 
  
}

deleteAbout(id:number){
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
     this.Aboutservice.deleteAbout(id).subscribe(data=>{
        this.AboutList()
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
