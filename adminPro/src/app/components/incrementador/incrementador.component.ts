import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',

})
export class IncrementadorComponent  implements OnInit{

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }
  //@Input('otroNombre¡)  progress : number = 20; Forma de renombrar el input
  @Input('valor')  progress : number = 20;
  @Input()  btnClass : string = ' btn-primary'

  @Output('valor') changeVal : EventEmitter<number> = new EventEmitter();

  changeValue( val: number){
    if(this.progress >=100 && val >= 0){
        this.changeVal.emit(100)
        return  this.progress = 100;
      }
      if(this.progress <=0 && val < 0){
        this.changeVal.emit(0)
        return  this.progress = 0;
      }
      this.progress = this.progress + val
      return this.changeVal.emit(this.progress)
  }
}
