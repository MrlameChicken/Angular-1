import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { HardAuthService } from './hard-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private auth: HardAuthService, private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.auth.isAuth() === true)  
    return true
    else
    this.route.navigate(['/login'])
    return false
  }
}
