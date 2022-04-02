import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Category } from 'src/app/default/interface/category';
import { AboutService } from 'src/app/default/shared/about.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-social-category',
  templateUrl: './social-category.component.html',
  styleUrls: ['./social-category.component.scss']
})
export class SocialCategoryComponent implements OnInit {

  p: number = 1;
  Socialcategory:any;
  SocialCategoryForm!:FormGroup;
  EditSocialCategoryForm!:FormGroup;
  socialLinks: any;
  constructor(private Aboutservice: AboutService, private sanitizer: DomSanitizer, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.GetCategory();

    this.SocialCategoryForm=this.fb.group({
      icon:['',Validators.required],
      name:['',Validators.required],
      color:['']
    })

    this.EditSocialCategoryForm=this.fb.group({
      id:[],
      icon:['',Validators.required],
      name:['',Validators.required],
      color:['']
    })

 
  }

// FormCOntrolName
// get Name(){
//   return this.SocialCategoryForm.controls.name
// } ;

// get Icon(){
//   return this.SocialCategoryForm.controls.icon
// } ;

// get Name1(){
//   return this.EditSocialCategoryForm.controls.name
// } ;

// get Icon1(){
//   return this.EditSocialCategoryForm.controls.icon
// } ;
// get Color1(){
//   return this.EditSocialCategoryForm.controls.color
// } ;


  // Social Media Category Section

  GetCategory(){
    return this.Aboutservice.getCategory()
    .subscribe(data=>{
      this.Socialcategory=data;
      this. getSocialLink();
    })
  }

  
 getSocialLink(){
  return this.Aboutservice.getSocialLink()
  .subscribe(data=>{
    this.socialLinks=data;
  })
}
  
  getCategorybyid(id:number){
    this.Aboutservice.getCategorybyID(id)
    .subscribe(data=>{
  this.editCategory(data)
    })
  }
  
  editCategory(scategory:Category){
  this.EditSocialCategoryForm.patchValue({
    id:scategory.id,
    icon:scategory.icon,
    name:scategory.name,
    color:scategory.color
  })
  }
  
  
  SubmitCategory(){
   this.Aboutservice.PostCategory(this.SocialCategoryForm.value)
    .subscribe(data=>{
      this.GetCategory();
     this.SocialCategoryForm.reset()
    })
  }
  
  UpdateCategory(){
  //  const UpdatedData={
  //   icon:this.EditSocialCategoryForm.controls.icon.value,
  //     name:this.EditSocialCategoryForm.controls.name.value,
  //     color:this.EditSocialCategoryForm.controls.color.value
  //   }
   this.Aboutservice.UpdateCategory(this.EditSocialCategoryForm.value.id,this.EditSocialCategoryForm.value).subscribe(data=>{
       this.GetCategory();
   
    })
  
  }
  
  deleteCategory(id:number){
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
           
    this.Aboutservice.deleteCategory(id)
    .subscribe(data=>{
      this.GetCategory();
    })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          
        )
      }
    })
   
  }
    //End Social Media Category Section
  
   


}
