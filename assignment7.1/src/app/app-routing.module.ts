import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router'
import { AppComponent } from "./app.component";
import { contactComponent } from "./contact/contact.component";
import { homeComponent } from "./home/home.component";
import { productComponent } from "./product/product.component";


const routes: Routes=[
    { path: '', redirectTo: '', pathMatch:'full'},
    { path: 'home', component: homeComponent},
    { path: 'product', component: productComponent},
    { path: 'contact', component: contactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]

})

export class AppRoutingModule{}