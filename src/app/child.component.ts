import { Input, Component, EventEmitter, Output, OnInit, SimpleChanges, DoCheck,
    OnChanges,
   AfterContentInit, 
   AfterContentChecked, 
   AfterViewChecked, 
   AfterViewInit } from "@angular/core";
import { FormsModule } from '@angular/forms';


      
@Component({
    selector: 'child-comp',
    standalone: true,
    imports: [FormsModule],
    template: `<ng-content></ng-content>
    <h2>Hello fromWW {{name}}!</h2>
    <p>Имя пользователя: {{userName}}</p>
    <p>Возраст пользователя: {{userAge}}</p>

    <button (click)="change(true)">+</button>
    <button (click)="change(false)">-</button>

    <input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />

    <p>Привет {{name}}</p>

    <p>{{counter}}</p>
    `,

    styles: [`h2{color:navy;}`]
})
export class ChildComponent   {

    counter  = 0;
    increment() { this.counter++; }
    decrement() { this.counter--; }

    
    name= "ChildComponent";
    @Input() userName: string = "";
    // @Input() userAge: number = 44;

    // constructor(){ console.log("constructor"); }
    // ngOnInit() { console.log("onInit"); }
      
    // ngOnChanges(changes: SimpleChanges) {
    //   for (let propName in changes) {
    //     let chng = changes[propName];
    //     let cur  = JSON.stringify(chng.currentValue);
    //     let prev = JSON.stringify(chng.previousValue);
    //     console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    //   }
    // }

    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){
         
        this.userName = model;
        this.userNameChange.emit(model);
    }

    _userAge: number = 0;
      
    @Input()
    set userAge(age:number) {
        if(age<0)
            this._userAge=0;
        else if(age>100)
            this._userAge=100;
        else
            this._userAge = age;
  }
  get userAge() { return this._userAge; }


  @Output() onChanged = new EventEmitter<boolean>();
    change(increased:boolean) {
        this.onChanged.emit(increased);
        
    }

}