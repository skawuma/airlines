import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  //Service must be triggered by Component (Home or About.
//Trigger will happen from here

user : Employee= new Employee();
users: any;
  deleteMessge: any;

constructor(private signupService:EmployeeService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



readUser() {  
this.signupService.getuserList()
  .subscribe(data=>
    {this.users=data},error=>console.log(error)) ;

}

deleteUser(id: number) {
  this.signupService.deleteuserList(id)
    .subscribe(
      (      data: any) => {
        console.log(data);
        this.deleteMessge=true;
        this.signupService.getuserList().subscribe(data =>{
          this.users =data
          })
      },
      (      error: any) => console.log(error));

      /// user  or data you need to write some logic to iterate 
      // and  match with your credentials
 }
 

 

}
