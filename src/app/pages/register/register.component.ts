import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  
  email= '' as string;
  password= '' as string;
  confirmarPass = '' as string;
  errorMessage= '' as string;

  constructor(private authService: AuthService, private renderer: Renderer2, public route: Router) { }

  register() {
    if (this.password.length >= 6){
      this.authService.registerWithEmail(this.email, this.password)
      .catch(error => {
        this.errorMessage = error.message;
      });
    } else {
      alert("A senha deve ter no mínimo 6 caracteres!")
    }

  }

  voltarAoLogin(){
    this.route.navigate(['/']);
  }

  ngOnInit() {
    this.renderer.addClass(document.body, 'cor-login-background');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'cor-login-background');
  }

}
