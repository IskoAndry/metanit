import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormsModule, NgModel, NgForm , FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import {ChildComponent} from './child.component';

import {NgClass} from "@angular/common";
import { BoldDirective} from "./bold.directive";

import {NgIf} from "@angular/common";
import {NgFor} from "@angular/common";
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {WhileDirective} from "./while.directive";

import {DataService} from "./data.service";
import {LogService} from "./log.service";

import { HttpClient, HttpClientModule} from "@angular/common/http";
import {User} from "./user";
import { HttpService} from "./http.service";
 
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

// class User{
//   constructor(public name: string, 
//               // public age: number, 
//               // public company: string,
//               public email: string,
//               public phone: string)
//   { }
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterLink , RouterLinkActive, RouterOutlet, HttpClientModule, ReactiveFormsModule, WhileDirective, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor, NgIf, BoldDirective, NgClass, RouterOutlet, FormsModule, ChildComponent,  ],
  providers: [HttpService, DataService, LogService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})


export class AppComponent  {

  // num1: number = 0;
  // num2: number = 0;
  // sum: number | undefined;
  // done: boolean = false;
  // constructor(private httpService: HttpService){}
  // submit(){
  //     this.httpService.getSum(this.num1, this.num2).subscribe({next:(data:any) => {
  //         this.sum=data.result; 
  //         this.done=true;
  //     }});
  // }

  // users: User[]=[];
      
  // constructor(private httpService: HttpService){}
     
  // ngOnInit(){
         
  //     this.httpService.getData().subscribe({next: (data: any) => this.users=data["userList"]});
  //     this.httpService.getUsers().subscribe({next:(data: User[]) => this.users=data});
  // }
//   ngOnInit(){
           
//     this.httpService.getUsers().subscribe({next:(data: User[]) => this.users=data});
// }
  
     
 

  //========================== form
  // myForm : FormGroup;
	// constructor(){
	// 	this.myForm = new FormGroup({
			
	// 		"userName": new FormControl("Tom", [Validators.required, this.userNameValidator]),
	// 		"userEmail": new FormControl("", [
	// 							Validators.required, 
	// 							Validators.email
	// 						]),
	// 		"userPhone": new FormControl()
	// 	});
	// }
  //   submit(){
  //       console.log(this.myForm);
  //   }
	// // валидатор
	// userNameValidator(control: FormControl): {[s:string]:boolean}|null{
		
	// 	if(control.value==="нет"){
	// 		return {"userName": true};
	// 	}
	// 	return null;
	// }
  //================================
  // name: string = "";
  // email: string = "";
  // phone: string = "";
     
  // submit(form: NgForm){
  //   console.log(form);
  // }


  // myForm : FormGroup = new FormGroup({
			
  //   "userName": new FormControl("Tom", Validators.required),
  //   "userEmail": new FormControl("", [
  //         Validators.required, 
  //         Validators.email
  //   ]),
  //   "userPhone": new FormControl("", Validators.pattern("[0-9]{10}")) 
  // });


  // user: User = new User("", "", "");
  //   addUser(){
  //       console.log(this.user);
  //   }

 // user = new User("", 18, "")
      
  //   users: User[] = [];
  //   companies: string[] = ["Apple", "Microsoft", "Google", "Jetbrains"];
      
  //   logUser(name: NgModel, age: NgModel, company: NgModel){
  //       console.log(name);
  //       console.log(age);
  //       console.log(company);
  //   }

  //   onNameChange(){
  //     if(this.user.name=="admin")
  //         this.user.name = "Undefined";
  // }

  // newUser = new User("", 18, "Google")
      
  //   users: User[] = [];
  //   companies: string[] = ["Apple", "Microsoft", "Google", "Jetbrains"];
      
  //   addUser(){
  //       this.users.push({...this.newUser});
  //   }

  // name: string = "";
  // age: number = 18;
  // company: string = "";
    
  // users: User[] = [];
  // companies: string[] = ["Apple", "Microsoft", "Google", "Jetbrains"];
    
  // addUser(){
  //     this.users.push(new User(this.name, this.age, this.company));
  // }


  //======================== ser
  // items: string[] = [];
  // name: string = "";
  // constructor(private dataService: DataService){}
     
  // addItem(name: string){
         
  //     this.dataService.addData(name);
  // }
  // ngOnInit(){
  //     this.items = this.dataService.getData();
  // }

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
