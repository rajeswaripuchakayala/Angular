import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})


export class productComponent implements OnInit{

    productsDetails: any = [];
    index:number | undefined;
    
    constructor(private http: HttpClient, private router: Router){}

    ngOnInit(): void {
        this.http.get("assets/product.json").subscribe((data)=>{
         this.productsDetails= data;
        })
    
    }
    productDetails(index:number){
        this.router.navigate(['/details/' +index]);
        

        //console.log("name:" +this.productsDetails[index-1].name)
       // console.log("description:" +this.productsDetails[index-1].description);
        //console.log("price:" +this.productsDetails[index-1].price)
        //console.log("image" +this.productsDetails[index-1].imageUrl)
    }
    
}