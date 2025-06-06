import { Component } from '@angular/core';
import { Subscribe } from 'src/app/Services/Subscribe.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor(private subscribe:Subscribe){

  }
  onSubscribe(){
    this.subscribe.onSubscribeClicked("bye");
  }
}
