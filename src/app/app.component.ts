import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  constructor( auth:AuthService, router:Router,userService:UserService){
   auth.user$.subscribe(user=>
    {
      if(user){
        userService.save(user);

        let returnUrl=localStorage.getItem('returnUrl');
        console.log('here');
        router.navigateByUrl(returnUrl);
      }
    })
  }
}
