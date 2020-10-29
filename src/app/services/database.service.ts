import { AngularFirestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(public _fire: AngularFirestore) {}

  //add user function
  Adduser(data) {
    return this._fire
      .collection('student')
      .add(data)
      .then((results) => {
        console.log('successfully added user');
      })
      .catch((err) => {
        console.log('err occured :', err);
      });
  }

  //function to read data from firebase
  GetUsers() {
    return this._fire.collection('student');
  }
    //get single student data
    getStudentInfo(ref) {
      return this._fire.collection('student').doc(ref).valueChanges();
    }
}
