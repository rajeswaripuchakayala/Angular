import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Imeal } from "src/app/model/meal.model";
import { homeService } from "src/app/service/home.service";
@Component({
    selector: 'app-quick',
    templateUrl: './quicksearch.component.html',
    styleUrls: ['./quicksearch.component.css']
})

export class QuicksearchComponent implements OnInit{
    imgUrl: String = '../../assets/images/chatkaz.jpg';
    mealType: Imeal[] = []
    constructor(private homeService: homeService){
        console.log("I'm in constructorI")
    }
    ngOnInit(): void {
        console.log("I'm in ngOnInit");
        this.homeService.getMeal()
        .subscribe((data: Imeal[])=>this.mealType=data)
    }
    /*mealType: Imeal[] = [
        {
            "_id": "6187761a62a1816f88593a4a",
            "mealtype_id": 2,
            "mealtype": "Lunch",
            "content": "Start your day with exclusive breakfast options",
            "meal_image": "https://i.ibb.co/8rPxkWP/lunch.jpg"
        },
        {
            "_id": "6187761a62a1816f88593a4b",
            "mealtype_id": 3,
            "mealtype": "Dinner",
            "content": "Start your day with exclusive breakfast options",
            "meal_image": "https://i.ibb.co/XjzPqYv/dinner.jpg"
        },
        {
            "_id": "6187761a62a1816f88593a4e",
            "mealtype_id": 6,
            "mealtype": "NightLife",
            "content": "Start your day with exclusive breakfast options",
            "meal_image": "https://i.ibb.co/q1fC2jW/nightlife.jpg"
        },
        {
            "_id": "6187761a62a1816f88593a4c",
            "mealtype_id": 4,
            "mealtype": "Snacks",
            "content": "Start your day with exclusive breakfast options",
            "meal_image": "https://i.ibb.co/wchCHfb/snacks.jpg"
        },
        {
            "_id": "6187761a62a1816f88593a4d",
            "mealtype_id": 5,
            "mealtype": "Drinks",
            "content": "Start your day with exclusive breakfast options",
            "meal_image": "https://i.ibb.co/YR0S6fV/drinks.jpg"
        },
        {
            "_id": "6187761a62a1816f88593a49",
            "mealtype_id": 1,
            "mealtype": "Breakfast",
            "content": "Start your day with exclusive breakfast options",
            "meal_image": "https://i.ibb.co/FVhSTWK/breakfast.jpg"
        }
    ]
    */
}