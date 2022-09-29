import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
  
})

export class contactComponent{

    constructor (private route: ActivatedRoute) {}
}