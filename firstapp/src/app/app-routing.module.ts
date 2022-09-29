import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "src/home/home.component";
import { ListingComponent } from "./listing/listing.component";
import { notFoundComponent } from "./notfound/notfound.component";

const routes: Routes=[
    { path: 'listing/:id', component: ListingComponent},
    { path: 'home', component: HomeComponent},
    { path: '', component: HomeComponent},
    { path: '**', pathMatch:'full', component: notFoundComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    providers: [],
    exports: [RouterModule]
})

export class AppRoutingModule{}