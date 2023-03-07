import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})

export class ProgressComponent {
  progress1: number =30;
  progress2: number =35;

  get getProgress1(){
    console.log('j')
    return `${this.progress1}`
  }
  get getProgress2(){
    return `${this.progress2}`
  }


}
