import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, CommonModule, LoadingBarHttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ApiService ]
})
export class AppModule { }
