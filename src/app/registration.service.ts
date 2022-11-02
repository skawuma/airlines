import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8090';
 

  constructor(private http:HttpClient) { }

  

  createuserlist(user: object): Observable<object> {
    console.log("success");
    return this.http.post(`${this.baseUrl}` + '/api/employee/addemployee', user);
  }

  //Read Operation
  getuserList(): Observable<any> {

    return this.http.get(`${this.baseUrl}` + '/api/employee/getemployee');  //will change

  }


deleteuserList(id: number): Observable<any> {

  return this.http.delete(`${this.baseUrl}` + `/api/employee/deleteemployee/`+ `${id}`, {responseType: 'text'});  //will change

}

}
