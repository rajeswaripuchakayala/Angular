import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { empList } from '../model/employee2'

@Injectable({
    providedIn: 'root'
})
 export class EmployeeService{

    private empUrl = "https://dummy.restapiexample.com/api/v1/employees";

    constructor( private http: HttpClient){}

    getEmp() : Observable<any[]>{
        return this.http.get<any[]>(`${this.empUrl}`)
        //var x = this.http.get<empList[]>(`${this.empUrl}`)
        //return x;
    }

 }
