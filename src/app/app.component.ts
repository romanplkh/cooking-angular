import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {




  title = 'cooking';

  loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDPRrVHCKgwpTKsI_EwajKG6lCJKpy9sCU",
      authDomain: "cooking-ang.firebaseapp.com"
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
