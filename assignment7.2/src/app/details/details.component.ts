import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
   
    styleUrls: ['./details.component.css']
})

export class detailsComponent implements OnInit{
    
    productsDetails: any = [];
    name:any;
    des:any;
    price:any;
    image:any;

   constructor(private http: HttpClient, private route:ActivatedRoute, private router: Router){}

   ngOnInit(): void {
        const id = this.route.snapshot.params['index']
        this.http.get("assets/product.json").subscribe((data)=>{
        this.productsDetails= data;
        this.name= this.productsDetails[id-1].name;
        //console.log("name:"+ name)
        this.des= this.productsDetails[id-1].description;
        this.price = this.productsDetails[id-1].price;
        this.image = this.productsDetails[id-1].imageUrl;
       });
       
   }
   gotoProduct(){
    this.router.navigate(['/product']);
    }
  
}

