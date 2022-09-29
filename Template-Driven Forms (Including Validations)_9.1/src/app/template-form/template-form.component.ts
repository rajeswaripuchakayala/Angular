import { Component } from "@angular/core";

@Component({
    selector: 'app-templateform',
    templateUrl: 'template-form.component.html',
    styleUrls: ['template-form.component.css']
})

export class templateformComponent{
    mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
    namePattern = "[a-zA-Z]+$";
    submitForm(value:any){
        console.log(value);
    }
}