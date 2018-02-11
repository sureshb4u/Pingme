import { Component,ElementRef,ViewChild } from '@angular/core';
import { Constants } from '../app.constants';
import { FormsModule, ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;  
  public invalidEmail: string = Constants.INVALID_EMAIL;
  public invalidPassword: string = Constants.INVALID_PASSWORD;
  public formSubmitted :boolean = false;
  public loginFailure :boolean = false;
  
  constructor(
   private fb: FormBuilder,
   private loginService: LoginService,
   private router: Router
 ) {
 this.loginForm = fb.group({
   'userName' : [null, Validators.required],
   'password' : [null, Validators.required],
 });
}

  submitForm(formObj){
    this.formSubmitted = true;
  }
  signInUser(formObj){
    if(formObj.status !="INVALID"){
      var data = {
        "userid":"",
        "password":""
      };
      data.userid=formObj.controls.userName.value;
      data.password=formObj.controls.password.value;
      //console.log('formObj.userName ---'+formObj.controls.userName.value+'  formObj.password'+formObj.controls.password.value);
       this.loginService.authenticate(data).subscribe(res => {
         if(res.code == "200 OK"){
          this.router.navigate(["/home"]);
         }else{
            this.loginFailure = true;
         }
       });
    }
    
  }

  registerUser(){
    this.router.navigate(["/register"]);
  }
}