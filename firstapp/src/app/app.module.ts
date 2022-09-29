import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/footer/footer.component';
import { HeaderComponent } from 'src/header/header.component';
import { HomeComponent } from 'src/home/home.component';
import { QuicksearchComponent } from 'src/home/quicksearch.component';
import { SearchComponent } from 'src/home/search.component';
import {AppComponent} from './app.component';
import { MyUpperPipe } from './pipes/myupper.pipe';
import { HttpClientModule } from '@angular/common/http';
import { homeService } from './service/home.service';
import { AppRoutingModule } from './app-routing.module';
import { notFoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { ListingComponent } from './listing/listing.component';


//decorator
@NgModule({
    //all the component and pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SearchComponent,
        QuicksearchComponent,
        MyUpperPipe,
        notFoundComponent,
        ListingComponent  
    ],

    //all the modules
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],

    //all the services
    providers: [
        homeService
    ],

    //only and only main components
    bootstrap: [
        AppComponent
    ]
})

export class AppModule{}