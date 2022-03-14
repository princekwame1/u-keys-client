import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { User } from '../../interface/user';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  loading: boolean | undefined;
  imageData: string | undefined;
  EditUserForm!:FormGroup;
  userForm! :FormGroup
  UserList: any;

  constructor(private sanitizer: DomSanitizer,private authService:AuthService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.getUserList();


    this.userForm =  this.fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      image:[''],
      phone: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      cpassword: [null, Validators.required],
      position:[null,Validators.required],
    }, { validator: this.mustMatch('password', 'cpassword') })



    this.EditUserForm =  this.fb.group({
      id:[null],
      username: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      image:[null],
      phone: [null, Validators.required],
     position:[null,Validators.required],
    })
}


mustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingcontrol = formGroup.controls[matchingControlName];
    if (matchingcontrol.errors && !matchingcontrol.errors['mustMatch']) {
      return
    }
    if (control.value !== matchingcontrol.value) {
      matchingcontrol.setErrors({ mustMatch: true })
    } else {
      matchingcontrol.setErrors(null)
    }
  }
}

onFileSelect(event:any) {
  const file = event.target.files[0];
   this.userForm.patchValue({ image: file });
   this.EditUserForm.patchValue({ image: file });

 const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
   if (file && allowedMimeTypes.includes(file.type)) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageData = reader.result as string;
    };
    reader.readAsDataURL(file);
   }
 
}
 

SubmitUserInfo(){
  this.loading=true;

 return this.authService.PostUserInfo( this.userForm.value)
 
 .subscribe(
 Response => {
  // $('.file-upload').val('');
  this.loading=false;
    this.getUserList();
    this.userForm.reset();
   }
 ,error => {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 422) {
        this.loading=false;

      }
    }
   })


}

getUserList(){
  return this.authService.getUserInfo()
  .subscribe(data=>{
    this.UserList=data;
  })
}

deleteUser(id:number){
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
  this.authService.deleteUser(id)
      .subscribe(data=>{
       this.getUserList();
      })
 
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success',
        
      )
    }
  })

}

  
getUserbyid(id:number){
  this.authService.getUserbyId(id)
  .subscribe(data=>{
this.editUser(data)
this.imageData=data.image;
  })
}

editUser(user:User){
this.EditUserForm.patchValue({
  id:user.id,
  username:user.username,
  email:user.email,
  phone:user.phone,
  position:user.position,
  password:user.password,
  cpassword:user.password,
  // image:partner.image
})
}

clearform(){
  this.imageData="";
  this.EditUserForm.reset();
  this.userForm.reset();
  // $('.file-upload').val('');

}


UpdateUser(){
  // const UpdatedData={
  //   username:this.EditUserForm.controls.username.value,
  //     email:this.EditUserForm.controls.email.value,
  //     phone:this.EditUserForm.controls.phone.value,
  //     image:this.EditUserForm.controls.image.value,
  //     position:this.EditUserForm.controls.position.value

  //   }

  this.authService.updateUser(this.EditUserForm.value.id,this.EditUserForm.value).subscribe(data=>{
  //  console.log(data)
    this.EditUserForm.reset()
    this.imageData='';
      this.getUserList();
   })
 
 }


}
