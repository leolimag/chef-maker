import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Route, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chef-maker';

  email = '' as string;
  password = '' as string;
 
  

  constructor(public auth : AuthService, public router: Router) {
  }

  

 

}
