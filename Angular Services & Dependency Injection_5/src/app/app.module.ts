import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NewEmployeeComponent } from "./newemployee/newemployee.component";
import { EmployeeService } from "./service/employee.service";
@NgModule({
    declarations:[
        AppComponent,
        NewEmployeeComponent
        
    ],
    imports:[
        BrowserModule,
        HttpClientModule
    ],
    providers:[
        EmployeeService
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}