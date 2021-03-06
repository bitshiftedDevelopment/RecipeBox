import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { RecipeBrowserComponent } from './recipe-browser/recipe-browser.component';
import { RecipeInputFormComponent } from './recipe-browser/recipe-input-form/recipe-input-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home', component: HomeComponent
  },
  { //indev
    path: 'profile-demo',
    component: UserProfileComponent
  },
  {
    path: 'recipe-browser',
    component: RecipeBrowserComponent
  },
  {
    path: 'recipe-upload-form',
    component: RecipeInputFormComponent
  }
  /*{
    path: '**',
    redirectTo: 'home'
  },*/
  /*{
     path: 'login', component: LoginComponent
  },*/
  // { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] } // protected by login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
