import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { environment } from '@env/environment';

import { AppRoutingModule } from './app-routing.module';
import { MaterialAppModule } from './ngmat/ngmat.module';
import { SidenavService } from './sidenav.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopnavComponent } from './topnav/topnav.component';
import { CardPersonComponent } from './card-person/card-person.component';

// indev
import { AuthModule } from './auth/auth.module';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    CardPersonComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialAppModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
