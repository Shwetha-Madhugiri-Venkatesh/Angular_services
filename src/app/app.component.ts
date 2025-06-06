import { Component } from '@angular/core';
import { Subscribe } from './Services/Subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular_services';

  constructor(private subscribe:Subscribe){
    
  }

  onSubscribe(){
    this.subscribe.onSubscribeClicked("hi");
  }
}