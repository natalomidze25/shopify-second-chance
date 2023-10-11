import {Component, Input,} from '@angular/core';

@Component({
  selector: 'app-input',
  template: `<div class="input-button-div" [class.div-bg]="bgColor === 'white'">
  <input placeholder="Enter your email address" [class.input-bg]="bgColor === 'white'">
  <button>Start free trial</button>
</div>`,
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() bgColor:string="";



}
