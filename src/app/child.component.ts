import { Input, Component, EventEmitter, Output } from "@angular/core";
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
    `,

    styles: [`h2{color:navy;}`]
})
export class ChildComponent {
    name= "ChildComponent";
    @Input() userName: string = "";
    // @Input() userAge: number = 44;

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