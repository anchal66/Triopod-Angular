import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService{
    constructor(private http: HttpClient){}
    url='';
    contactDetails(contact:Contact){
        console.log(contact);
        return this.http.post<any>(this.url,contact);
    }
    getContact(){
        return this.http.get(this.url);
    }
}