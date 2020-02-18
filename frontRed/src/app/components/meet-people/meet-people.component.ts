import { ServicePerson } from './../../services/ServicePerson';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-people',
  templateUrl: './meet-people.component.html',
  styleUrls: ['./meet-people.component.scss']
})
export class MeetPeopleComponent implements OnInit {
  p: any;
  listInfo: any;
  showinfo: boolean;

  constructor(private ServicePerson: ServicePerson) {
    this.showinfo = false;
  }


  ngOnInit() {
    this.ServicePerson.requestPerson().subscribe(res => {
      this.listInfo = res
    })
  }

}
