import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
@Component({
    selector: 'app-reactive-form',
    templateUrl: 'reactive-form.component.html',
    styleUrls: ['reactive-form.component.css']
})

export class AppReactiveForm implements OnInit{

    registerForm: FormGroup;
    constructor(private formBuilder: FormBuilder){
        this.registerForm = formBuilder.group({
            name: new FormControl(),
            email: new FormControl(),
            address: new FormControl(),
            city: new FormControl(),
            phoneno: new FormControl(),
            password: new FormControl(),
            confirmpassword: new FormControl()
        });   
    }
    ngOnInit(): void {  
    }
    postData(){
        console.log(this.registerForm.value)
    }
}