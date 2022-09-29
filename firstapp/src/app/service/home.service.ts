import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { ICity } from "../model/location.model";
import { IRest } from "../model/rest.model";
import { Imeal } from "../model/meal.model";

@Injectable ()
  
export class homeService{
    private baseUrl= "https://zomatoajulypi.herokuapp.com"

    constructor(private http: HttpClient){}

    getCity():Observable<ICity[]>{
        return this.http.get<ICity[]>(`${this.baseUrl}/location`)
    }
    getRest(stateId:number):Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.baseUrl}/restaurant?stateId=${stateId}`)
    }
    getMeal():Observable<Imeal[]>{
        return this.http.get<Imeal[]>(`${this.baseUrl}/quicksearch`)
    }
}