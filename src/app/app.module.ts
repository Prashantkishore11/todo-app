import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http' ;
//import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
   // HttpModule
  //  MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
