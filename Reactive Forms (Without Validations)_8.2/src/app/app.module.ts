import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppReactiveForm } from "./reactive-form/reactive-form.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        AppComponent,
        AppReactiveForm
    ],
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers:[],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}