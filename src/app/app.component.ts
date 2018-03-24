import { Component, OnInit, ViewChild } from '@angular/core';

import { MaterialAppModule } from './ngmat/ngmat.module';
import { MatSidenav } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SidenavService } from './sidenav.service';

import { Details } from './card-person/details'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RecipeBox';
  loggedInUser = 'none'; // set to none with no user logged in, otherwise the display name of the user

  @ViewChild('sidenav') public sidenav: MatSidenav;
  public constructor(private sidenavService: SidenavService) { }

  public ngOnInit(): void {
    // Store sidenav to service
    this.sidenavService.setSidenav(this.sidenav);
  }
}
