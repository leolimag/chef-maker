import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}


  goToPost(){
    this.router.navigate(['/post']);
  }

}
