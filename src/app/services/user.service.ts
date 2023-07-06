
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import firebase from 'firebase/compat';
import { AppUser } from '../models/app-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private database:AngularFireDatabase) {

   
   }

   save(user:firebase.User)
   {
    this.database.object('/users/'+user.uid).update(
      {
        name:user.displayName,
        email:user.email

      }
    );
   }

   get(uid:string):Observable<AppUser>
   {
      
      return this.database.object<AppUser>('/users/'+ uid).valueChanges();
   
   }


}
