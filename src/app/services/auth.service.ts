
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import { Observable, switchMap,reduce } from 'rxjs';
import { AppUser } from '../models/app-user';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  user$:Observable<firebase.User>=null;
  
  
  constructor(
    private afAuth:AngularFireAuth,
    private route:ActivatedRoute,
    private router:Router,
    private userService:UserService
    ) 
    {
      this.user$=afAuth.authState;
    }

  login(){
     
     
     let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl') || '/';
     localStorage.setItem('returnUrl',returnUrl);
     
     
     this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    
    
  }

  logout(){
    this.afAuth.signOut();
  }

  get appUser$():Observable<AppUser>{
    return this.user$.pipe(switchMap(user=> 
      {
          return this.userService.get(user?.uid);
      }));
      
  }
}
