import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

/* The interface declares the properties of the custom user object.
 * Feel free to add any custom data you want here to extend the basic Firebase auth data.
 */
import { User } from './user';
// interface User {
//   uid: string;
//   email: string;
//   photoURL?: string;
//   displayName?: string;
//   favoriteColor?: string;
// }

@Injectable()
export class AuthService {
  user: Observable<User>;
  /*
   * The constructor will set the Observable. First it receives the current Firebase auth state.
   * If present, it will hit up Firestore for the user’s saved custom data.
   * If null, it will return an Observable.of(null).
   */
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return Observable.of(null)
        }
      })
  }

  /* googleLogin()
   * This method triggers the popup window that authenticates the user with their Google account.
   * It returns a Promise that resolves with the auth credential.
   */
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  /* oAuthLogin(provider)
   * The oAuthLogin() method is useful if you have multiple OAuth options because
   * it can be reused with different providers.
   */
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  /* updateUserData(user)
   * This private method runs after the user authenticates and sets their information to the Firestore database.
   * We pass the { merge: true } option to make this a non-destructive set.
   */
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = { // any additional data to be saved must be added here and to the class above
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      favoriteColor: user.favoriteColor || 'unset',
      roles: user.roles || {
        subscriber: true,
        editor: false,
        admin: false
      }
    }
    return userRef.set(data, { merge: true })
  }

  /* signOut()
   * signs out the authenticated user and returns them home
   */
  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/home']);
    });
  }

  // ROLE FUNCTIONS
  // Add functions here for additional user priviledges
  // Note that creation is handled within Firestore security

  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber']
    return this.checkAuthorization(user, allowed)
  }
  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor']
    return this.checkAuthorization(user, allowed)
  }
  canDelete(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }
  /* checkAuthorization(user,roles[])
   * compares the user's role against an array of
   * allowed roles to see if they are authorized for
   * the functions above
   */
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true
      }
    }
    return false
  }
}
