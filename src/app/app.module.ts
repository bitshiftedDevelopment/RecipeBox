import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '@env/environment';

import { AppRoutingModule } from './app-routing.module';
import { MaterialAppModule } from './ngmat/ngmat.module';
import { SidenavService } from './sidenav.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopnavComponent } from './topnav/topnav.component';
import { CardPersonComponent } from './card-person/card-person.component';

import { AuthModule } from './auth/auth.module';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { RecipecardComponent } from './recipecard/recipecard.component';
import { RecipeBrowserComponent } from './recipe-browser/recipe-browser.component';
import { RecipeInputFormComponent } from './recipe-browser/recipe-input-form/recipe-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    CardPersonComponent,
    UserProfileComponent,
    UserDisplayComponent,
    RecipecardComponent,
    RecipeBrowserComponent,
    RecipeInputFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialAppModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
