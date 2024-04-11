import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from './child.component';

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
  imports: [RouterOutlet, FormsModule, ChildComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
     
  @ViewChild("nameText", {static: false})
  nameParagraph: ElementRef|undefined;
    
  name = "Tom";
    
  change() {
      if(this.nameParagraph!==undefined){
          console.log(this.nameParagraph.nativeElement.textContent); 
          this.nameParagraph.nativeElement.textContent = "hell";
      }
  }
  
  // constructor(){ console.log("constructor"); }
  // ngOnInit() { console.log("onInit"); }
  // ngOnDestroy() { console.log("onDestroy"); }



  // clicks  = 0;
  //   onChanged(increased:boolean){
  //       increased?this.clicks++:this.clicks--;
  //   }
  // items = [new Item(1, "Tom"), new Item(2, "Bob"), new Item(3,"Sam")];
  // name = "Tom";
  title = 'helloapp';
  // name= "";
  age = 25;
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
