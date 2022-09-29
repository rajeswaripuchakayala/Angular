import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { contactComponent } from "./contact/contact.component";
import { homeComponent } from "./home/home.component";
import { productComponent } from "./product/product.component";
import { AppRoutingModule } from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http"
import { errorComponent } from "./error/error.component";
import { detailsComponent } from "./details/details.component";

@NgModule({
    declarations:[
        AppComponent,
        contactComponent,
        productComponent,
        homeComponent,
        errorComponent,
        detailsComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule{}