import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, observable } from "rxjs";
import { empList } from '../model/employee2'

@Injectable({
    providedIn: 'root'
})
 export class EmployeeService{

    private empUrl = " ";

    constructor( private http: HttpClient){}

    getEmp() : Observable<empList[]>{
        return this.http.get<empList[]>(`${this.empUrl}`)
    }
 }
