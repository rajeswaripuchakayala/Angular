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
            "DOB": "Wed Nov 02 1983 00:00:00 GMT+0530 (India Standard Time)",
            "Email": "john@abc.com"
        },
        
        {
            "Employee_ID": 3,
            "First_Name": "Jason",
            "Last_Name": "Smith",
            "Salary": "12000",
            "DOB": " Tue Aug 12 1980 00:00:00 GMT+0530 (India Standard Time)",
            "Email": "jason@abc.com" 
        },
        {
            "Employee_ID": 4,
            "First_Name": "Amber",
            "Last_Name": "Dorothy",
            "Salary": "10000",
            "DOB": "Fri Apr 05 1985 00:00:00 GMT+0530 (India Standard Time)",
            "Email":"amber@abc.com" 
        },
        {
            "Employee_ID": 5,
            "First_Name": "Mark",
            "Last_Name": "Frank",
            "Salary": "15000",
            "DOB": "Thu Jun 10 1982 00:00:00 GMT+0530 (India Standard Time)",
            "Email":"mark@abc.com"
        }
    ]
}