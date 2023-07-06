import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, retry } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate  {

  constructor(private auth:AuthService,private router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.auth.user$.pipe(
      
        map(user=>{
        
          if (user) return true;
          console.log(user);
          this.router.navigate(['/login'],{ 
            queryParams:
            {
              returnUrl: state.url
            }
          });
          return false;
        })
      
     );
     
  }
}
