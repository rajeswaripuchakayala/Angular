import { Component } from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent{
    course="Angular Certification Training";
    userInput: string = '';
    products: any[] = [
        {
            "name": "Devops Certification",
            "price": 30000
        },
        {
            "name": "AWS Architect",
            "price": 19000
        },
        {
            "name":"React Certification",
            "price": 25000
        },
        {
            "name": "Angular Certification",
            "price": 35000
        }
    ]

    courses: any[] = [
        {
            "name": "AWS Architect",
            "category": "Cloud Computing"
        },
        {
            "name":"React Certification",
            "category": "Front-end Development"
        },
        {
            "name": "Angular Certification",
            "category": "Front-end Development"
        },
        {
            "name": "Big Data Hadoop"
        }
    ]
}