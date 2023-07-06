import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  
  appUser:AppUser=null;
  
  constructor(private auth:AuthService) {
    auth.appUser$.subscribe(appuser=> 
      {
        //console.log(appuser);
        this.appUser=appuser
      });
   }

  logout(){
     this.auth.logout();
  }

}
