import { Person } from './../../logic/Person';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InsertPublicationComponent } from '../insert-publication/insert-publication.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  person:Person;
  
  constructor(private _router:Router,public dialog: MatDialog) { 
    if(sessionStorage.getItem("persona")){
      this.person = JSON.parse(sessionStorage.getItem('persona')); 
    }else{
      this.person = new Person();
    }
  }

  ngOnInit() {

  }

  insertPublication(){
    const dialogRef = this.dialog.open(InsertPublicationComponent, {
      data: { name: 1, person: this.person }
    });
    dialogRef.afterClosed().subscribe(result => {
      this._router.navigate([``]);
      /*this.publicationService.requestpublication().subscribe(res => {
        this.listInfo = res;
      });*/
    });
  }

}
