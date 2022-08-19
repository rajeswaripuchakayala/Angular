import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/footer/footer.component';
import { HeaderComponent } from 'src/header/header.component';
import {AppComponent} from './app.component';


//decorator
@NgModule({
    //all the component and pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],

    //all the modules
    imports: [
        BrowserModule
    ],

    //all the services
    providers: [],

    //only and only main components
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{}