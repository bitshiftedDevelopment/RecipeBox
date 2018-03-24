import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { Details } from '../card-person/details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public sidenav: SidenavService) { }
  title='My-App';
  sidenavOpen=false;
  toggleSidenav(){
    this.sidenavOpen=!this.sidenavOpen;
    this.sidenav.toggle();
    console.log("NAV STATUS:" +(this.sidenavOpen?"open":"closed"));
  }

  ngOnInit() {
  }

  details = {
    given:'John',
    surname:'Smith',
    username:'jsmith',
    email:'jsmith@fakemail.net',
    avatarURL:'https://material.angular.io/assets/img/examples/shiba1.jpg',
    address:'123 Pretend Street, Faketown, Playland',
    mobileNo:'555-555-1234',
    workNo:'555-555-1212'
  }
}
