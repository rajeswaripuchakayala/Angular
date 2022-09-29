import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector:'app-listing',
    templateUrl:'./listing.component.html',
    styleUrls: ['./listing.component.css']

})

export class ListingComponent implements OnInit{
    mealId: number = 1;  
    userInput: string = ' ';
   
    constructor(private route: ActivatedRoute){}  
    ngOnInit(): void {
       this.mealId = Number(this.route.snapshot.params['id']) 
       sessionStorage.setItem('mealId',this.mealId.toString())
    }
}