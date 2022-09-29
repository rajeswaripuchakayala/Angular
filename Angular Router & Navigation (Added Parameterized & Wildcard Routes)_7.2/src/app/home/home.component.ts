import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class homeComponent{

    constructor(private route: ActivatedRoute){}
}