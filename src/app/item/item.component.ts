import { Component } from '@angular/core';
import { ActivatedRoute, Params, RouterOutlet } from '@angular/router';
// import {Subscription } from "rxjs";
import { Observable } from "rxjs";


@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  id:number|undefined;
     
    constructor(private route: ActivatedRoute){
         
        route.params.subscribe(params=>this.id=params["id"]);
    }

  // id:number|undefined;
  //   product:string|undefined;
  //   price:number|undefined;
 
  //   constructor(private route: ActivatedRoute){
          
  //       // отслеживаем изменение параметра id
  //       route.params.subscribe(params=>this.id=params["id"]);
  //       // отслеживаем изменение параметров строки запроса
  //       route.queryParams.subscribe(
  //           // (queryParam: Observable<Params>) => {
  //           //     this.product = queryParam["product"];
  //           //     this.price = queryParam["price"];
  //           // }
  //       );
  //   }
  }


