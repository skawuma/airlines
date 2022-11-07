import { Component, OnInit } from '@angular/core';
import { Payroll } from '../payroll';
import { PayrollService } from '../payroll.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  

  
  //Service must be triggered by Component (Home or About.
//Trigger will happen from here
ngOnInit(): void {
  this.isLoggedIn =true;
}
user : Payroll= new Payroll();
users: any;
  deleteMessge: any;

constructor(private signupService:PayrollService) { }
  
// ngOnInit(): void {
//   throw new Error('Method not implemented.');
// }


readUser() {  
this.signupService.getuserList()
  .subscribe(data=>
    {this.users=data},error=>console.log(error)) ;

}

deleteUser(payId: number) {
  this.signupService.deleteuserList(payId)
    .subscribe(
      (      data: any) => {
        console.log(data);
        this.deleteMessge=true;
        this.signupService.getuserList().subscribe(data =>{
          this.users =data
          })
      },
      (      error: any) => console.log(error));
 }
 isLoggedIn =true;
}


