import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl:'./app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
    empdata: any[] = [
        {
            "Employee_ID": 2,
            "First_Name": "John",
            "Last_Name": "Smith",
            "Salary": "10000",
            "DOB": "Nov 02, 1983",
            "Email": "john@abc.com"
        },
        
        {
            "Employee_ID": 3,
            "First_Name": "Jason",
            "Last_Name": "Smith",
            "Salary": "12000",
            "DOB": "Aug 12, 1980",
            "Email": "jason@abc.com" 
        },
        {
            "Employee_ID": 4,
            "First_Name": "Amber",
            "Last_Name": "Dorothy",
            "Salary": "10000",
            "DOB": "Apr 05, 1985",
            "Email":"amber@abc.com" 
        },
        {
            "Employee_ID": 5,
            "First_Name": "Mark",
            "Last_Name": "Frank",
            "Salary": "15000",
            "DOB": "Jun 10, 1982",
            "Email":"mark@abc.com"
        }
    ]
}