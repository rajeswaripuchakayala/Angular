import { Component, OnInit } from "@angular/core";
import { empList } from "../model/employee2";
import { EmployeeService } from "../service/employee.service";

@Component({
    selector: 'new-employee',
    templateUrl: 'newemployee.component.html',
    styleUrls: ['newemployee.component.css']
})
 export class NewEmployeeComponent implements OnInit{
    public newemployees: empList[] = []

    constructor(private employeeservice: EmployeeService){}
    ngOnInit(): void {
        this.employeeservice.getEmp()
        .subscribe((data:empList[]) => this.newemployees = data);
    };
  
 }