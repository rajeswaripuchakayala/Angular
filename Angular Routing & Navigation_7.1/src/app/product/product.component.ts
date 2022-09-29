import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class productComponent{

    constructor (private route: ActivatedRoute) {}
}