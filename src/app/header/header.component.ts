import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DatabaseService } from '../shared/database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  constructor(private db: DatabaseService) { }


  ngOnInit(): void { }


 async onSaveData() {
    await this.db.saveRecepies().then(resp => console.log(resp))
  }
}
