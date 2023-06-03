import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private databaseService: DatabaseService){}


  getPosts(){
    console.log(this.databaseService.getPosts());
    return this.databaseService.getPosts();
  }

  goToPost(){
    this.router.navigate(['/post']);
  }

}
