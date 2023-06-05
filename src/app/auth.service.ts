import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'
import { Route, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  error: any;

  constructor(public auth: AngularFireAuth, public route: Router) { 

  }


  async registerWithEmail(email: string, password: string) {
    try {
      const credential = await this.auth.createUserWithEmailAndPassword(email, password);
      this.user = credential.user;
      // Redirecionar para a página de sucesso ou qualquer outra página desejada
      this.route.navigate(['/home']);
    } catch (error) {
      this.error = error;
    }
  }
  async emailSignin(email: string, password: string)
  {
    try{
      const credential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.user = credential.user
    }catch(error)
    {
      this.error = error;
    }
  }

  async googleSignin()
  {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.auth.signInWithPopup(provider);
      this.user = credential.user
    } catch (error) {
      this.error = error;
    }
  }


  async signOut()
  {
    await this.auth.signOut();
    this.user = null;
  }



}
