import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, EmailValidator } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  public messageObj: object = {};
  public formSubmitted:boolean = false;
  constructor(private msgervice:MessageService) { }

  sendMessages(messageForm){
    this.formSubmitted = true;
    if(messageForm.status !="INVALID"){
      this.msgervice.sendMessages(this.messageObj).subscribe(res => {
        
      });
    }
  }


  ngOnInit() {
  }

}
