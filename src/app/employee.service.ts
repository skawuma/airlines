import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
// inside we gonn a write all the business logic to connect with the rest of the api
// we will require some support from the entity class
//require support from enttity class
//EntityServiceComponent,".ts"."html"


private baseUrl = 'http://localhost:8090';
 

  constructor(private http:HttpClient) { }

  //connect to the server and get the data from the server  object
  //CRUD service
  //connect point to the server and UI

  //we need to define method to post the data
  //Post the data to the server

  createuserlist(user: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}` + '/adduser', user);
  }

  //Read Operation
  getuserList(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + '/api/employee/getemployee');  //will change

  }

// we nedd to create method in order  to delete operation
// insisde the method we  need to make the  aaragemnt to call rest ApI and delete
///deleteemployee/{id}
deleteuserList(id: number): Observable<any> {

  return this.http.delete(`${this.baseUrl}` + `/api/employee/deleteemployee/`+ `${id}`, {responseType: 'text'});  //will change

}


}
