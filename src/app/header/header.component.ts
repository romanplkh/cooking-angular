import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { DatabaseService } from "../shared/database.service";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: []
})
export class HeaderComponent {


  constructor(private db: DatabaseService, private auth: AuthService) { }



  onSaveData() {
    this.db.saveRecipes().subscribe({
      next: resp => {
        console.log(resp);
      },
      error: err => console.log(err)
    });
  }

  onFetchData() {
    this.db.getRecepies();
  }

  onLogout() {
    this.auth.logOut();
  }
}
