import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') contactusForm:NgForm;
  showMsg=false;
  contactusData={
    FirstName:'',
    LastName:'',
    Email:'',
    Phone:'',
    Message:''
  }
  contactModel= new Contact("","","","","");
  contactSubmit=false;
  constructor(private contactService:ContactService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    console.log(this.contactModel);
    this.contactService.contactDetails(this.contactModel)
    .subscribe(
      (response)=> {console.log("success", response);
      this.showMsg=true;},
      (error)=> console.log("error", error)
    );
    console.log(this.contactusForm);
    console.log(this.contactModel);
    this.contactSubmit=true;
    this.contactusData.FirstName=this.contactusForm.value.contactData.firstName;
    this.contactusData.LastName=this.contactusForm.value.contactData.lastName;
    this.contactusData.Email=this.contactusForm.value.contactData.email;
    this.contactusData.Phone=this.contactusForm.value.contactData.number;
    this.contactusData.Message=this.contactusForm.value.contactData.message;
    this.contactusForm.reset();
  }
  onGet(){
    this.contactService.getContact()
    .subscribe(
      (response)=> console.log("success", response),
      (error)=> console.log("error", error)
    );
  }

}

