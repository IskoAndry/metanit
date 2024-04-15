import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from './child.component';

import {NgClass} from "@angular/common";
import { BoldDirective} from "./bold.directive";

import {NgIf} from "@angular/common";
import {NgFor} from "@angular/common";
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {WhileDirective} from "./while.directive";

import {DataService} from "./data.service";
// class Item{
//   purchase: string;
//   done: boolean;
//   price: number;
      
//   constructor(purchase: string, price: number, ) {
//       this.purchase = purchase;
//       this.price = price;
//       this.done = false;
      
//   }
// }

// class Item{
//   constructor(public id: number, public name: string){}
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ WhileDirective, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor, NgIf, BoldDirective, NgClass, RouterOutlet, FormsModule, ChildComponent,  ],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent  {

  items: string[] = [];
  name: string = "";
  constructor(private dataService: DataService){}
     
  addItem(name: string){
         
      this.dataService.addData(name);
  }
  ngOnInit(){
      this.items = this.dataService.getData();
  }

  //================================
  // count = 4;

  // items =["Tom", "Bob", "Sam", "Bill"];

  // condition: boolean=true;
     
  //   toggle(){
  //       this.condition=!this.condition;
  //   }


//===================================
  // isVerdana = true;
  // isSegoe = true;

  // visibility: boolean = true;
  //   // переключаем переменную
  //   toggle(){
  //       this.visibility=!this.visibility;
  //   }
     
  // @ViewChild("nameText", {static: false})
  // nameParagraph: ElementRef|undefined;
    
  // name = "Tom";
    
  // change() {
  //     if(this.nameParagraph!==undefined){
  //         console.log(this.nameParagraph.nativeElement.textContent); 
  //         this.nameParagraph.nativeElement.textContent = "hell";
  //     }
  // }
  //================================
  // constructor(){ console.log("constructor"); }
  // ngOnInit() { console.log("onInit"); }
  // ngOnDestroy() { console.log("onDestroy"); }



  // clicks  = 0;
  //   onChanged(increased:boolean){
  //       increased?this.clicks++:this.clicks--;
  //   }
  // items = [new Item(1, "Tom"), new Item(2, "Bob"), new Item(3,"Sam")];
  // name = "Tom";
  // title = 'helloapp';
  // // name= "";
  // age = 25;
  // text_1="Hello Metanit.com";
  // num = 5;
  // age: number|undefined = undefined;

  // op = "-"; // символ операции  
  //   a = 10;
  //   b = 5;

  // es = ["Tom", "Bob", "Sam"];

//   count: number=0;
//   increase($event : any) : void {
//     this.count++;
//     console.log($event);
// }

// isRed = false;
  
    // text: string = "";
    // price: number = 0;
      
    // items: Item[] = 
    // [
    //     { purchase: "Хлеб", done: false, price: 15.9 },
    //     { purchase: "Масло", done: false, price: 60 },
    //     { purchase: "Картофель", done: true, price: 22.6 },
    //     { purchase: "Сыр", done: false, price:310 }
    // ];
    // addItem(text: string, price: number): void {
          
    //     if(text==null || text.trim()=="" || price==null)
    //         return;
    //     this.items.push(new Item(text, price));
    // }


}
