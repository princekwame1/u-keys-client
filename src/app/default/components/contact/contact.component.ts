import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  Form!:FormGroup;
  EditForm!:FormGroup;
  contactList: any;
  constructor(private fb:FormBuilder, private Contactservice:ContactService) { }

  ngOnInit(): void {
    this.GetContact();

    this.Form=this.fb.group({
      address:['',Validators.required],
      email:['',[Validators.email, Validators.required]],
      phone:['',Validators.required]
    })

    this.EditForm=this.fb.group({
      id:[],
      address:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required]
    })

  }
// FormCOntrolName
// get Address(){
//   return this.Form.controls.address
// } ;

// get Email(){
//   return this.Form.controls.email
// } ;
// get Phone(){
//   return this.Form.controls.phone
// } ;
// get Address1(){
//   return this.EditForm.controls.address
// } ;

// get Email1(){
//   return this.EditForm.controls.email
// } ;
// get Phone1(){
//   return this.EditForm.controls.phone
// } ;


  // Social Media Category Section

  GetContact(){
    return this.Contactservice.getContact()
    .subscribe(data=>{
      this.contactList=data;
    })
  }
  
  getContactbyid(id:number){
    this.Contactservice.getContactbyID(id)
    .subscribe(data=>{
  this.editContact(data)
    })
  }
  
  editContact(contact:any){
  this.EditForm.patchValue({
    id:contact.id,
    address:contact.address,
    email:contact.email,
    phone:contact.phone
  })
  }
  
  
  SubmitContact(){
   this.Contactservice.PostContact(this.Form.value)
    .subscribe(data=>{
      this.GetContact();
     this.Form.reset()
    })
  }
  
  UpdateContact(){
  //  const UpdatedData={
  //   address:this.EditForm.controls.address.value,
  //     email:this.EditForm.controls.email.value,
  //     phone:this.EditForm.controls.phone.value
  //   }
   this.Contactservice.UpdateContact(this.EditForm.value.id,this.EditForm.value).subscribe(data=>{
       this.GetContact();
   
    })
  
  }
  
  deleteContact(id:number){
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
           
    this.Contactservice.deleteContact(id)
    .subscribe(data=>{
      this.GetContact();
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
