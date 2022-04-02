import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutService } from 'src/app/default/shared/about.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  socialLinksForm!:FormGroup;
  EditsocialLinksForm!:FormGroup;
  p: number = 1;
  socialLinks: any;
  Socialcategory:any
  constructor(private Aboutservice: AboutService, private sanitizer: DomSanitizer, private fb: FormBuilder) { }

  ngOnInit(): void {

    
    this.socialLinksForm = this.fb.group({
      socialcat: ['Open this select menu',Validators.required],
      url: ['',Validators.required],
      color:['black']
      });

      this.EditsocialLinksForm = this.fb.group({
        id:[''],
        socialcat: ['',Validators.required],
        url: ['',Validators.required],
        color:['']
        });

 

 
        this.GetCategory()
    this.getSocialLink();
  }

  

 // Social Media Links Section



 getSocialLink(){
  return this.Aboutservice.getSocialLink()
  .subscribe(data=>{
    this.socialLinks=data;
  })
}

getSocialLinkbyid(id:number){
  this.Aboutservice.getSocialLinkID(id)
  .subscribe(data=>{
this.editSocialLink(data)
  })
}

editSocialLink(sLink:any){
  this.EditsocialLinksForm.patchValue({
    id:sLink.id,
    socialcat:sLink.socialcat,
    url:sLink.url,
    
  })
  }


  SubmitSocialInfo(){
      console.log(this.socialLinksForm.value)
    this.Aboutservice.PostSocialLink(this.socialLinksForm.value)
  .subscribe(data=>{
      this.getSocialLink();
      this.socialLinksForm.reset()
     })
   }

   deleteSocialLink(id:number){
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
             
      this.Aboutservice.deleteSocialLink(id)

      .subscribe(data=>{
        this.getSocialLink();
      })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success',
            
          )
        }
      })
     
    }

    UpdateSocialInfo(){
      // const UpdatedData={
      //  socialcat:this.EditsocialLinksForm.controls.socialcat.value,
      //    url:this.EditsocialLinksForm.controls.url.value,
      //  }
  
      this.Aboutservice.UpdateSocialLink(this.EditsocialLinksForm.value.id,this.EditsocialLinksForm.value).subscribe(data=>{
          this.getSocialLink();
       })
     
     }

     GetCategory(){
      return this.Aboutservice.getCategory()
      .subscribe(data=>{
        this.Socialcategory=data;
      })
    }
}
