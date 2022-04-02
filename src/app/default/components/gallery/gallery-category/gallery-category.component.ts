import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GalleryCategory } from 'src/app/default/interface/gallery-category';
import { GalleryService } from 'src/app/default/shared/gallery.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gallery-category',
  templateUrl: './gallery-category.component.html',
  styleUrls: ['./gallery-category.component.scss']
})
export class GalleryCategoryComponent implements OnInit {
  EditCategoryForm: FormGroup;
  CategoryForm: FormGroup;
  loading: any;
  galleryList: any;
  categoryList: any;
  p: number = 1;
  constructor(public fb: FormBuilder, private Galleryservice: GalleryService) {
    this.CategoryForm = this.fb.group({
      category: [null, Validators.required],
      description: [null, Validators.required]

    })


    this.EditCategoryForm = this.fb.group({
      id: [null],
      category: [null, Validators.required],
      description: [null, Validators.required]

    })
   }

  ngOnInit(): void {
   this.getGalleryCat();
  }


// Gallery Category
// get CatDescription(){
//   return this.CategoryForm.controls.description
// } ;
// get GCategory(){
//   return this.CategoryForm.controls.category
// } ;

// get EditCatDescription(){
//   return this.EditCategoryForm.controls.description
// } ;

// get EditGCategory(){
//   return this.EditCategoryForm.controls.category
// } ;



  // Gallery Category Section

  getGalleryCat(){
    return this.Galleryservice.getGalleryCat().subscribe(data=>{
      this.categoryList=data;
    })
  }

  SubmitGalleryCat() {
 return this.Galleryservice.PostGalleryCat(this.CategoryForm.value).subscribe(data=>{
   this. getGalleryCat();
   this.CategoryForm.reset();
 })
  }

  deleteGalleryCat(id:number) {

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
        this.Galleryservice.deleteGalleryCat(id).subscribe(data=>{
          this. getGalleryCat();
        
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          
        )
      }
    })
  



  };


  UpdateGalleryCat(){
    // const updatedData={
    //   category:this.EditCategoryForm.controls.category.value,
    //   description:this.EditCategoryForm.controls.description.value,
    //   }
return this.Galleryservice.putGalleryCat(this.EditCategoryForm.value.id , this.EditCategoryForm.value)
.subscribe(data=>{
  this.  getGalleryCat()
})
  }


  getGalleryCatbyid(id:number){
  return this.Galleryservice.getGalleryCatbyId(id)
  .subscribe(data=>{
    this.editGalleryCat(data);
  })
  }
  
  editGalleryCat(gallery:GalleryCategory){
  this.EditCategoryForm.patchValue({
    id:gallery.id,
    description:gallery.description,
    category:gallery.category
  })
  }

}
