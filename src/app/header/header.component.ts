import { Component } from '@angular/core';
import { Subscribe } from '../Services/Subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private subscribe:Subscribe){

  }
  onSubscribe(){
    this.subscribe.onSubscribeClicked("hello");
  }
}
