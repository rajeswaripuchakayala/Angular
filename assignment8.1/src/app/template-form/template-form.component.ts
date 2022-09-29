import { Component } from "@angular/core";

@Component({
    selector: 'app-templateform',
    templateUrl: 'template-form.component.html',
    styleUrls: ['template-form.component.css']
})
export class templateformComponent{

    onSubmit(value:any){
        console.log(value);
    }
}