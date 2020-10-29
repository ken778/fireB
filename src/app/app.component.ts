import { DatabaseService } from './services/database.service';
import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fireBase-App';
  persons: any;
  constructor(public _data: DatabaseService) {}
  //add user to our database
  AddUsers(UserData: NgForm) {
    this._data.Adduser(UserData.value);
  }

  ngOnInit() {
    this._data
      .GetUsers()
      .snapshotChanges()
      .subscribe((action) => {
        console.log(action);
        this.persons = action;
      });
  }
}
