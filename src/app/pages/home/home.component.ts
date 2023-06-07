import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database/database.service';
import { AuthService } from 'src/app/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private databaseService: DatabaseService, public auth : AuthService){}

  receitas?: Observable<any[]>;
  

  ngAfterViewInit() {
    this.receitas = this.databaseService.getPosts();
  }

  getPosts(){
    return this.receitas;
  }

  goToPost(){
    this.router.navigate(['/post']);
  }

  voltarAoLogin(){
    this.router.navigate(['/']);
  }

}
