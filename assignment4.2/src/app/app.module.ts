import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { MyUpperPipe } from "./pipes/myupper.pipe";


@NgModule({
    declarations:[
        AppComponent,
        MyUpperPipe
    ],
    imports:[
        BrowserModule
    ],
    providers:[],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}