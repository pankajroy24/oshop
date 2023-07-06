import { AppUser } from './../models/app-user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth:AuthService,private userService:UserService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.appUser$.pipe(map(appuser=> appuser.isAdmin));
  }
}
