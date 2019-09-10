import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  token: string;

  constructor(private myRouter: Router) {

  }

  async signupUser(email: string, password: string) {
    try {

      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      //*@TODO:Add MESSAGE PROMTING USER TO ENTRER VALID PASSWORD OR EMAIL
      console.log(error)
    }
  }


  signinUser(email: string, password: string) {

    firebase.auth().signInWithEmailAndPassword(email, password).then(creds => {
      this.myRouter.navigate(['/'])
      firebase.auth().currentUser.getIdToken().then(token => this.token = token)
    });

  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then(token => this.token = token)
    return this.token;

  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }
}