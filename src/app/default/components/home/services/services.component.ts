import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Services } from 'src/app/default/interface/services';
import { HomeServiceService } from 'src/app/default/shared/home-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  p: number = 1;
  Form!: FormGroup;
  EditForm!: FormGroup;
  loading!: boolean;
  ServiceList: any;

  constructor(private fb:FormBuilder,private homeService:HomeServiceService) { }

  ngOnInit(): void {
    this.getServiceList()
    this.Form = this.fb.group({
      title:[null,Validators.required],
      description: ['',Validators.required],
      icon:[null ,Validators.required]
  
      });


      this.EditForm = this.fb.group({
        id:[null],
        title:[null,Validators.required],
        description: ['',Validators.required],
        icon:[null ,Validators.required]
    
        });
  }



  // get Title(){
  //   return this.Form.controls.title
  // } ;
  
  // get Icon(){
  //   return this.Form.controls.icon
  // } ;
  
  // get Description(){
  //   return this.Form.controls.description
  // } ;

  // get Title1(){
  //   return this.EditForm.controls.title
  // } ;
  
  // get Icon1(){
  //   return this.EditForm.controls.icon
  // } ;
  // get Description1(){
  //   return this.EditForm.controls.description
  // } ;
  
  



  
SubmitData(){
  this.loading=true;
  return this.homeService.PostService(this.Form.value).subscribe(
   Response => {
    this.getServiceList()
     this.loading=false;
     this.Form.reset();
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
 
getServicebyid(id:number){
  
  this.homeService.getServicebyId(id)
  .subscribe(data=>{
this.editService(data)
  })
}

editService(service:Services){
this.EditForm.patchValue({
  id:service.id,
  title:service.title,
  description:service.description,
  icon:service.icon
})
}



getServiceList(){
  return this.homeService.getService()
  .subscribe(data=>{
    this.ServiceList=data;
  })
}


UpdateService(){
  // const UpdatedData={
  //   title:this.EditForm.controls.title.value,
  //    description:this.EditForm.controls.description.value,
  //    icon:this.EditForm.controls.icon.value
  //  }

  this.homeService.updateService( this.EditForm.value.id,this.EditForm.value).subscribe(data=>{
      this.getServiceList();
   })
 
 }
 clearform(){
   this.EditForm.reset();
   this.Form.reset();

 }


 deleteService(id:number){
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
      this.homeService.deleteService(id).subscribe(data=>{
        this.getServiceList();
        
        })
 
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success',
        
      )
    }
  })
 

 }}
