import { Component, OnInit, Input } from '@angular/core';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  constructor(private sidenav: SidenavService) { }
  @Input() title: string;
  @Input() loggedInUser: string;
  sidenavOpen=false;
  toggleSidenav(){
    this.sidenavOpen=!this.sidenavOpen;
    this.sidenav.toggle();
    console.log("NAV STATUS:" +(this.sidenavOpen?"open":"closed"));
  }

  ngOnInit() {
  }

}
