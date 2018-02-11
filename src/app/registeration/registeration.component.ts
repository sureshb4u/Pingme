import { Component, OnInit } from '@angular/core';
import {ApiConfigService} from '../api-config.service';
import { FormsModule, ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  public registerationObj: object = {};
  public formSubmitted:boolean = false;
  public validateEmail:boolean = false;
  constructor(private config:ApiConfigService) { }

  registerUser(registerationObj){
    this.formSubmitted = true;
    if(registerationObj.status !="INVALID"){
        
    }
  }

  validateMail(mailId){
    if(mailId){
      this.validateEmail = true;
    }else{
      this.validateEmail = false;
    }
  }
  ngOnInit() {
    
  }

}
