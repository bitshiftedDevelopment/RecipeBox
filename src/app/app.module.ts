import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialAppModule } from './ngmat/ngmat.module';
import { SidenavService } from './sidenav.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopnavComponent } from './topnav/topnav.component';
import { CardPersonComponent } from './card-person/card-person.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    CardPersonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialAppModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
