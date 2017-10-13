import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get('posts/1').subscribe(response => {
      console.log(response);
    });
  }
}
