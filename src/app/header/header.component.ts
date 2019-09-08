import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { DatabaseService } from "../shared/database.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  constructor(private db: DatabaseService) { }

  ngOnInit(): void { }

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
}
