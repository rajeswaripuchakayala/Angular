import { Component } from "@angular/core";
import { EmpDetails } from "./employee";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    showEdit: boolean = false;
    empdata: any[] = [
        {
            "Employee_ID": 1,
            "First_Name": "Rajeswari",
            "Last_Name": "Puchakayala",
            "Salary": "50000",
            "DOB": "May 4th, 1993",
            "Email": "rajeswarip@visheshcountrycache.com", 
            "Action": " ",
        
        },
        
        {
            "Employee_ID": 2,
            "First_Name": "Rajeswari",
            "Last_Name": "Kandregula",
            "Salary": "45000",
            "DOB": "May 5th, 1986",
            "Email": "rajeswarik@visheshcountrycache.com", 
            "Action": " "
        },
        {
            "Employee_ID": 3,
            "First_Name": "Manasa",
            "Last_Name": "Chitturi",
            "Salary": "25000",
            "DOB": "November 12th, 1993",
            "Email": "manasach@visheshcountrycache.com", 
            "Action": " "
        },
        {
            "Employee_ID": 4,
            "First_Name": "Jhansi",
            "Last_Name": "Tammineedi",
            "Salary": "32000",
            "DOB": "August 15th, 1984",
            "Email": "jhansit@visheshcountrycache.com", 
            "Action": " "
        }
      
    ]
    EditEmp(item:any){
        this.empdata.forEach(element => {
           element.showEdit = false; 
        }); 
        item.showEdit=true;
        //console.log("Editemp method working properly and show edit value set to: "+this.showEdit);
        
        
    }
    UpdateEmp(item:any){
        item.showEdit=false;
    }


    
    
    
}
