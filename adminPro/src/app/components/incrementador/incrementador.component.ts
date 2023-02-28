import { Component } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',

})
export class IncrementadorComponent {
  progress : number = 20;

  get getPorcentaje(){

    return  `${this.progress}%`;
  }


  changeValue( val: number){

    if(this.progress >=100 && val >= 0){
        return  this.progress = 100;
      }
      if(this.progress <=0 && val < 0){
        return  this.progress = 0;
      }
      else{
        return this.progress = this.progress + val;
      }

  }
}
