import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ // registery component , directive or a pipe
    AppComponent
  ],
  imports: [ // preloads/ dependency module/ helper or utility modules
    BrowserModule,
    FormsModule
  ],
  providers: [], // register & launch injectibales (services)
  bootstrap: [AppComponent]  //load the component
})
export class AppModule { } // registery/loader  for angular building blocks
