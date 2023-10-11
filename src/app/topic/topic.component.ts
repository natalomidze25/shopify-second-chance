import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-topic',
  template: '<p [class.bigTopic]="topicFontIsBig===\'1\'" >{{topicText}}</p>\n',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {
@Input() topicText:string;
@Input() topicFontIsBig:string="0";
}
