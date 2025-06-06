import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './header/child/child.component';
import { Subscribe } from './Services/Subscribe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Subscribe],
  bootstrap: [AppComponent]
})
export class AppModule { }
