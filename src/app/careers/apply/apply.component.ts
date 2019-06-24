import { Component, OnInit, ViewChild } from '@angular/core';
import { Career } from 'src/app/career';
import { CareerService } from 'src/app/career.service';
import { NgForm } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  @ViewChild('f') careerForm: NgForm;
  showMsg = false;
  careerData = {
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Program: '',
    Course: ''
  }
  fee = "";
  duration = "";
  showCourseDetail = false;
  careerModel = new Career("", "", "", "", "", "");
  careerSubmit = false;
  careerName = "";
  constructor(private careerService: CareerService) { }

  courseSelect() {
    if (this.careerModel.Course == 'java') {
      this.fee = 'Rs 3000'; this.duration = '5 to 6 weeks'; this.showCourseDetail = true; this.careerName = "Core Java/Python/C#";
    }
    if (this.careerModel.Course == 'jsp') {
      this.fee = 'Rs 5000'; this.duration = '6 to 7 weeks'; this.showCourseDetail = true; this.careerName = "Advance Java(J2EE,JSP, Servlet, JDBC)";
    }
    if (this.careerModel.Course == 'android') {
      this.fee = 'Rs 6000'; this.duration = '6 to 8 weeks'; this.showCourseDetail = true; this.careerName = "Android(with basics of Core Java/Kotlin)";
    }
    if (this.careerModel.Course == 'bigdata') {
      this.fee = 'Rs 6000'; this.duration = '6 to 8 weeks'; this.showCourseDetail = true; this.careerName = "Big Data/No Sql";
    }
    if (this.careerModel.Course == 'spring') {
      this.fee = 'Rs 5500'; this.duration = '7 to 8 weeks'; this.showCourseDetail = true; this.careerName = "Spring Framework(MVC, Security, Boot)";
    }
    if (this.careerModel.Course == 'hibernate') {
      this.fee = 'Rs 6000'; this.duration = '8 to 9 weeks'; this.showCourseDetail = true; this.careerName = "Spring wth Hibernate";
    }
    if (this.careerModel.Course == 'dotnet') {
      this.fee = 'Rs 5000'; this.duration = '7 to 8 weeks'; this.showCourseDetail = true; this.careerName = "ASP.NET (MVC, Entity Framework, ADO, Core 2.1)";
    }
    if (this.careerModel.Course == 'angular') {
      this.fee = 'Rs 6000'; this.duration = '7 to 8 weeks'; this.showCourseDetail = true; this.careerName = "Angular 7(2+)/React/Vue Js";
    }
    if (this.careerModel.Course == 'fullstack') {
      this.fee = 'Rs 10000'; this.duration = '10 to 12 weeks'; this.showCourseDetail = true; this.careerName = "Full Stack Web Development";
    }
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(this.careerModel);
    this.careerService.careerDetails(this.careerModel)
      .subscribe(
        (response) => {
          console.log("success", response);
          this.showMsg = true;
        },
        (error) => console.log("error", error)
      );
    console.log(this.careerForm.value);
    console.log(this.careerModel);
    this.careerSubmit = true;
    this.careerData.FirstName = this.careerForm.value.careerData.firstname;
    this.careerData.LastName = this.careerForm.value.careerData.lastName;
    this.careerData.Email = this.careerForm.value.careerData.email;
    this.careerData.Phone = this.careerForm.value.careerData.phone;
    this.careerData.Program = this.careerForm.value.careerData.program;
    this.careerData.Course = this.careerForm.value.careerData.course;
    this.careerForm.reset();
    console.log(this.careerModel);
  }

}
