import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit, OnDestroy{
  title = 'chef-maker';

  email = '' as string;
  password = '' as string;

  constructor(public auth : AuthService, public router: Router, private renderer: Renderer2) {
    
  }

  loginAprovado()
  {
    this.router.navigate(['/home'])
  }


  ngOnInit() {
    this.renderer.addClass(document.body, 'cor-login-background');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'cor-login-background');
  }

}
