import { Component, OnInit } from '@angular/core';

import { DatabaseService } from './../../services/database.service';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  persons: any;
  constructor(public _data: DatabaseService) { }

  AddUsers(UserData: NgForm) {
    this._data.Adduser(UserData.value);
  }

  ngOnInit(){
    this._data
      .GetUsers()
      .snapshotChanges()
      .subscribe((action) => {
        console.log(action);
        this.persons = action;
      });
  }

}
