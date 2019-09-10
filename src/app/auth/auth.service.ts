import * as firebase from 'firebase';

export class AuthService {

  token: string;

  async signupUser(email: string, password: string) {
    try {

      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      //*@TODO:Add MESSAGE PROMTING USER TO ENTRER VALID PASSWORD OR EMAIL
      console.log(error)
    }
  }


  async signinUser(email: string, password: string) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const tokenBack = await firebase.auth().currentUser.getIdToken();
      this.token = tokenBack;

    } catch (error) {
      console.log(error)
    }
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