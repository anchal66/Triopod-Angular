import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Career } from './career';

@Injectable()
export class CareerService{
    constructor(private http: HttpClient){}
    url='';
    careerDetails(career:Career){
        return this.http.post<any>(this.url,career);
    }
    getCareer(){
        return this.http.get(this.url);
    }
}