import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent {
  title = 'chef-maker';

  email = '' as string;
  password = '' as string;

  constructor(public auth : AuthService, public router: Router) {
    
  }

  loginAprovado()
  {
    this.router.navigate(['/home'])
  }


}
