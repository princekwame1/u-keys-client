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

  EditAddressForm!:FormGroup;
 AddressForm!:FormGroup;
  contactList: any;
  LocationList: any;
  EmailList: any;
  PhoneList: any;
  EmailForm!: FormGroup;
  EditEmailForm!: FormGroup;
  PhoneForm!: FormGroup;
  EditPhoneForm!: FormGroup;
  activeAddress:boolean=false;
  activeEmail:boolean=false;
  activePhone:boolean=false;
EditAddress:boolean=false;
EditEmail:boolean=false;
EditPhone:boolean=false;
  constructor(private fb:FormBuilder, private Contactservice:ContactService) {
  
   }

  ngOnInit(): void {
    this.GetAddress();
    this.GetEmail();
    this.GetPhone();


    this.AddressForm=this.fb.group({
      address:['',Validators.required],
    
    })

    this.EditAddressForm=this.fb.group({
      id:[],
      address:['',Validators.required],
   
    })

    this.EmailForm=this.fb.group({
      email:['',[Validators.email, Validators.required]],
  
    })

    this.EditEmailForm=this.fb.group({
      id:[],
      email:['',Validators.required],
    })

    
    this.PhoneForm=this.fb.group({
 
      phone:['',Validators.required]
    })

    this.EditPhoneForm=this.fb.group({
      id:[],
 
      phone:['',Validators.required]
    })
  }


  // Address Section

  GetAddress(){
    return this.Contactservice.getAddress()
    .subscribe(data=>{
      this.LocationList=data;
    })
  }
  
  getAddressbyid(id:number){
    this.Contactservice.getAddressbyID(id)
    .subscribe(data=>{
  this.editAddress(data)
    })
  }
  
  editAddress(contact:any){
  this.EditAddressForm.patchValue({
    id:contact.id,
    address:contact.address,
   
  })
  }
  

  // check(array: any[]){
  //   if(array.length>1){
  //     this.limitAddress=true;
  //   }
  // }
  
  SubmitAddress(){ 
     console.log(this.AddressForm.value)
   this.Contactservice.PostAddress(this.AddressForm.value)
 
    .subscribe(data=>{
      this.GetAddress();
     this.AddressForm.reset()
    })
  }
  
  UpdateAddress(){
  
   this.Contactservice.UpdateAddress(this.EditAddressForm.value.id,this.EditAddressForm.value).subscribe(data=>{
       this.GetAddress();
   
    })
  
  }
  
  deleteAddress(id:number){
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
           
    this.Contactservice.deleteAddress(id)
    .subscribe(data=>{
      this.GetAddress();
    })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          
        )
      }
    })
   
  }
  
   

  
  // Email Section

  GetEmail(){
    return this.Contactservice.getEmail()
    .subscribe(data=>{
      this.EmailList=data;
      console.log( this.EmailList)
    })
  }
  
  getEmailbyid(id:number){
    this.Contactservice.getEmailbyID(id)
    .subscribe(data=>{
  this.editEmail(data)
    })
  }
  
  editEmail(contact:any){
  this.EditEmailForm.patchValue({
    id:contact.id,
    email:contact.email,
   
  })
  }
  
  
  SubmitEmail(){
   this.Contactservice.PostEmail(this.EmailForm.value)
    .subscribe(data=>{
      this.GetEmail();
     this.EmailForm.reset()
    })
  }
  
  UpdateEmail(){
  
   this.Contactservice.UpdateEmail(this.EditEmailForm.value.id,this.EditEmailForm.value).subscribe(data=>{
       this.GetEmail();
   
    })
  
  }
  
  deleteEmail(id:number){
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
           
    this.Contactservice.deleteEmail(id)
    .subscribe(data=>{
      this.GetEmail();
    })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success',
          
        )
      }
    })
   
  }
  



    // Phone Section

    GetPhone(){
      return this.Contactservice.getPhone()
      .subscribe(data=>{
        this.PhoneList=data;
        console.log( this.PhoneList)

      })
    }
    
    getPhonebyid(id:number){
      this.Contactservice.getPhonebyID(id)
      .subscribe(data=>{
    this.editPhone(data)
      })
    }
    
    editPhone(contact:any){
    this.EditPhoneForm.patchValue({
      id:contact.id,
      phone:contact.phone,
     
    })
    }
    
    
    SubmitPhone(){
     this.Contactservice.PostPhone(this.PhoneForm.value)
      .subscribe(data=>{
        this.GetPhone();
       this.PhoneForm.reset()
      })
    }
    
    UpdatePhone(){
    
     this.Contactservice.UpdatePhone(this.EditPhoneForm.value.id,this.EditPhoneForm.value).subscribe(data=>{
         this.GetPhone();
     
      })
    
    }
    
    deletePhone(id:number){
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
             
      this.Contactservice.deletePhone(id)
      .subscribe(data=>{
        this.GetPhone();
      })
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success',
            
          )
        }
      })
     
    }

activatephone(){
this.activePhone=!this.activePhone;
}

activateEmail(){
  this.activeEmail=  !this.activeEmail;
 
  }
  activateAddress(){
    this.activeAddress=!this.activeAddress;;
    }
      


    Editactivatephone(id:any){
      this.EditPhone=!this.EditPhone;
      this.getPhonebyid(id);
      }
      
      EditactivateEmail(id:any){
        this.EditEmail=  !this.EditEmail;
        this.getEmailbyid(id);
       
        }
        EditactivateAddress(id:any){
          this.EditAddress=!this.EditAddress;
          this.getAddressbyid(id);
          }
            

}
