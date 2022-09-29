import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { templateformComponent } from "./template-form/template-form.component";
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations: [
        AppComponent,
        templateformComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}