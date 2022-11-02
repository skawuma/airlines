import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : Registration= new Registration();
  users: any;
  ack:any;
  constructor(private signupService:RegistrationService,private router: Router) { }
 
 
 
  ngOnInit(): void {
    this.ack = "Add record please";
  }
 //  we need to write the logic here to bind the data which is comming from the form.
 // also we need to write the logic to connect with registration service once data is ready.
 
 profileForm = new FormGroup({
 
  id: new FormControl('', [Validators.required, Validators.minLength(4)]),
  name: new FormControl('', [Validators.required,Validators.minLength(4)]),
  dept: new FormControl('', [Validators.required]),
  salary: new FormControl('', [Validators.required]),
 
 });
 
 
 get f(){
  return this.profileForm.controls;
 }
 
 
 submit() {
 
  //console.log('Name:' + this.somedata.name);
  //console.log('Series:' + this.somedata.series);
 
  this.user.id=this.f['id'].value;         //Angular
  this.user.name=this.f['name'].value;
  this.user.dept=this.f['dept'].value;
  this.user.salary=this.f['salary'].value;
 
 console.log("Amit",this.user.name);
 
  console.log(this.profileForm.value)
  //Post Operationwill be executed here
  if(this.user.name!='' && this.user.name!=null && this.user.name.length>=4){
  this.addUser();
  this.router.navigate(['/home']);
  }
  //this.signupService.createuserlist(this.user)
  //Here logic will be there Develop your application can add logic here to call API Hit
 
 }
  addUser() {
    this.signupService.createuserlist(this.user).subscribe(data => console.log(data),error=>console.log(error));
    this.user = new Employee();
//in htmfile with the help of interpolation {{}}data can be populated from TS file of the same component
 this.ack= "Record added successfully";

 
  }
 
}