import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { Login } from '../login';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : Login= new Login();
  users: any;
  ack:any;
  loginack: any;
  constructor(private signupService:LoginService,private router: Router) { }
 
 
 
  ngOnInit(): void {
    this.ack = "Fill In the Reqired Credentials";
    this.loginack ="Fill In the Reqired Credentials";
  }
 //  we need to write the logic here to bind the data which is comming from the form.
 // also we need to write the logic to connect with registration service once data is ready.
 
 profileForm = new FormGroup({
 
  id: new FormControl('', [Validators.required, Validators.minLength(4)]),
  name: new FormControl('', [Validators.required,Validators.minLength(4)]),
  
 
 });
 
 
 get f(){
  return this.profileForm.controls;
 }
 
 
 login() {

  this.user.id=this.f['id'].value;         //Angular
  this.user.name=this.f['name'].value;

  console.log("sam",this.user.id);
 console.log("sam",this.user.name);
   console.log(this.profileForm.value)
  //Post Operationwill be executed here
  //if(this.user.id!='' && this.user.dept!=null){
  //this.addUser();
  //here we need to wirte business logic to match the record enter the data which is coming from database
  this.signupService.getuserList()
  .subscribe(data=>
    {this.users=data;
    console.log(this.users)
    for(let i=0; i<data.length; i++){
      console.log(this.users[i].id); //use i instead of 0
      if(this.user.id == this.users[i].id && this.user.name == this.users[i].name){
        this.loginack = "Record added successfully";
    this.router.navigate(['/home']);
    break;
      }else{
        this.router.navigate(['']);
      }
  }
    },error=>console.log(error)) ; 
    //now the database record is in the users and data
    //here we have to make the match between this.user.id, this.user.dept with the record coming from the db.
 
 

 
  //}

 }


 /** 
  addUser() {
    this.signupService.createuserlist(this.user).subscribe(data => console.log(data),error=>console.log(error));
    this.user = new Employee();
//in htmfile with the help of interpolation {{}}data can be populated from TS file of the same component
 this.ack= "Record added successfully";
**/
 isLoggedIn =true;
  }

  
    
 











 
