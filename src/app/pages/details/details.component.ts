import { DatabaseService } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  Student: any;
  Ref: any;
  constructor(public _data: DatabaseService, public _route: ActivatedRoute) { }

  ngOnInit(){
      //get Student id
      this.Ref = this._route.snapshot.paramMap.get('ref');
      console.log('Id:', this.Ref);
  
      //geting single student info
      this.Student = this._data.getStudentInfo(this.Ref).subscribe((i) => {
        this.Student = i;
        console.log(this.Student);
      });
  }

}
