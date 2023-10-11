import {Component, Input} from '@angular/core';
import {question} from "../model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  buttonText = "+";
  @Input() questionInfo: question;
  paragraph(){
    if(this.buttonText === "+"){
      this.buttonText = "-"
    }
    else {
      this.buttonText = "+"
    }
  }
}
