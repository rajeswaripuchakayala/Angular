import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { contactComponent } from "./contact/contact.component";
import { homeComponent } from "./home/home.component";
import { productComponent } from "./product/product.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations:[
        AppComponent,
        contactComponent,
        productComponent,
        homeComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule{}