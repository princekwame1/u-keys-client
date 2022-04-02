import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/default/shared/account.service';
import { GalleryService } from 'src/app/default/shared/gallery.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  StockForm : FormGroup;
  EditStockForm: FormGroup;
  StockList: any;
  categoryList: any;

  constructor(public fb: FormBuilder, private Accountservice: AccountService,private galleryService:GalleryService) {

    
    this.StockForm = this.fb.group({
      name: [null,Validators.required],
      category: ['Open this select menu', Validators.required],
      brand:[null,Validators.required],
      quantity: [null, Validators.required],
      price: [null, Validators.required],

    })


    this.EditStockForm = this.fb.group({
      id: [null],
      name: [null,Validators.required],
      category: ['Open this select menu', Validators.required],
      brand:[null,Validators.required],
      quantity: [null, Validators.required],
      price: [null, Validators.required],

    })

  
   
   }


  ngOnInit(): void {
    this.getStock();
    this. getGalleryCat();
  }



  getGalleryCat(){
    return this.galleryService.getGalleryCat().subscribe(data=>{
      this.categoryList=data;
    })
  }

  // Gallery Section

  getStock(){
    this.Accountservice.getStock().subscribe(data=>{
      this.StockList=data;
      console.log(this.StockList)
    })
   }
 
 
   SubmitStock() {
     console.log(this.StockForm.value)
  return this.Accountservice.PostStock(this.StockForm.value).subscribe(data=>{
 
    this.getStock();
   this.StockForm.reset()

  })
   }
 
  //  clearform(){
  //    this.imageData="";
  //    this.EditGForm.reset();
  //    this.Form.reset();
  //    $('.file-upload').val('');
  //    this.videoData='';
  //    this.imagePicked=false;
  //    this.videoPicked=false;
  //  }
 
   deleteStock(id:number) {
 
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
   this.Accountservice.deleteStock(id).subscribe(data=>{
   this.getStock();
 
 })
    
         Swal.fire(
           'Deleted!',
           'Your file has been deleted.',
           'success',
           
         )
       }
     })
   
 
   };
 
 
   UpdateStock(){
   // const updatedData={
   //   category:this.EditGForm.controls.category.value,
   //   vendor:this.EditGForm.controls.vendor.value,
   //   image:this.EditGForm.controls.image.value,
   //   video:this.EditGForm.controls.video.value
   //   }
     // console.log(updatedData)
     return this.Accountservice.UpdateStock(this.EditStockForm.value.id,this.EditStockForm.value)
     .subscribe(data=>{
       this.getStock();
  this.EditStockForm.reset()
 
     })
 
   }
 
 
   getStockbyid(id:number){
   return this.Accountservice.getStockbyID(id).subscribe(data=>{
     this.editStock(data);
    
     
   })
   }
   
   editStock(stock:any){
   this.EditStockForm.patchValue({
     id:stock.id,
     category:stock.category,
     brand:stock.vendor,
      name:stock.name,
      quantity:stock.quantity,
      price:stock.price
   })
   }
 
}
